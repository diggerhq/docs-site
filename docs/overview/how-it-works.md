# How It Works

Unlike traditional PaaS like Vercel or Heroku, Digger is not hosting your code on Digger servers. Instead, it manages your cloud account (AWS, GCP, Azure) through infrastructure-as-code. It generates Terraform and runs it on Digger servers. Terraform is the industry standard for all things DevOps.

Generating IaC allows Digger to escape the "curse of PaaS" – inevitably teams need something that a simplified platform cannot provide. They start building more and more on AWS directly, and either lose all the PaaS benefits or end up recreating it in-house.

With Digger, that will never happen – you have access to the full power of AWS from day 1 and can customise what you need when you need it. You can even build your infrastructure entirely by hand and still benefit from the centralised state management provided by Digger.

You can think of Digger as a "compiler" that takes the infrastructure needs of your applications and services as input and produces Terraform as output.

The problem with infrastructure-as-code today (Terraform, CloudFormation, CDK, Pulumi, etc) is that it is not reusable. That is because implementation, configuration and interface are mixed up together. There is no way to build something without thinking of the low-level implementation details. It's like an assembly language, that's why it is so hard.

To address this, Digger introduces some new concepts:

- **Services** (containers, functions, webapps) - deployable pieces of your code

- **Resources** (databases, object storage, queues, etc) - infrastructure dependencies required by Services. For example, "postgres 12 database". Services and Resources form the *logical* structure of your stack. We call it "infrastructure interface" - what your code needs from the infrastructure

- **Environments** - isolated independent copies of your entire stack. Each Environment has Configuration that defines the specific *implementation* of infrastructure supporting your code. For example, your Dev environment could be a small EC2 box with docker-compose, and Production could run in a dedicated Kubernetes cluster with multi-AZ RDS. Services and Resources can be configured independently for each environment.

Digger takes the logical structure of your stack, combines it with environment configuration, generates infrastructure-as-code and runs it on the backend, updating resources in your AWS account. It then exports generated Terraform into a designated repository of your choice. You can put your custom Terraform in there too and Digger will pick it up. So you can have it entirely your way if you'd like.

Knowing the structure of your stack and the state of each environment allows Digger to do things that no other tool can do. Like zero-configuration CI or accurate cost prediction. Or even move from AWS to GCP or Azure in one click – all you need to do is create a new environment.