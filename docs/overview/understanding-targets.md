# Understanding Targets

Digger Targets are the templates for the infrastructure that Digger creates and manages in your AWS account. We had to come up with a new name because Terraform files are commonly referred to as "templates" - whereas Digger Targets _produce_ Terraform, so they are "temmplates of templates" in a way.

This extra layer is needed because Digger cleanly separates infrastructure implementation from configuration. A Target does not describe your infrastructure precisely - instead, it describes a particular architecture that can produce many possible variations for a wide variety of stacks, depending on configuration.

```
Stack State + Target + Environment Config => Terraform for a particular environment
```
- **Stack State** is the logical structure of your stack - apps, services, databases etc.
- **Environment Config** is configuration specific to a particular environment. 
- **Target** takes Stack State and Environment Config and produces Terraform

:::tip
If you are using Digger CLI or have connected Infrastructure Repository then you can find **Stack State** in the `digger.yml` file and **Environment Config** in the `digger.config.yml` file
:::

For example, let's say your stack is 1 webapp and 3 backend services using a Postgres database. Your production environment may run on a dedicated Kubernetes cluster and use a large multi-AZ RDS database. Whereas your dev environments may fit on a single EC2 instance with docker-compose to save on costs. The logical structure of every environment is the same, but the resulting Terraform template is different.