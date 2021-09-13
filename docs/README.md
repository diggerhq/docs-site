# Introduction

**There's something strange in the way we build software today.**
![Tools you love: Vercel, Heroku, Firebase, Netlify; Tools you use at work: AWS, GCP, Azure](./img/tools-you-love-vs-use-at-work.png)

Cloud providers like AWS are extremely complex. Without prior DevOps expertise it can take many days to set up. There are great "no-ops" platforms like Vercel and Heroku out there, but their use is limited to small projects. Most teams keep building on AWS, GCP or Azure – because they know that eventually they will need some of the 200+ services that only big cloud providers have.

So you are forced to choose between great developer experience and building a future-proof stack. **This is wrong.** Imagine if mobile developers needed one set of tools to _start_ building an app, and had to rebuild it with entirely different tools after a year or so – wouldn't that be ridiculous?

### Digger makes AWS simple

It automatically generates infrastructure for your code in your AWS account.
So you can build on AWS without having to deal with its complexity. See [How it works](./overview/how-it-works)

You can launch in minutes – no need to build from scratch, or even think of infrastructure at all

- ✅ Easy to use Web UI + powerful CLI
- ✅ Deploy webapps, serverless functions and databases: just connect GitHub repositories
- ✅ Multiple environments: replicate your entire stack in a few clicks. Dev / staging / production; short-lived for testing; per-customer
- ✅ Zero-configuration CI with GitOps: pick a branch for each environment and your services will be deployed on every git push
- ✅ Logs, environment variables, secrets, domains: never touch AWS again!

### You keep the full power of AWS

Traditional PaaS like Heroku or Vercel run your code on their servers. Digger takes a different approach: it generates infrastructure-as-code (Terraform) that manages your AWS account. See [Digger vs Other](./overview/digger-vs-other)

This removes the main limitation of traditional PaaS. With Digger you can have great modern developer experience **and** get a future-proof stack at the same time. Terraform is industry standard for all things DevOps; with Digger you can customise every bit. You can even use your own bespoke templates with Digger. So unlike traditional PaaS, you never outgrow Digger.

### Why Amazon hasn't done it?

Great question. Neither did Microsoft, nor did Google. We at Digger believe this is because complexity is one of the few lock-in levers still available to major cloud providers.

AWS, GCP and Azure are essentially identical these days for the 95% of tasks at hand – but they don't want to make it easy for you to move to a different provider. So they lure you in with free credits, and then even if you aren't building anything unique you are unlikely to move – because you have invested lots of time in learning it.

To be fair, AWS has introduced a number of easy-to-use tools. Beanstalk is the oldest one (their answer to Heroku); there's also Amplify, Copilot, Lightsail. But these tools suffer from the same problem as traditional PaaS: they severely limit your options. With Amplify you can only build static web apps (like Netlify); Copilot is exclusively for containers (like Google Cloud Run); Lightsail is essentially a simplified interface for a single EC2 instance (like Digital Ocean Droplet). See [Digger vs Other](./overview/digger-vs-other).

Major cloud providers today are strikingly similar to hardware manufacturers of 1970s. Each is making a collection of specialised "devices" – managed cloud services. Until recently they competed with each other by introducing new types of devices like specialised databases, serverless functions, container runtimes. But now the main types of devices are firmly established, with the possible exception of tools specific to machine learning. AWS, GCP and Azure today are one step away from becoming under-the-hood commodities – just like vendors of graphic cards, RAM and other standardised PC compoenents.

For Amazon, Microsoft and Google introducing a simplification layer that is based on a cloud-agnostic open source tool (Terraform) would mean becoming commodities quicker. They don't want this. But it's inevitable, someone will do it eventually. So we thought we'd give it a shot.