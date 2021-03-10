# Digger vs Other
## Heroku and other PaaS
Platforms-as-a-service (PaaS) like [Heroku](https://heroku.com), [Render](https://render.com) or [Digital Ocean App Platform](https://www.digitalocean.com/products/app-platform) are a great choice if you just need to get your code up and running and don't want to spend time thinking of infrastructure.

But the tradeoff for simplicity is higher costs and a hard limit on what you can build. It is fairly typical for startups to quickly outgrow a PaaS and then expend dispropotionate effort to migrate to a major cloud provider like AWS.

|                             | AWS managed by Digger   | Heroku            |
| --------------------------- | ----------------------- | ----------------- |
| Your code runs in           | Your AWS account        | Heroku servers    |
| Control over infrastructure | Yes                     | No                |
| Compute with 1GB of RAM     | $7.6 per month          | $25 per month     |
| Database with 8GB of RAM    | $99 per month           | $200 per month    |
| Services provided           | 200+                    | ~10               |
| Regions                     | 25                      | 6                 |
| Compliance                  | Enterprise-grade        | Limited           |
| Infrastructure-as-code      | Yes                     | No                |
| Kubernetes                  | Yes                     | No                |
| Data stays in your cloud    | Yes                     | No                |


  


## Netlify, Vercel, Firebase Hosting 
## AWS Lightsail
## AWS ElasticBeanstalk
## AWS Copilot
## Google Cloud Run
## Terraform
## Kubernetes