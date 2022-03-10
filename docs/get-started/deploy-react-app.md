# Deploy a react app


## Prerequisites
Before starting the tutorial, please do the following:
* Create a [Digger](https://digger.dev/) account.
* Create an [AWS](https://aws.amazon.com/) account.
* Create a [GitHub](https://github.com/) account.
* [Create an AWS user with administrator permissions](https://learn.digger.dev/misc/aws-keys.html) 


In this guide we'll deploy a react app with Digger

## Set up

First we need a react app. We used create-react-app to generate a standard app quickly.


![image](https://drive.google.com/uc?export=view&id=1JFeyR-bfI3uQKwDSlu6CDajK2UwBlJPe)

Make sure your app is in a GitHub repo - [like ours](https://github.com/jackbridger/testing-paas)

Go to [Digger.dev](http://Digger.dev) and login via GitHub

[https://digger.dev/](https://digger.dev/)

Click Add Project (Your Own Account)

![image](https://drive.google.com/uc?export=view&id=1vW90frYBDEL4fTeLLIWTeS_4BoRYe80E)

Select from your repos.

![image](https://drive.google.com/uc?export=view&id=1m22_BfHRjhRYdTVYtpxlZOSDuV1VFNGS)

Note: you may need to connect repository first. You can press refresh list if it doesn’t display immediately. 

![image](https://drive.google.com/uc?export=view&id=1r1AIN5T-ij8ON_2CRt1_d-dmc7AYwNxS)

Digger works some magic

![image](https://drive.google.com/uc?export=view&id=1elzGOxeLrNSWuM2ARcql4na3XJG9ClUm)

Type is automatically bypassed in this case because Digger detected it’s a SPA 

Put the name of your app - this is just for Digger

![image](https://drive.google.com/uc?export=view&id=18XUg8BF2hZv2ffOcbZz-I1cMkrraCwvM)

Now add your AWS credentials.

 

For how to get your [AWS secret & key, go here](https://learn.digger.dev/misc/aws-keys.html)

![image](https://drive.google.com/uc?export=view&id=1F1crZ390WK240-d_eYzvXEcZV3jiLDY8)


I’m in London so I selected eu-west-2

![image](https://drive.google.com/uc?export=view&id=15pI63S3lXYQ78eN2PVz4y6YZ1HdOU2Mn)

Hopefully you should see something like this:

![image](https://drive.google.com/uc?export=view&id=1QTnuLTddvDDyS_H-UZBDQCXN8hft8CEm)

Yay!

![image](https://drive.google.com/uc?export=view&id=1wrRKH5Qz51U8I1_C8m8Yy1B4msOdwmse)

Within my project to see my app deployed, I can click on Environments and details

![image](https://drive.google.com/uc?export=view&id=1MlMueIvVYKx07xHZxp2_XWXAj12fYj3n)

I can see the app deployed at public URL



![image](https://drive.google.com/uc?export=view&id=1dEPjHxib9Et6akbsU5Eabj2era3yQmVw)

[https://amazidd744-amazid679e-amazi16cdf.dggr.app/](https://amazidd744-amazid679e-amazi16cdf.dggr.app/)



## Build issues?

One of the most common issues is that your branch is main instead of master.

To fix this, go to Environments and click on Details

![image](https://drive.google.com/uc?export=view&id=1MGnzrw7d4MNYaQ1PBUuqUAqMdO19s3Ta)

Edit

![image](https://drive.google.com/uc?export=view&id=12_unmPeOCD4NiPCgs-CuSXNFPTdN6LH9)

Then change the CI branch 

![image](https://drive.google.com/uc?export=view&id=1DPeplNi3lOdQzG6uXY7r4zcATzRVcEJ7)



Now go back to Services and press deploy

![image](https://drive.google.com/uc?export=view&id=1XUnM044HgbQelvvn42wzs1287uiKc2MG)

Then if it works, you can go back into Environments (as described above) to get your URL.
