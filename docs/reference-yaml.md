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
    needs: [] # needs specifies
    dependencies: {} # currently unused, in the future will point to other services which this service depends on 
```

## Defining Resource dependencies

Resources are specified under every service. here is an example where svcA needs one resource and svcB needs another database resource. Names in the spec have to be unique. 

```
services:
    svcA:
        service_name: 
        service_path: 
        needs:
        - database:
            name: x
            engine: postgres
            size: 10gb

    svcB:
        service_name:
        service_path
        needs:
        - database:
            name: y
            engine: mysql
            size: 30gb
```

Note that two services can optionally share the same resource. This will help reduce infrastructure creation time and the costs incurred. To share resources we can reference other resources using a dollar sign:


```
services:
    svcA:
        service_name: serviceA
        service_path: ./
        # ...
        needs:
        - database:
            name: x1
            engine: postgres
            size: 10gb

    svcB:
        service_name: seviceB
        service_path: ./serviceB
        needs:
        - database:
            ref: $x1 #<-- database x1 is now accessible by svcB
```

## Using existing resources

If you want to use existing resources and make them accessible by a service you can do that by specifying this in a top block called existing_resources. This is on a per-environment basis using {environment}.{resource_name} as the key and an arn value

```
existing_resources:
    - production.mydb: arn_string
    - staging: arn_string

```
