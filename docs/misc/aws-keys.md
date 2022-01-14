# Creating AWS keys

To use digger, you will have to provide AWS keys, so Digger could seamlessly deploy your application on AWS
infrastructure

To get the keys, an AWS account is required.

After registering with AWS, you will have to complete these steps:

1. Login to AWS.
2. Proceed to the `IAM` page
   ![IAM](../img/aws-keys/1-IAM.jpg)
3. Press on `Users` <br/>
   ![IAM](../img/aws-keys/2-users.jpg)
6. Press on `Add users`.
   ![IAM](../img/aws-keys/3-add-users.jpg)
7. Enter your chosen user name, for example: `DiggerApp`
8. Press on the `Access key - Programmatic access` checkbox
   ![IAM](../img/aws-keys/4-user-name-and-access-key.jpg)
9. Select `Attach existing policies directly`
10. Press on the checkbox near `AdministratorAccess`
11. Press `Next: Tags`
    ![IAM](../img/aws-keys/5-attach-existing-policy.jpg)
12. Press `Next: Review`
    ![IAM](../img/aws-keys/6-next-review.jpg)
13. Double check that the required permissions are there and press `Create user`
    ![IAM](../img/aws-keys/7-confirm-details.jpg)
14. Press on `Download .csv` and save it on your machine. It contains the AWS access keys for later. For now, you can
    copy `
    Access key ID` and `Secret access key`, return to the Digger app to continue your deployment from there.
    ![IAM](../img/aws-keys/8-download-csv-and-copy-values.jpg)
