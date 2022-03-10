# CLI (alpha) reference 

*Our CLI is in alpha, if you'd like to try it, ask one of our team!*

Did you know that our CLI is open source? You can contribute [bug reports and feature requests on GitHub](https://github.com/diggerhq/cli)

::: warning
API is subject to change in future versions of the CLI.
:::

::: tip
Almost all commands are run in the context of digger.yml. This is used to identify the project name and services for this project. The state of services however is maintained in the backend. We can sync the services of a project with `dg sync` command. The expected context for each command is highlighted under each heading.
:::

## dg auth

- Requires Auth: no
- Context: N/A

Authenticate and retrieve Digger token. This command open browser for authentication.

## dg project init

- Requires Auth: yes
- Context: Project root (initialises digger.yml)

Initialize a project by name (creates entry in backend). Also creates initial digger.yml file.

| Option   | Description                                                              | Required |
| -------- | ------------------------------------------------------------------------ | -------- |
| `--name` | The project name. if not entered you will be asked to enter it as input. | No       |

## dg sync

- Requires Auth: yes
- Context: digger.yml

Sync services from digger.yml to backend.

## dg service add

- Requires Auth: yes
- Context: digger.yml

Helper to add a service to digger.yml. Will ask you for the path to the service and then guess the details of this service in digger.yml.

## dg env build env_name

- Requires Auth: yes
- Context: digger.yml

| Option      | Description                                                                                                      | Required |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | -------- |
| `--service` | The name of the service. <br><br>This needs to be present in the digger.yml `services` section                   | No       |
| `--tag`     | The tag of the image to be built - default to 'latest'                                                           | No       |
| `--context` | For docker container builds. The context of the docker build.<br><br> Defaults to the location of the Dockerfile | No       |

## dg env push env_name

- Requires Auth: yes
- Context: digger.yml

| Option         | Description                                                                                    | Required |
| -------------- | ---------------------------------------------------------------------------------------------- | -------- |
| `--service`    | The name of the service. <br><br>This needs to be present in the digger.yml `services` section | No       |
| `--tag`        | The tag of the image to be built - default to 'latest'                                         | No       |
| `--aws-key`    | The AWS key of the account that contains the ECR respository                                   | No       |
| `--aws-secret` | The AWS secret of the account with ECR repository                                              | No       |

## dg env release env_name

- Requires Auth: yes
- Context: digger.yml

| Option         | Description                                                                                    | Required |
| -------------- | ---------------------------------------------------------------------------------------------- | -------- |
| `--service`    | The name of the service. <br><br>This needs to be present in the digger.yml `services` section | No       |
| `--tag`        | The tag of the image to be built - default to 'latest'                                         | No       |
| `--aws-key`    | The AWS key of the account that contains the ECR respository                                   | No       |
| `--aws-secret` | The AWS secret of the account with ECR repository                                              | No       |

## dg env create env_name

- Requires Auth: yes
- Context: digger.yml

| Option         | Description                                                                                                              | Required |
| -------------- | ------------------------------------------------------------------------------------------------------------------------ | -------- |
| `--target`     | The repository which contains terraform template to apply. This argument should be of the form 'orgname/reponame@branch' | No       |
| `--region`     | The AWS region to create the infrastructure in                                                                           | No       |
| `--config`     | a list of key=value pair to use for environment config options. You can specify multiple key=value pairs inline          | No       |
| `--aws-key`    | The AWS key of the account                                                                                               | No       |
| `--aws-secret` | The AWS secret of the account                                                                                            | No       |

## dg env plan env_name

- Requires Auth: yes
- Context: digger.yml

Outputs the list of planned resource that will be created for this environment. It is highly recommended to run this command before each apply.

## dg env apply env_name

- Requires Auth: yes
- Context: digger.yml

Applies the changes of the environment. Note: It is recommend to run a `dg plan` before `dg apply`.

| Option       | Description                                           | Required |
| ------------ | ----------------------------------------------------- | -------- |
| `--verboose` | Stream the terraform output while running the command | No       |

## dg env update env_name

- Requires Auth: yes
- Context: digger.yml

Update the settings of an environment. Currently supports updating of:

- --target
- --config
- --aws-key
- --aws-secret

Usually will need to be followed by an `env apply` command

## dg env destroy env_name

- Requires Auth: yes
- Context: digger.yml

Destroy an environment (Warning: will destroy all infrastructure create)

## dg env describe env_name

- Requires Auth: yes
- Context: digger.yml

Print all the details of an existing environment including all terraform outputs (Warning verbose output).

## dg env list

- Requires Auth: yes
- Context: digger.yml

List all the existing environments, along with some details about them.
