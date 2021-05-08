# Install Digger CLI
The `dg` command-line tool is one of the two primary ways to interact with Digger. The other is the Web UI at [app.digger.dev](https://app.digger.dev)
## Homebrew
```
brew install diggerhq/tap/dg
```
## NPM
```
npm install -g diggercli
```
## Direct download
```
# for linux
VERSION=`curl https://digger-releases.s3-eu-west-1.amazonaws.com/STABLE-VERSION`
curl -O https://digger-releases.s3-eu-west-1.amazonaws.com/linux/dg-linux-$VERSION.zip
unzip dg-linux-$VERSION.zip
ln -s `pwd`/dg/dg /usr/local/bin/dg
```

```
# for darwin (MAC OS)
VERSION=`curl https://digger-releases.s3-eu-west-1.amazonaws.com/STABLE-VERSION`
curl -O https://digger-releases.s3-eu-west-1.amazonaws.com/darwin/dg-darwin-$VERSION.zip
unzip dg-darwin-$VERSION.zip
ln -s `pwd`/dg/dg /usr/local/bin/dg

```
## Using Docker

You can quickly test dg using docker with our official image. The command bellow will launch a docker container in the current directory and map the volume to its folder.

```
docker run -v ${PWD}:/code -it public.ecr.aws/g1x6q1x1/dg:latest sh

dg --version
```

## Test that it works
```
dg --version
```

