# Write your own Terraform

Digger does not limit you to the buttons of its UI and commands of its CLI. Every team at some point needs to build something unique to their business. We recognise that and make it quite straightforward. Building custom infrastructure with Digger is not any harder than doing it on AWS directly - and you still benefit from centralised state and configuration management provided by Digger.

There are 2 ways to build custom infrastructure with Digger:

1. Terraform overrides in your Infrastructure Repository
2. Custom template (either fork one of Digger's standard Targets or build your own)

## Terraform overrides

This is the preferred way to build custom infrastructure with Digger unless you know fur sure that you will not need the resources provided by one of the default templates (Targets) provided by Digger.

::: tip
Terraform overrides require a connected Infrastructure Repository. You can do that in Settings.
:::

To add ad custom Terraform, simply push a fulder named `_digger_custom` into the `digger` branch of your Infrastructure Repository. If you want your Terraform to be rendered in all environments, put it into the `_shared` subfolder. And if it's for one environment only, put it into a subfolder named `environment-{environmentId}`. Digger will pick up changes from it and render your Terraform alongside the target defaults.

Example folder structure in the Infrastructure Repository:

```
_digger_custom
    _shared
    environment-production
    environment-staging
    environment-dev
_digger_generated
    environment-production
    environment-staging
    environment-dev
digger.yml
digger-config.yml
```

## Custom Target

Targets are repositories with templated Terraform modules that Digger uses to generate output Terraform for your environments.

This is more work compared to Terraform Overrides option since you'll have to define all the infrastructure yourself. But it also gives you the most flexibility. It also makes the most sense if you are already using Terraform and want to use it with Digger.

::: tip
It may be easier to start out by forking one of Digger's default templates (Targets) which are open source - [this one for example](https://github.com/diggerhq/target-fargate)
:::

When you have built your custom target, all you need to do is to point Digger to it when creating an environment.

::: tip
At the moment custom targets are only supported in the CLI but not in Web UI. You will need to create your environment with the CLI to use Custom Targets.
:::