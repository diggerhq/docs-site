(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{367:function(e,t,a){"use strict";a.r(t);var r=a(45),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"deploy-django-app-with-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-django-app-with-cli"}},[e._v("#")]),e._v(" Deploy Django app with CLI")]),e._v(" "),a("p",[e._v("This guide shows how to get a Django app running in your AWS account with Digger\nWe are going to deploy this "),a("a",{attrs:{href:"https://github.com/diggerhq/django-todolist",target:"_blank",rel:"noopener noreferrer"}},[e._v("TODO list application"),a("OutboundLink")],1),e._v(". This application needs a database for deployment. This specific application does not need celery and hence we don't need to create a queue or a sparate service for background workers.")]),e._v(" "),a("p",[e._v("You can see an example of this application deployed "),a("a",{attrs:{href:"https://todo-example.dggr.app/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/lWZFxjn.png",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[e._v("Digger CLI installed - see "),a("RouterLink",{attrs:{to:"/getting-started/installation.html"}},[e._v("installation guide")])],1),e._v(" "),a("li",[e._v("Dockerfile - see the excellent "),a("a",{attrs:{href:"https://nodejs.org/en/docs/guides/nodejs-docker-webapp/",target:"_blank",rel:"noopener noreferrer"}},[e._v("official guide"),a("OutboundLink")],1),e._v(" how to dockerize your Node.js app")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS CLI"),a("OutboundLink")],1),e._v(" installed - we need to this to push your docker image!")]),e._v(" "),a("li",[e._v("You are logged into Digger - run "),a("code",[e._v("dg auth")])])]),e._v(" "),a("h3",{attrs:{id:"clone-the-respository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clone-the-respository"}},[e._v("#")]),e._v(" Clone the respository")]),e._v(" "),a("p",[e._v("Clone our examples respository and remove the digger.yml file. We will re-initialize this file:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git clone https://github.com/diggerhq/django-todolist\ncd django-todolist\nrm digger.yml\n")])])]),a("h3",{attrs:{id:"initialize-a-digger-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialize-a-digger-project"}},[e._v("#")]),e._v(" Initialize a Digger project")]),e._v(" "),a("p",[e._v("Create a new project in Digger and generate a "),a("code",[e._v("digger.yml")]),e._v(" configuration file")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dg project init\n")])])]),a("p",[e._v("We can update the digger.yml file services section to the following:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("services:\n  backend:\n    service_name: backend\n    path: backend\n    env_files: []\n    publicly_accessible: true\n    service_type: container\n    container_port: 8001\n    health_check: /\n    dockerfile: backend/Dockerfile\n    resources: {}\n    dependencies: {}\n")])])]),a("p",[e._v("Run the following command to sync these changes:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dg sync\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("We could use dg service add to register the service, but in that case we need to update the container port value.")])]),e._v(" "),a("h3",{attrs:{id:"create-an-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-environment"}},[e._v("#")]),e._v(" Create an environment")]),e._v(" "),a("p",[e._v('This will be the "destination" of your app in your AWS account. Any project has at least one environment, but often more: Production / Dev / Staging, or one per customer, or one per geography. We are passing a '),a("code",[e._v("--target")]),e._v(" parameter which points to our "),a("a",{attrs:{href:"https://github.com/diggerhq/target-fargate/tree/todolist",target:"_blank",rel:"noopener noreferrer"}},[e._v("terraform template"),a("OutboundLink")],1),e._v(". This template will create the infrastructure needed to deploy this app to Amazon ECS Fargate. We have customised it to include an RDS instance. It will also wire the right database settings as environment variables 😉")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dg env create production --target diggerhq/target-fargate@todolist\ndg env apply production\n")])])]),a("p",[e._v("Digger will generate the infrastructure in your AWS account, so this step may take a few minutes.")]),e._v(" "),a("p",[e._v("You should see the URL pointing to your service's load balancer. By default this will not contain the node app but a default image that is deployed. To deploy the node application we need to create a release.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("To see which resources are aboout to be created you can run "),a("code",[e._v("dg env plan production")]),e._v(". In general it is recommended to run this command before each apply. You can see the apply happening live by passing the "),a("code",[e._v("--verbose")]),e._v(" option to it.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("You may see 'Service Temporarily Unavailable' once you load the loadbalancer url, its because the cluster is spinning up. In a few seconds it should show the default backend service.")])]),e._v(" "),a("h3",{attrs:{id:"deploy-your-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-your-app"}},[e._v("#")]),e._v(" Deploy your app")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dg env build production\ndg env push production\ndg env deploy production\n")])])]),a("p",[e._v("You should see the URL pointing to your service's load balancer. That's it! your todolist app deployed🙂")]),e._v(" "),a("h3",{attrs:{id:"note-on-environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note-on-environment-variables"}},[e._v("#")]),e._v(" Note on environment variables")]),e._v(" "),a("p",[e._v("Digger allows you to map important environment variables from your application directly into your application. In the above example, we automatically map the DATABASE_URL per environment into your application so that deployment just works out of the box. You can see a list of your environment variables in the "),a("a",{attrs:{href:"https://app.digger.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("web UI"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/MhLYXT3.png",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"destroy-the-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destroy-the-environment"}},[e._v("#")]),e._v(" Destroy the environment")]),e._v(" "),a("p",[e._v("This will remove all infrastructure for the production environment from your AWS account if you don't need it anymore")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dg env destroy production\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);