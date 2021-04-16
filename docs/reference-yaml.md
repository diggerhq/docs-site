# digger.yml reference

::: warning
The structure of this digger.yml file is subject to change in future version of digger.
:::

## Structure

There are two main top-level parts of digger.yml, `project` and `services`. The project section contains metadata about the active project. The services section contains a list of service metadata. In the snippet bellow we capture the main elements of a typical digger.yml along with comments to explain each field

```
project:
  name: projectname
services:
  svc:
    service_name: svc1 # The service name, in most cases it will be the same as the toplevel key
    path: . # where the service lives, a path relative to the root repo
    env_files: [] # currently unused, in future will be used to point .env files 
    publicly_accissible: true # whether this is an external or internal service
    service_type: container # the type of the service
    container_port: 5000 # the port which the container listens in. NOTE this is the container port NOT the port exposed to the host
    health_check: /api/v1/hello # An unauthenticated path, required by loadbalancers
    dockerfile: ./Dockerfile # path to dockerfile relative to root repository
    resources: {} # currently unused, in the future will indicate resources that the service needs such as databases
    dependencies: {} # currently unused, in the future will point to other services which this service depends on 
```
