# Run a Node.js app
This guide shows how to get a Node.js Express app running in your AWS account with Digger
We are going to deploy this [sample application](https://github.com/diggerhq/digger-examples/tree/master/node-service) from the Digger Samples repository on GitHub.
It is a Node.js Express application created with the official [Express Generator](https://expressjs.com/en/starter/generator.html), structured like this:
```
├── bin
│   └── www
├── public
│   └── stylesheets
├── routes
│   ├── index.js
│   └── users.js
├── views
│   ├── error.jade
│   ├── index.jade
│   └── layout.jade
├── Dockerfile
├── README.md
├── app.js
├── package-lock.json
└── package.json
```

### Prerequisites
- Digger CLI installed - see [installation guide](/getting-started/installation.html)
- Dockerfile - see the excellent [official guide](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/) how to dockerize your Node.js app
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) installed - we need to this to push your docker image!
- You are logged into Digger - run `dg auth`

### Clone the respository

Clone our examples respository:
```
git clone https://github.com/diggerhq/digger-examples
cd digger-examples
```

### Initialize a Digger project
Create a new project in Digger and generate a `digger.yml` configuration file
```
dg project init
```

### Register your service
Digger will analyse your app's code, update the `digger.yml` file with appropriate settings, and synchronise it with the backend
```
dg service add
dg sync
```
Alternatively you could just update this file manually, then run `dg sync`

### Create an environment
This will be the "destination" of your app in your AWS account. Any project has at least one environment, but often more: Production / Dev / Staging, or one per customer, or one per geography. We are passing a `--target` parameter which points to our [terraform template](https://github.com/diggerhq/target-fargate/tree/v1.0.4). This template will create the infrastructure needed to deploy this app to Amazon ECS Fargate.

```
dg env create production --target diggerhq/target-fargate@v1.0.4
dg env apply production
```
Digger will generate the infrastructure in your AWS account, so this step may take a few minutes.

You should see the URL pointing to your service's load balancer. By default this will not contain the node app but a default image that is deployed. To deploy the node application we need to create a release.

::: tip
To see which resources are aboout to be created you can run `dg env plan production`. In general it is recommended to run this command before each apply. You can see the apply happening live by passing the `--verbose` option to it.
:::

::: tip
You may see 'Service Temporarily Unavailable' once you load the loadbalancer url, its because the cluster is spinning up. In a few seconds it should show the default backend service.
:::

### Deploy your app
```
dg env build production
dg env push production
dg env deploy production
```
You should see the URL pointing to your service's load balancer. That's it! 🙂



### Destroy an environment
This will remove all infrastructure for the production environment from your AWS account if you don't need it anymore
```
dg env destroy production
```




