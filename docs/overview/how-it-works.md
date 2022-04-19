# How Digger Works

Unlike traditional PaaS like Vercel or Heroku, Digger is not hosting your code on Digger servers. Instead, it manages your cloud account (AWS, GCP, Azure) through infrastructure-as-code. It generates Terraform (the industry standard DevOps tool) and runs it on Digger servers. Terraform in turn ensures that your stack is in the exact state it needs to be.

**You can think of Digger as a "compiler" that takes the infrastructure needs of your applications and services as input and produces Terraform as output.**

Generating IaC allows Digger to escape the "curse of PaaS" – inevitably teams need something that a simplified platform cannot provide. They start building more and more on AWS directly, and either lose all the PaaS benefits or end up recreating it in-house.

With Digger, that will never happen – you have access to the full power of AWS from day 1 and can customise what you need when you need it. You can even build your infrastructure entirely by hand and still benefit from the centralised state management provided by Digger.

## Technical design

The problem with infrastructure-as-code today (Terraform, CloudFormation, CDK, Pulumi, etc) is that it is not reusable. That is because implementation, configuration and interface are mixed up together. There is no way to build something without thinking of the low-level implementation details. It's like an assembly language, that's why it is so hard.

To address this, Digger introduces several new [Concepts](./concepts):

- **Services** (containers, functions, webapps) - your containers, functions, webapps - basically your application code that can be deployed somewhere and needs supporting infrastructure

- **Resources** (databases, object storage, queues, etc) - infrastructure dependencies required by Services. For example, "postgres 12 database".

Services and Resources form the _logical_ structure of your stack. We call it "infrastructure interface" - what your code needs from the infrastructure

- **Environments** - isolated independent copies of your entire stack. Each Environment has Configuration that defines the specific _implementation_ of infrastructure supporting your code. For example, your Dev environment could be a small EC2 box with docker-compose, and Production could run in a dedicated Kubernetes cluster with multi-AZ RDS. Services and Resources can be configured independently for each environment.

- **Targets** - generic templates that generate specific implementation (Terraform) for each environment. Each Target can support a wide variety of stacks. More in [Understanding Targets](#understanding-targets)

Digger takes the logical structure of your stack, combines it with environment configuration, generates infrastructure-as-code and runs it on the backend, updating resources in your AWS account. It then exports generated Terraform into a designated repository of your choice. You can put your custom Terraform in there too and Digger will pick it up. So you can have it entirely your way if you'd like.

Knowing the structure of your stack and the state of each environment allows Digger to do things that no other tool can do. Like zero-configuration CI or accurate cost prediction. Or even move from AWS to GCP or Azure in one click – all you need to do is create a new environment.

## Understanding Targets

Digger Targets are the templates for the infrastructure that Digger creates and manages in your AWS account. We had to come up with a new name because Terraform files are commonly referred to as "templates" - whereas Digger Targets _produce_ Terraform, so they are "templates of templates" in a way.

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
