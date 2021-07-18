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

**AWS Elastic Beanstalk** is a platfrom-as-a-service by AWS, their answer to Heroku. It was released in 2011 and did not change much since then. It is completely segregated from other AWS services and does not take advantage of modern technologies like containers or serverless. If you need a PaaS there there is little reason to choose Beanstalk over Heroku or Digital Ocean today.

**AWS Amplify** is a frontend-centric service by AWS, similar to Netlify or Vercel. Just like these tools, Amlify is great if your project is small and mostly front-end.

**AWS Copilot** is a command-line tool to deploy containers onto AWS ECS. Similar to Fly.io and Google Cloud Run.

**AWS Lightsail** is a Virtual Private Server pre-configured by Amazon, similar to a Droplet by Digital Ocean. Before cloud services became popular, you'd rent a VPS from a hosting provider and install everything onto it yourself. Still handy for things like Wordpress, although in 2021 it is probably better to use a managed Wordpress provider like Kinsta or WP Engine.

## Terraform, Cloudformation, Pulumi and IaC

Modern IaC tools offer a one-to-one mapping for cloud resources. Digger leverages these tools under the hood to generate this infrastructure. But you can think of digger as one layer above spanning infrastructure, CI/CD, software releasing an monitoring. Since its a layer above, it makes your deployments agile since you are able to move from one infrastructure target to another with ease.

## Kubernetes
Kubernetes abstracts the compute layer from hosts. If your stack is on kubernetes you can in theory move around between cloud providers with ease. But one thing you should take note of is that there is leaky abstractions as you start integrating natively with cloud provider services. For example, if you wish to use AWS SageMaker or Rekognition for ML, the abstractions start to leak and your application is no longer portable. Digger seeks to further minimise these cloud native abstractions to increase portability. Looking at it from another angel, digger template span managed kubernetes clusters such as EKS, GKE and AKE, as well as the resources around them.

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
