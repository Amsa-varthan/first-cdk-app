# My First AWS CDK Application

This is a simple "Hello World" application deployed on AWS using the AWS Cloud Development Kit (CDK).

This project creates a basic AWS Lambda function that returns a simple message.

## Architecture

* **AWS Lambda**: A single Node.js function located in the `/lambdas` directory.
* **Amazon S3**: The CDK uses an S3 bucket to store assets during deployment.

## Useful CDK Commands

* `npm install` - Install all required dependencies.
* `cdk bootstrap` - Prepare your AWS environment for the CDK (only needs to be run once).
* `cdk synth` - Generates the CloudFormation template.
* `cdk deploy` - Deploys the stack to your default AWS account/region.
* `cdk diff` - Compares the deployed stack with the current state.
* `cdk destroy` - Removes the stack and all its resources from AWS.