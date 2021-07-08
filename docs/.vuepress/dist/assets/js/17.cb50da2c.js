(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{374:function(e,t,o){"use strict";o.r(t);var n=o(45),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"technical-design"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#technical-design"}},[e._v("#")]),e._v(" Technical Design")]),e._v(" "),o("p",[e._v("The problem with infrastructure-as-code today (Terraform, CloudFormation, CDK, Pulumi, etc) is that it is not reusable. That is because implementation, configuration and interface are mixed up together. There is no way to build something without thinking of the low-level implementation details. It's like an assembly language, that's why it is so hard.")]),e._v(" "),o("p",[e._v("To address this, Digger introduces some new concepts:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Services")]),e._v(" (containers, functions, webapps) - deployable pieces of your code")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Resources")]),e._v(' (databases, object storage, queues, etc) - infrastructure dependencies required by Services. For example, "postgres 12 database". Services and Resources form the '),o("em",[e._v("logical")]),e._v(' structure of your stack. We call it "infrastructure interface" - what your code needs from the infrastructure')])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Environments")]),e._v(" - isolated independent copies of your entire stack. Each Environment has Configuration that defines the specific "),o("em",[e._v("implementation")]),e._v(" of infrastructure supporting your code. For example, your Dev environment could be a small EC2 box with docker-compose, and Production could run in a dedicated Kubernetes cluster with multi-AZ RDS. Services and Resources can be configured independently for each environment.")])])]),e._v(" "),o("p",[e._v("Digger takes the logical structure of your stack, combines it with environment configuration, generates infrastructure-as-code and runs it on the backend, updating resources in your AWS account. It then exports generated Terraform into a designated repository of your choice. You can put your custom Terraform in there too and Digger will pick it up. So you can have it entirely your way if you'd like.")]),e._v(" "),o("p",[e._v("Knowing the structure of your stack and the state of each environment allows Digger to do things that no other tool can do. Like zero-configuration CI or accurate cost prediction. Or even move from AWS to GCP or Azure in one click – all you need to do is create a new environment.")])])}),[],!1,null,null,null);t.default=r.exports}}]);