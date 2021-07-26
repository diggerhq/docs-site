---
sidebarDepth: 1
---
# Digger vs Other

Existing cloud platforms on the market today give you one of the two:

- **Either** great developer experience and ease of use so you can move fast
- **Or** power and flexibility so you can build a future-proof stack

Digger gives you **both**, because under the hood it generates infrastructure-as-code (Terraform) and manages your cloud account through it.

|                             | AWS / GCP / Azure       | Heroku & PaaS     | Firebase & BaaS | Digger + AWS
| --------------------------- | ----------------------- | ----------------- |-----------------|--------------
| Ease of use & DX            | -                       | ++                | ++++            | ++++
| Power & flexibility         | ++++                    | -                 | --              | ++++
| Cost                        | $                       | $$$$              | $$$$            | $


Digger is quick to start and easy to use, but you can also customise every bit whenever you need it because the full power of AWS is still accessible.

## Heroku and other platforms-as-a-service
PaaS like Heroku or Digital Ocean App Platform run your code on their servers and provide you with an easy to use web interface to manage your application. They completely hide the infrastructure complexity from you. So you can start quickly and move fast using a PaaS. This is great.

But platforms-as-a-service offer fewer services than big cloud providers and you don't have access to the lower infrastructure level. Teams tend to outgorw it quickly and have to migrate. PaaS also can be 2x - 5x more expensive than AWS, and do not give you as much free credits as big cloud providers.

Digger gives you the benefits of a PaaS without the downsides. It looks and feels like a PaaS, so you can start quickly and move fast. But because Digger manages your cloud account through infrastructure-as-code, you have full access to the underlying infrastructure. You can extend and customise every bit as and when you need to, so you never outgrow Digger. See also [Digger vs Heroku feature comparison](#digger-vs-heroku-feature-comparison)

## Firebase and other backend-as-a-service platforms

Tools like Firebase, Supabase or Nhost provide a set of drop-in components for your backend: database, serverless functions, storage, authentication. Unlike Heroku, you don't deploy your backend to Firebase – you configure it so it *is* your backend. That's easier and less maintenance than PaaS. It is also even more limiting.

Digger is more flexible. You can create functions and databases in Digger UI in just a few clicks, so it is just as easy. But under the hood the databases are RDS instances and functions are Lambdas, and you have access to their full configuration.

Digger also supports containers, queues and a wide variety of other AWS services. So you can start simple and gradually increase complexity of your stack as your needs evolve.

## Vercel and Netlify

These are platforms optimised for JAMStack, static sites and front-end JavaScript applications. They also provide simple serverless functions. They are a great choice for small front-end projects with little to no backend complexity.

## Simplified services by AWS

**AWS Elastic Beanstalk** is the original platfrom-as-a-service by AWS, their answer to Heroku in 2011. It did not change much since then. Beanstalk is completely segregated from other AWS services and does not take advantage of modern technologies like containers or serverless. If you need a PaaS there there is little reason to choose Beanstalk over Heroku, AWS AppRunner or Digital Ocean today.

**AWS AppRunner** is a newer platform-as-a-service by AWS that support containers and zero-configuration CI/CD, similar to Heroku today. Like Heroku it is a black box that does not give you control over the internals, so you will need to rebuild your stack eventually. That's not the case with Digger because it generates Terraform and allows you to customise it. AppRunner costs 50% more compared to ECS Fargate that both Digger and AppRunner use under the hood to run containers. And you can configure Digger to use even more cost-effective options like docker-compose on EC2.

**AWS Amplify** is a frontend-centric service by AWS, similar to Netlify or Vercel. Just like these tools, Amlify is great if your project is small and mostly front-end.

**AWS Copilot** is a command-line tool to deploy containers onto AWS ECS. Similar to Fly.io and Google Cloud Run.

**AWS Lightsail** is a Virtual Private Server pre-configured by Amazon, similar to a Droplet by Digital Ocean. Before cloud services became popular, you'd rent a VPS from a hosting provider and install everything onto it yourself. Still handy for things like Wordpress, although in 2021 it is probably better to use a managed Wordpress provider like Kinsta or WP Engine.

## Infrastructure-as-code

**Terraform** is an open-source tool by Hashicorp and the most popular infrastructure-as-code tool in the DevOps community. **Digger uses Terraform**, so it is not correct to compare Digger to Terraform. You can think of Digger as a "compiler" that outputs Terraform. It's completely customisable and you can use your own templates - see [Write your own Terraform](../customize/terraform)

**Cloud Formation** was the first infrastructure-as-code tool by Amazon, released in 2011. It is not open source and only supports AWS. Despite its verbose syntax it is still widely used.

**AWS CDK** is the newer set of infrastructure-as-code tools by Amazon. It allows to define infrastructure on AWS using languages like JavaScript and Python. Under the hood it produces CloudFormation templates.

**Pulumi** like CDK also allows to define infrastructure in familiar languages like JavaScript and Python. But unlike CDK it can work with different cloud providers, not just AWS.

**The common problem** of all these tools is that they are low-level, and therefore not reusable. They force you to be aware of all the implementation details. Terraform itself is a very simple language; the hard part is learning all the AWS concepts like VPCs, ACLs, IAM, security groups etc.

This is why we designed Digger as an _optional_ abstraction on top of Terraform, the most popular open-source infrastructure-as-code tool.

## Kubernetes

Kubernetes is the de-facto standard for container orchestration. Originally created by Google, today managed Kubernetes is offered by every cloud provider. In a nutshell, Kubernetes takes care of resource allocation, networking and load balancing for your containers. If your stack has many microservices (say 15 or more) then you probably want to run it on Kubernetes.

It is not correct to compare Digger with Kubernetes, because **Digger supports Kubernetes**. You can easily provision a Kubernetes cluster with Digger by simply using a different [Target](./understanding-targets). The default target in Digger is ECS Fargate because if you are just starting out then Kubernetes can be an overkill in terms of both complexity and cost.

Container orchestration engine is just one part of your stack. Others include webapps, storage, databases, queues, caches, etc etc. Digger manages your _entire_ stack. You can use Kubernetes as your orchestration engine, or you can choose something else. All you need to do to switch orchestration engines in Digger is create a new environment and select a different target.

## Serverless

This is a loaded term :)

**Serverless computing** is a way of running code without any fixed capacity

----------

### Digger vs Heroku feature comparison

|                             | Digger + AWS            | Heroku            |
| --------------------------- | ----------------------- | ----------------- |
| Your code runs in           | Your AWS account        | Heroku servers    |
| Control over infrastructure | Yes                     | No                |
| Free credits                | up to $100k             | None              |
| Compute with 1GB of RAM     | $7.6 per month          | $25 per month     |
| Database with 8GB of RAM    | $99 per month           | $200 per month    |
| Services provided           | 200+                    | ~10               |
| Regions                     | 25                      | 6                 |
| Compliance                  | Enterprise-grade        | Limited           |
| Infrastructure-as-code      | Yes                     | No                |
| Kubernetes                  | Yes                     | No                |
| Serverless                  | Yes                     | No                |
| Data stays in your cloud    | Yes                     | No                |
