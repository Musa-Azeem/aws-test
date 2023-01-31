# Example express app on AWS Lambda

Steps:

1. Install and configure AWS CLI
- install from [here](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- create a user In one of these ways:
    - create a user with Admistrator permissions [here](`https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1&skipRegion=true#/users)
    - or (the less correct way) create access key for root user from top left corner drop menu -> security credentials
- configure: `aws configure`
    - get access and secret access keys from aws online
    - region: `us-east-2`
    - default output: `json`

2. Install SAM from [here](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)

3. Build (`sam build`) and Deploy (`sam deploy --guided`)
- give stack_name, etc.
- in future deployments, only need `sam build` and `sam deploy`

4. Go to API Gateway on AWS and follor the steps:
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

5. Deploy API (actions -> deploy API -> create new stage)

---

**Delete A Lambda Function**:
- `aws cloudformation delete-stack --stack-name \<stack name\>

**Test Locally**
- `sam local invoke`
- `sam local start-api`

## Invoke Rest API
- Find invoke URL from API Gateway -> APIs -> this API -> Stages -> Prod -> click one of the methods
- or get it from the lambda page -> triggers

- https:/https://{restapi_id}.execute-api.{region}.amazonaws.com/Prod/\<url path\>
