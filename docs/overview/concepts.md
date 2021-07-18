---
sidebarDepth: 1
---

# Concepts
Digger introduces a simple yet powerful model that works well for large enterprise stacks, small SaaS products, and everything in between.

## Project
A Project is a top-level entity in Digger, containing all others. Project roughly corresponds to an Organisation in GitHub. Project manages all parts of a single software product with all its apps, services, environments and configurations.

::: tip
Use one project for all related apps and services. If your apps and services depend on each other in any way then they are all part of the same Project, even if they are in different git repositories.
:::

## Service
Service are the basic building blocks of your stack. Any code that you'd want deployed somewhere is a Service. Services often map to repositories in GitHub, or to top-level folders in a monorepo configuration. Examples of Services:
- A Django app
- A Node.js microservice
- A Lambda function
- A single-page React app
- A static website

## Resource
Resources are supporting infrastructure componets that Services need. The key difference from Services is that they are not your application code - Resources are fully managed by your cloud provider. Examples of Resources:
- A database
- An S3 bucket
- A Redis instance
- An ElasticSearch cluster

:::tip
If you choose to manage a database yourself in a Docker container for example, then it's a Service, not a Resource.
:::

## Environment
An Environment is the destination for services to be deployed into, with underlying AWS infrastructure managed by Digger. Every Environment has all of the services. Versions of each service do not necessarily match across environment unless you deploy the exact same versions everywhere.

There always is at least one environment, but often more – a dev / staging / production setup is fairly typical. If you are building B2B SaaS software then you'd often want to have dedicated environments for every customer. Another common pattern is to have separate environments in every geography or jurisdiction, mainly for data regulatory compliance reasons.

## Environment Config
Configuration specific to a particular environment. It stores parameters such as sizes of instances, whether or not some services and resorces are enabled in this environment, etc. If you are using CLI or have connected Infrastructure Repository then you can find Environment Config in the `digger.config.yml` file.

## Target

Targets are generic templates that generate specific implementation (Terraform) for each environment. Each Target can support a wide variety of stacks. More in [Understanding Targets](./understanding-targets)

## Infrastructure Repository

You can connect a dedicated Infrastructure Repository for Digger to export generated Terraform into it and take your custom Terraform from it. This gives you full visibility of infrastructure changes, and allows to fully customise it. More in [Writing Custom Terraform](../customize/terraform)