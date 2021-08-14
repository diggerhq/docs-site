# CI/CD Integrations

You can use digger CLI within your CI/CD pipeline within your favourite tools such as Github Actions, CircliCI or TravicCI. Digger CLI `dg` can easily be used within your CI system to support your releasing. All you need is your digger token and AWS keys and then you can follow the system of your choise

## Github Actions

In the snippet bellow we show an example of a GitHub action which will release your service `svc1` on push. You can see a full GH workflow example in our [TODO example repository](https://github.com/diggerhq/django-todolist/blob/master/.github/workflows/deploy.yml)

```yaml
name: Digger CI
on:
  push:
    branches: [master]

  build-push-release:
    runs-on: ubuntu-16.04
    needs:
      - get_tag_version
    steps:
      - name: Checkout
        uses: actions/checkout@v1

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: eu-west-1

      - name: Set up Python 3.8
        uses: actions/setup-python@v2
        with:
          python-version: "3.8"

      - name: Build and push and release
        env:
          DIGGER_TOKEN: ${{ secrets.DIGGER_TOKEN }}
          DIGGER_AWS_KEY: ${{ secrets.DIGGER_AWS_KEY }}
          DIGGER_AWS_SECRET: ${{ secrets.DIGGER_AWS_SECRET }}
          BACKEND_ENDPOINT: "https://backend.digger.dev"
          WEBAPP_ENDPOINT: "https://app.digger.dev"
        run: |
          export TAG_VERSION=${{needs.get_tag_version.outputs.tag_version}}

          # Install diggercli
          pip install --upgrade git+https://github.com/diggerhq/cli@master

          echo "> Building docker image"
          dg env build stage --service svc1
          echo "> Pushing docker image to ECR"
          dg env push stage --service svc1 --aws-key "$DIGGER_AWS_KEY" --aws-secret "$DIGGER_AWS_SECRET"
          echo "> Releasing"
          dg env push release --service svc1 --aws-key "$DIGGER_AWS_KEY" --aws-secret "$DIGGER_AWS_SECRET"
```

## GitLab CI

In the snippet bellow we show an example of a GitLab ci. We are using the official docker image of digger to run digger commands. This comes with all dg dependencies included in the image

```yaml
default:
  image: public.ecr.aws/g1x6q1x1/dg:v0.2.17

variables:
  # You need to configure the following variables as GitLab secrets
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
