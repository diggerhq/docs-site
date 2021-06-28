# Introduction

Cloud infrastructure is frustratingly complex. AWS especially so:
![Periodic table of AWS](./img/aws-periodic-table.jpg)

Which of the [200 and counting](https://aws.amazon.com/products/) services do I need? How do I configure them? Without prior DevOps expertise it can take days if not weeks of trial and error to set up a stack on AWS.

Then why not start on something simple like Heroku and only move to AWS if and when you need to? Short answer: that's easier said than done, check out [Digger vs Other](./digger-vs-other) for an overview of alternatives.


## What is Digger
Digger configures and manages your AWS account, so you don't have to.

With Digger CLI and Web UI, you can:
- Set up a full stack on AWS in minutes, check out [Quick Start](./quickstart-server)
- Run anything - web apps, microservices, static sites - in your AWS account
- Deploy on every git push (CI) without writing a single line of configuration
- Manage multiple environments and configurations in different regions
- Customise every bit with Terraform templates

## How it works
Digger is your swiss-army knife for setting up, deploying and monitoring your infrastructure. We are starting with containerised apps but there is a lot more features in the pipeline. We like to think of Digger as the glue that connects your app to the underlying infrastructure it needs to run on. Let's take a quick example of a container that needs to run on AWS. You have the choice of deploying it directly to EC2, or AWS ECS or AWS EKS. And under AWS ECS there is multiple options such as ECS classic or ECS fargate. 

You also have to choose a registry to host your image, examples dockerhub or Amazon ECR. Once you have made decisions about registry and target (ECS), you then need to architect your system including VPCs, security groups, roles and load balancer. Next you need to setup the resources which your service requires like RDS, a Queue, Email service etc.

Digger heavylifts these decisions for you by offering a library of opinionated targets to chose from. In other words, you hand us your container and we will take care of setting up your infrastructure. But we don't stop here. Digger will also take care of exposing the right environment variables so your app works out of the box. Digger then controls your release cycle so you can build-push-release also using digger commands! 

Therefore if you decide to change your mind and move from ECS to EKS we got you covered!
