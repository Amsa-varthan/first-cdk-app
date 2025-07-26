import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { join } from 'path';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class FirstCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const handler = new Function(this, 'Hello-World-Cdk', {
      runtime: Runtime.NODEJS_20_X, // Corrected line
      memorySize: 512,
      handler: 'demo.handler',
      code: Code.fromAsset(join(__dirname, '../lambdas'))
    });
  }
}