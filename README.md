# Example express app on AWS Lambda

Steps:

1. Install and configure AWS CLI
- install from [here](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- create a user In one of these ways:
    - create a user with Admistrator permissions [here](`https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1&skipRegion=true#/users)
    - or (the less correct way) create access key for root user from top left corner drop menu -> security credentials

2. Install SAM from [here](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)

---- might not need this ----

3. Create an s3 bucket with `aws s3api create-bucket --bucket <bucket-name> --region <region> --create-bucket-configuration LocationConstraint=<region>`
- region can be `us-east-2`
- change region and s3-bucket values in `samconfig.toml` to be the same

4. Create ECR repo with `aws ecr create-repository --repository-name hello-world`

----------- _ ------------

5. Build (`sam build`) and Deploy (`sam deploy --guided`)
- give stack_name, etc.

6. Go to API Gateway on AWS and follor the steps:
- Click Create API button at the top
- In the Choose an API type: Select REST API card and click Build
- Give it a name: sam-test and click create
- Now we see empty resources just an ‘/’
- Click on Actions drop-down then select Create Method
- Select ANY to method
- Set Lambda Integration to true and select your region and then select our function in the Lambda Function
- Approve the modal that appears regarding permissions
- Click on “ANY” method then Actions drop-down list then select Create Resource
- Click on Configure as proxy resource and then Create Resource
- Set Lambda Integration to true and select your region and then select our function in the Lambda Function.

7. Deploy API (actions -> deploy API -> create new stage)


**Delete A Lambda Function**:
- `aws cloudformation delete-stack --stack-name \<stack name\>