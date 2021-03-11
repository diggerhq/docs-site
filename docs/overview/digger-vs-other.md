# Digger vs Other
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
## AWS Copilot
## Google Cloud Run
## Terraform
## Kubernetes