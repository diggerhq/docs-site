# Terraform Templates

::: warning
Template structure is subject to changing in future versions of digger
:::

Digger templates are not much different from standard terraform. We use jinja2 under the hood to pass configuration parameters to these templates. The flow is summarised in the visual bellow. Options flow from the digger.yml, along with additional environment options, directly into a template store in a github repository. These are used to render terraform which can be applied in the user's account.

![](https://i.imgur.com/I82kCkX.png)

### Directory Structure

The directory structure of digger templates looks similar to terraform. We run the main files under the `main/` directory. You can see an example terraform template for fargate in this [example repository](https://github.com/diggerhq/target-fargate/tree/example)

```
main/
   file1.tf
   file2.tf
   service.template.tf
module1/
module2/
backend_s3.template.conf
terraform.template.tfvars
```

Bellow the main components of a digger templates are explained:

**main/**: The terraform apply command is run in this context and hence all the .tf files will be included in the generated infrastructure. Any file with the suffix "\*.template.tf" is rendered to a .tf file before the apply and therefore you can use standard jinja template tags {{}} in these files.


**service.template.tf**: This is a special file that is rendered multiple times for each service entry in the digger.yml file. For example, if we have two services svc1 and svc2, we will end up with service-svc1.tf and service-svc2.tf. Each file will be able to use the service options as standard {{}} jinja templates.

**module/**: you can use either local or remote modules as supported by terraform. For local modules you can have these as sister folders and refer to them directly.


### Using Terraform variables

If you want to use terraform variables, define them in your `variables.tf` file or elsewhere in your main/\*.tf files. After that you need to assign values to these variables if they don't have a default value. You can do this in the file [terraform.template.tfvars](https://github.com/diggerhq/target-fargate/blob/example/terraform.template.tfvars)

### Outputs

You can specify outputs anywhere in your template files. By convention it is nice to have all template outputs in a file called `outputs.tf`. All terraform outputs will be exposable after an `env apply` command. To show terraform outputs for an environment, you can run `dg env describe env_name`

### Mapping outputs to Environment Variables

Any output which starts `DGVAR_` prefix will be mapped to an environment variable on release.

### Mapping outputs to secrets

To integrate with Parameter store secrets, create an entry of the secret value and then output the value of it using `DGVAR_` prefix as mentioned above. Here is an example: [database password](https://github.com/diggerhq/target-fargate/blob/example/main/database.template.tf#L43) in parameter store mapped to [outputs](https://github.com/diggerhq/target-fargate/blob/example/main/outputs.template.tf#L40) using its arn value:

```
resource "aws_ssm_parameter" "database_password" {
    name = "${var.app}.${var.environment}.rds.database_password"
    value = local.database_password
    type = "SecureString"
}

#...

# to output a secret, simply output the ARN value of a parameter store
output "DGVAR_POSTGRES_PASSWORD" {
    value = aws_ssm_parameter.database_password.arn
    sensitive = true
}
```

### A note on unique naming

Some resources such as S3 buckets have to be unique globally. In addition, we want to avoid having naming conflicts of resources such as ECS clusters.

In Digger, project names are unique globally. Therefore if you want to gaurantee unique names of your resources across environments is to use project_name_environment_name patterns. With that said, many terraform resources also support a name_prefix attribute which gaurantee uniqueness. It is good to make use of this name_prefix attribute to avoid problems since in this case terraform will gaurantee a unique resource on your behalf:

```
resource "aws_s3_bucket" "b" {
  bucket_prefix = "my-dg-test-bucket"
  acl    = "private"
}
```