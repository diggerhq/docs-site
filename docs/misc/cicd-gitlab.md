# CI/CD pipeline Gitlab

You can use digger CLI within your CI/CD pipeline within your favourite tools such as Github Actions, CircliCI or TravicCI. In the snippet bellow we show an example of a gitlab ci. We are using the offical docker image of digger to run digger commands. This comes with all dg dependencies included in the image

```
default:
  image: public.ecr.aws/g1x6q1x1/dg:v0.2.17


variables:
  # You need to configure the following variables as gitlab secrets
  # DIGGER_TOKEN: ${{DIGGER_TOKEN}}
  # DIGGER_AWS_KEY: ${{ secrets.DIGGER_AWS_KEY }}
  # DIGGER_AWS_SECRET: ${{ secrets.DIGGER_AWS_SECRET }}
  BACKEND_ENDPOINT: "https://backend.digger.dev"
  WEBAPP_ENDPOINT: "https://app.digger.dev"
  SERVICE: platform
  TAG_VERSION: $CI_COMMIT_SHORT_SHA
  # settings for docker-in-docker
  DOCKER_HOST: tcp://docker:2376
  DOCKER_TLS_CERTDIR: "/certs"
  DOCKER_TLS_VERIFY: 1
  DOCKER_CERT_PATH: "$DOCKER_TLS_CERTDIR/client"
  
# This is needed to allow docker-in-docker
services:
  - docker:19.03.12-dind

release-staging:
  stage: build
  variables:
    # This is the name of your environment
    DG_ENV: "staging" 
  only:
    - develop
  script:
    - echo "> Building docker image"
    - dg env build "$DG_ENV" --service $SERVICE --tag $TAG_VERSION --context .
    - echo "> Pushing docker image to ECR"
    - dg env push "$DG_ENV" --service $SERVICE --tag $TAG_VERSION --aws-key "$DIGGER_AWS_KEY" --aws-secret "$DIGGER_AWS_SECRET"
    - echo "> Releasing docker image"
    - dg env release "$DG_ENV" --service $SERVICE --tag $TAG_VERSION --aws-key "$DIGGER_AWS_KEY" --aws-secret "$DIGGER_AWS_SECRET"
```
