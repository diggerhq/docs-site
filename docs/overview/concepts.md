# Concepts
Digger introduces a simple yet powerful model that works well for large enterprise stacks, small SaaS products, and everything in between.
## Project
A Project is a top-level entity in Digger, containing all others. Project roughly corresponds to an Organisation in GitHub, **not** a single repository. Project manages all parts of a single software product with all its apps, services, environments and configurations. Projects are completely independent from each other.

::: tip
Use one project for all related apps and services, for example if some of your apps are end-user-facing and others are for administrators but both have some backend services in common, that's all still one Project in Digger.
:::

::: tip
Use separate projects for things that are completely unrelated. For example if your are in the software consulting business then you'd want to have a separate project for every customer.
:::

## Service
A Service is the basic building block of your stack. Any code that you'd want deployed somewhere is a Service in Digger model. Services often map to repositories in GitHub, or to top-level folders in a monorepo configuration. Examples of Services:
- A Django app
- A Node.js microservice
- A single-page React app
- A static website

## Environment
An Environment is the destination for services to be deployed into, with underlying AWS infrastructure managed by Digger. Every Environment has all of the services. Versions of each service do not necessarily match across environment unless you deploy the exact same versions everywhere.

There always is at least one environment, but often more – a dev / staging / production setup is fairly typical. If you are building B2B SaaS software then you'd often want to have dedicated environments for every customer. Another common pattern is to have separate environments in every geography or jurisdiction, mainly for data regulatory compliance reasons.