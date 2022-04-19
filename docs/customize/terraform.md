# Write your own Terraform

Digger does not limit you to the buttons of its UI. Every team at some point needs to build something unique to their business. We recognise that and make it quite straightforward. Building custom infrastructure with Digger is not any harder than doing it on AWS directly - and you still benefit from centralised state and configuration management provided by Digger.

There are 2 ways to build custom infrastructure with Digger:

1. Terraform overrides in your Infrastructure Repository
2. Custom template (either fork one of Digger's standard Targets or build your own)

## Terraform overrides

This is the preferred way to build custom infrastructure with Digger unless you know fur sure that you will not need the resources provided by one of the default templates (Targets) provided by Digger.

::: tip
Terraform overrides require a connected Infrastructure Repository. You can do that in Settings.
:::

To add ad custom Terraform, simply push a fulder named `_digger_custom` into the `digger` branch of your Infrastructure Repository. If you want your Terraform to be rendered in all environments, put it into the `_shared` subfolder. And if it's for one environment only, put it into a subfolder named `environment-{environmentId}`. Digger will pick up changes from it and render your Terraform alongside the target defaults.

Example folder structure in the Infrastructure Repository:

```
_digger_custom
    _shared
    environment-production
    environment-staging
    environment-dev
_digger_generated
    environment-production
    environment-staging
    environment-dev
digger.yml
digger-config.yml
```

## Custom Targets

Targets are repositories with templated Terraform modules that Digger uses to generate output Terraform for your environments.

This is more work compared to Terraform Overrides option since you'll have to define all the infrastructure yourself. But it also gives you the most flexibility. It also makes the most sense if you are already using Terraform and want to use it with Digger.

::: tip
It may be easier to start out by forking one of Digger's default templates (Targets) which are open source - [this one for example](https://github.com/diggerhq/target-fargate)
:::

When you have built your custom target, all you need to do is to point Digger to it when creating an environment.

::: tip
At the moment custom targets are only supported in the CLI but not in Web UI. You will need to create your environment with the CLI to use Custom Targets.
:::

### Directory Structure

::: warning
Template structure is subject to changing in future versions of digger
:::

Digger Targets are not much different from standard terraform. We use jinja2 under the hood to pass configuration parameters to these templates. The flow is summarised in the visual bellow. Options flow from the digger.yml, along with additional environment options, directly into a template store in a GitHub repository. These are used to render terraform which can be applied in the user's account.

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

```bash
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

In Digger, project names are unique globally. Therefore if you want to guarantee unique names of your resources across environments is to use project_name_environment_name patterns. With that said, many terraform resources also support a name_prefix attribute which guarantee uniqueness. It is good to make use of this name_prefix attribute to avoid problems since in this case terraform will guarantee a unique resource on your behalf:

```bash
resource "aws_s3_bucket" "b" {
  bucket_prefix = "my-dg-test-bucket"
  acl    = "private"
}
```
