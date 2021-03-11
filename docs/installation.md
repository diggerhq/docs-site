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
curl -O https://digger-releases.s3-eu-west-1.amazonaws.com/linux/dg-linux-v0.1.21.zip
unzip dg-linux-v0.1.21.zip
ln -s ./dg/dg /usr/local/bin/dg
```
## Test that it works
```
dg --version
```

