# Digger vs Other

All other platforms on the market today give you **only one** of the two:

- great developer experience and ease of use so you can move fast
- great power and flexibility so you can build anything

Digger gives you **both**, because under the hood it generates infrastructure-as-code (Terraform) and manages your cloud account through it.

It is quick and simple for common use cases, and you can customise whatever you need whenever you need it, because with Digger you retain access to the full power of AWS.

## Heroku and other PaaS
Platforms-as-a-service (PaaS) like [Heroku](https://heroku.com), [Render](https://render.com) or [Digital Ocean App Platform](https://www.digitalocean.com/products/app-platform) are a great choice if you just need to get your code up and running and don't want to spend time thinking of infrastructure.

But the simplicity of PaaS comes with higher costs and a hard limit on what you can build. It is fairly typical for startups to quickly outgrow a PaaS and then expend dispropotionate effort to migrate to a major cloud provider like AWS.

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

::: tip
If your project is small and likely to stay so (think a single web app for a hackathon or a side project) you probably don't need AWS at all – consider using a PaaS instead.
:::

## Netlify, Vercel, Firebase Hosting 
These are great specialised platforms optimised for static sites and single-page JavaScript applications.
They don't offer much on the backend side beyond basic serverless functions.
But if that's all you need then AWS might be an overkill, and these platforms are a pleasure to work with!

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
