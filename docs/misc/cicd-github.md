# CI/CD with Github

You can use digger CLI within your CI/CD pipeline within your favourite tools such as Github Actions, CircliCI or TravicCI. In the snippet bellow we show an example of a github action which will release your service `svc1` on push. You can see a full GH workflow example in our [TODO example repository](https://github.com/diggerhq/django-todolist/blob/master/.github/workflows/deploy.yml)


```
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
        python-version: '3.8'

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