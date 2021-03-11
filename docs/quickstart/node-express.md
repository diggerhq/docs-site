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
- Digger CLI installed - see [installation guide](../installation)
- Dockerfile - see the excellent [official guide](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/) how to dockerize your Node.js app
- You are logged into Digger - run `dg auth`

### Initialize a Digger project
Create a new project in Digger and generate a `digger.yml` configuration file
```
dg project init
```

### Register your service
Digger will analyse your app's code and update the `digger.yml` file with appropriate settings
```
dg service add .
```
Alternatively you could just update this file manually

### Create an environment
This will be the "destination" of your app in your AWS account. Any project has at least one environment, but often more: Production / Dev / Staging, or one per customer, or one per geography.
```
dg env create production
```
Digger will generate the infrastructure in your AWS accoun, so this step may take a few minutes.

### Deploy your app
```
dg service build
dg service push
dg service deploy production
```
You should see the URL pointing to your service's load balancer. That's it! 🙂
::: tip
You may see 'Service Temporarily Unavailable' once you load the loadbalancer url, its because the cluster is spinning up. In a few seconds it should show the default backend service.
:::

### Destroy an environment
This will remove all infrastructure for the production environment from your AWS account if you don't need it anymore
```
dg env destroy production
```




