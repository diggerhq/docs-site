# Digger vs Other

Existing cloud platforms on the market today give you one of the two:

- **Either** great developer experience and ease of use so you can move fast
- **Or** power and flexibility so you can build a future-proof stack

Digger gives you **both**, because under the hood it generates infrastructure-as-code (Terraform) and manages your cloud account through it.

It is quick and simple for common use cases, and you can customise every bit whenever you need it. Because with Digger you retain access to the full power of AWS.

## Heroku and other platforms-as-a-service
PaaS like Heroku or Digital Ocean App Platform run your code on their servers and provide you with an easy to use web interface to manage your application. They completely hide the infrastructure complexity from you. So you can start quickly and move fast using a PaaS. This is great.

But platforms-as-a-service offer fewer services than big cloud providers and you don't have access to the lower infrastructure level. Teams tend to outgorw it quickly and have to migrate. PaaS also can be 2x - 5x more expensive than AWS, and do not give you as much free credits as big cloud providers.

Digger gives you the benefits of a PaaS without the downsides. It looks and feels like a PaaS, so you can start quickly and move fast. But because Digger manages your cloud account through infrastructure-as-code, you have full access to the underlying infrastructure. You can extend and customise every bit as and when you need to, so you never outgrow Digger.

|                             | AWS managed by Digger   | Heroku            |
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

## Firebase and other backends-as-a-service platforms

Tools like Firebase, Supabase or Nhost provide a set of drop-in components for your backend: database, serverless functions, storage, authentication. Unlike Heroku, you don't deploy your backend to Firebase – you configure it so it *is* your backend. That's easier and less maintenance than PaaS. It is also even more limiting.

Digger is more flexible. You can create functions and databases in Digger UI in just a few clicks, so it is just as easy. But under the hood the databases are RDS instances and functions are Lambdas, and you have access to their full configuration.

Digger also supports containers, queues and a wide variety of other AWS services. So you can start simple and gradually increase complexity of your stack as your needs evolve.

## Vercel and Netlify

These are platforms optimised for JAMStack, static sites and front-end JavaScript applications. They also provide simple serverless functions. They are a great choice for small front-end projects with little to no backend complexity.

## AWS Lightsail
Lightsail is your Virtual Private Server pre-configured by Amazon, a rough equivalent of a Droplet by Digital Ocean. This is how web development was done in the pre-cloud era, before the modern approaches to scalability and observability were established. You get a Linux or Windows virtual machine running on Amazon servers, SSH into it and do whatever you want. You can install as many web servers or databases as you want and this can be very cost-efficient. But the burden of maintenance, backups and troubleshooting is also all yours. While this is *not* the way you want to build your production stack in 2021, Lightsail remains a great tool for experimentation and unassuming projects.  


## AWS ElasticBeanstalk
Elastic Beanstalk is an AWS service which allows for easy deployment of common apps and they also support containers. They have their own cli tool `eb` to manage deploying. In a way, Elastic Beanstalk is a PaaS-like platform like Heroku but cloud-native and on AWS. However if you start on AWS Beanstalk, it is hard to migrate your stack to another stack such as ECS. Unless if you use digger to deploy. In fact we have worked with several clients who wanted to move away from Beanstalk to a sister architecture such as ECS as their scale grew out of that which Beanstalk provides.

## AWS Copilot
Copilot, previously ECS-cli is CLI tool to set up and deploy to Amazon ECS. Copilot uses cloudformation under the hood while digger relies on terraform. Copilot only supports ECS whereas digger supports multiple targets such as EKS and others.

## Google Cloud Run
Digger template for Google Cloud Run coming soon.

## Terraform, Cloudformation, Pulumi and IaC
Modern IaC tools offer a one-to-one mapping for cloud resources. Digger leverages these tools under the hood to generate this infrastructure. But you can think of digger as one layer above spanning infrastructure, CI/CD, software releasing an monitoring. Since its a layer above, it makes your deployments agile since you are able to move from one infrastructure target to another with ease.

## Kubernetes
Kubernetes abstracts the compute layer from hosts. If your stack is on kubernetes you can in theory move around between cloud providers with ease. But one thing you should take note of is that there is leaky abstractions as you start integrating natively with cloud provider services. For example, if you wish to use AWS SageMaker or Rekognition for ML, the abstractions start to leak and your application is no longer portable. Digger seeks to further minimise these cloud native abstractions to increase portability. Looking at it from another angel, digger template span managed kubernetes clusters such as EKS, GKE and AKE, as well as the resources around them.
