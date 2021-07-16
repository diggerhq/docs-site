(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{369:function(e,a,t){"use strict";t.r(a);var s=t(45),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"install-digger-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-digger-cli"}},[e._v("#")]),e._v(" Install Digger CLI")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("dg")]),e._v(" command-line tool is one of the two primary ways to interact with Digger. The other is the Web UI at "),t("a",{attrs:{href:"https://app.digger.dev",target:"_blank",rel:"noopener noreferrer"}},[e._v("app.digger.dev"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"homebrew"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#homebrew"}},[e._v("#")]),e._v(" Homebrew")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("brew install diggerhq/tap/dg\n")])])]),t("h2",{attrs:{id:"npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[e._v("#")]),e._v(" NPM")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm install -g diggercli\n")])])]),t("h2",{attrs:{id:"direct-download"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#direct-download"}},[e._v("#")]),e._v(" Direct download")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# for linux\nVERSION=`curl https://digger-releases.s3-eu-west-1.amazonaws.com/STABLE-VERSION`\ncurl -O https://digger-releases.s3-eu-west-1.amazonaws.com/linux/dg-linux-$VERSION.zip\nunzip dg-linux-$VERSION.zip\nln -s `pwd`/dg/dg /usr/local/bin/dg\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# for darwin (MAC OS)\nVERSION=`curl https://digger-releases.s3-eu-west-1.amazonaws.com/STABLE-VERSION`\ncurl -O https://digger-releases.s3-eu-west-1.amazonaws.com/darwin/dg-darwin-$VERSION.zip\nunzip dg-darwin-$VERSION.zip\nln -s `pwd`/dg/dg /usr/local/bin/dg\n\n")])])]),t("h2",{attrs:{id:"using-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-docker"}},[e._v("#")]),e._v(" Using Docker")]),e._v(" "),t("p",[e._v("You can quickly test dg using docker with our official image. The command bellow will launch a docker container in the current directory and map the volume to its folder.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker run -v ${PWD}:/code -it public.ecr.aws/g1x6q1x1/dg:latest sh\n\ndg --version\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("since dg command uses docker internally, you may need to map your host machine's socks file so docker can reach the host daemon. This can be done using "),t("code",[e._v("docker run -v ${PWD}:/code -v /var/run/docker.sock:/var/run/docker.sock -it public.ecr.aws/g1x6q1x1/dg:latest sh")])])]),e._v(" "),t("h2",{attrs:{id:"test-that-it-works"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#test-that-it-works"}},[e._v("#")]),e._v(" Test that it works")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("dg --version\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);