# Image tagging rollbacks

While preparing your docker builds and releases its a good idea to tag your images. Digger uses a default tag of `:latest` but this means that to rollback to a previous version of your code you would need to rebuild that tag or branch. 

With the digger cli you can specify tags in the cli. you need to do that for your build-push-release cycles.

```
dg env build --tag v1
dg env push --tag v1
dg env release --tag v1
```

This way you can trigger a release for a previous version by passing the `v1` tag. You can also use the same tags for a CI/CD setting. For example, in a Github Action, you can trigger the action everytime a version tag is pushed:


```
name: Digger CI
on:
  push:
    tags:
      - 'v*' # Push events to matching v*, i.e. v1.0, v20.15.10

jobs:
  get_tag_version:
    runs-on: ubuntu-16.04
    outputs:
      tag_version: ${{ steps.get_tag.outputs.VERSION }}
      stage: ${{ steps.get_stage.outputs.STAGE }}
    steps:
    - name: Set the tag version
      id: get_tag
      run: echo ::set-output name=VERSION::$(echo $GITHUB_REF | cut -d / -f 3)


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
        dg env build stage --service svc1 --tag $TAG_VERSION
        echo "> Pushing docker image to ECR"    
        dg env push stage --service svc1 --tag $TAG_VERSION --aws-key "$DIGGER_AWS_KEY" --aws-secret "$DIGGER_AWS_SECRET"
        echo "> Releasing"    
        dg env push release --service svc1 --tag $TAG_VERSION --aws-key "$DIGGER_AWS_KEY" --aws-secret "$DIGGER_AWS_SECRET"


```

In the above snippet we listen for changes to changes in a tag push and use the same tag to build and push with `dg`. This means that to rollback a previous version one can re-run a previous workflow.