# Deploy a lambda function

This tutorial shows you how to deploy an AWS Lambda function with Digger.

## Prerequisites
Before starting the tutorial, please do the following:
* Create a [Digger](https://digger.dev/) account.
* Create an [AWS](https://aws.amazon.com/) account.
* Create a [GitHub](https://github.com/) account.
* [Create an AWS user with administrator permissions](https://learn.digger.dev/misc/aws-keys.html)

## What infrastructure we are trying to create?
Let's try to deploy a simple AWS lambda function with AWS API Gateway in front of it. We should be able to call lambda function using http request. Source code for the lambda is [here](https://github.com/diggerhq/a-nodeapp).

![](https://blog.digger.dev/content/images/2022/03/image-21.png)

Let's log into Digger account and connect it to GitHub first.

![](https://blog.digger.dev/content/images/2022/03/image-6.png)

Let's connect to github and choose a repo with lambda function we are going to deploy.

![](https://blog.digger.dev/content/images/2022/03/image-7.png)

Digger will try to identify what kind of application in the repo.

![](https://blog.digger.dev/content/images/2022/03/image-8.png)

Let's choose Lambda function.

![](https://blog.digger.dev/content/images/2022/03/image-9.png)
Give a name to the project and choose node.js as runtime.
![](https://blog.digger.dev/content/images/2022/03/image-10.png)
Put AWS key and secret.
![](https://blog.digger.dev/content/images/2022/03/image-11.png)
Review all configuration parameters and click "Deploy" button.
![](https://blog.digger.dev/content/images/2022/03/image-12.png)
At this stage Digger will generate terraform code for the project and try to create infrastructure in AWS.

![](https://blog.digger.dev/content/images/2022/03/image-13.png)
We can check the state of deployment and terraform output if needed.

![](https://blog.digger.dev/content/images/2022/03/image-14.png)
Infrastructure and software deployment have finished!

![](https://blog.digger.dev/content/images/2022/03/image-15.png)
Let's add a route so we can call lambda via http requests.

![](https://blog.digger.dev/content/images/2022/03/image-16.png)
Click "Update" button.
![](https://blog.digger.dev/content/images/2022/03/image-17.png)

API Gateway is going to be created and configured.
![](https://blog.digger.dev/content/images/2022/03/image-18.png)

We can check the status of deployments.

![](https://blog.digger.dev/content/images/2022/03/image-19.png)
And we can see the url of API Gateway in logs.
![](https://blog.digger.dev/content/images/2022/03/image-20.png)
Let's send a http request.

**Done!**

We've created a lambda function with API Gateway in front of it, just in a few clicks. Now we can easily create new test "environments" if needed.