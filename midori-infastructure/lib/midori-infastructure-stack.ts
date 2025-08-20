import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigatewayv2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as apigatewayv2_integrations from 'aws-cdk-lib/aws-apigatewayv2-integrations';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as iam from 'aws-cdk-lib/aws-iam';

export class MidoriInfastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 1. สร้าง VPC สำหรับ DB และ Lambda
    const vpc = new ec2.Vpc(this, 'MidoriVPC', {
      maxAzs: 2,
      natGateways: 1,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'Public',
          subnetType: ec2.SubnetType.PUBLIC,
        },
        {
          cidrMask: 24,
          name: 'Private',
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        },
        {
          cidrMask: 24,
          name: 'Database',
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
        },
      ],
    });

    // 2. สร้าง Security Group สำหรับ RDS
    const dbSecurityGroup = new ec2.SecurityGroup(this, 'DatabaseSecurityGroup', {
      vpc,
      description: 'Security group for RDS database',
      allowAllOutbound: false,
    });

    // สร้าง Security Group สำหรับ Lambda
    const lambdaSecurityGroup = new ec2.SecurityGroup(this, 'LambdaSecurityGroup', {
      vpc,
      description: 'Security group for Lambda function',
      allowAllOutbound: true,
    });

    // ให้ Lambda เข้าถึง RDS
    dbSecurityGroup.addIngressRule(
      lambdaSecurityGroup,
      ec2.Port.tcp(5432),
      'Allow Lambda to connect to RDS'
    );

    // 3. สร้าง RDS PostgreSQL
    const dbCredentials = rds.Credentials.fromGeneratedSecret('midori_admin', {
      secretName: 'midori/db-credentials',
    });

    const database = new rds.DatabaseInstance(this, 'MidoriDatabase', {
      engine: rds.DatabaseInstanceEngine.postgres({
        version: rds.PostgresEngineVersion.VER_17_2, // ใช้ 17.2 ที่เสถียร
      }),
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
      credentials: dbCredentials,
      vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
      },
      securityGroups: [dbSecurityGroup],
      databaseName: 'midori_db',
      backupRetention: cdk.Duration.days(7),
      deletionProtection: false,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // 4. สร้าง Lambda Function สำหรับ API
    const apiLambda = new lambda.Function(this, 'MidoriApiLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('lambda/api'),
      vpc,
      vpcSubnets: { subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS },
      securityGroups: [lambdaSecurityGroup],
      environment: {
        DB_HOST: database.instanceEndpoint.hostname,
        DB_PORT: database.instanceEndpoint.port.toString(),
        DB_NAME: 'midori_db',
        DB_SECRET_NAME: database.secret!.secretName
      },
      timeout: cdk.Duration.seconds(30)
    });

    // สร้าง Migration Lambda
    const migrationLambda = new lambda.Function(this, 'MidoriMigrationLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'migrate.handler',
      code: lambda.Code.fromAsset('lambda/api'),
      vpc,
      vpcSubnets: { subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS },
      securityGroups: [lambdaSecurityGroup],
      environment: {
        DB_HOST: database.instanceEndpoint.hostname,
        DB_PORT: database.instanceEndpoint.port.toString(),
        DB_NAME: 'midori_db',
        DB_SECRET_NAME: database.secret!.secretName
      },
      timeout: cdk.Duration.seconds(60)
    });

    // ให้สิทธิ์ CloudWatch Logs ชัดเจน
    apiLambda.addToRolePolicy(new iam.PolicyStatement({
      actions: ['logs:CreateLogGroup','logs:CreateLogStream','logs:PutLogEvents'],
      resources: ['*'],
    }));

    migrationLambda.addToRolePolicy(new iam.PolicyStatement({
      actions: ['logs:CreateLogGroup','logs:CreateLogStream','logs:PutLogEvents'],
      resources: ['*'],
    }));

    // 5. ให้ Lambda เข้าถึง RDS
    database.grantConnect(apiLambda);
    database.connections.allowDefaultPortFrom(apiLambda);
    database.secret!.grantRead(apiLambda);

    database.grantConnect(migrationLambda);
    database.connections.allowDefaultPortFrom(migrationLambda);
    database.secret!.grantRead(migrationLambda);

    // 6. สร้าง API Gateway
    const httpApi = new apigatewayv2.HttpApi(this, 'MidoriHttpApi', {
      corsPreflight: {
        allowHeaders: ['Content-Type'],
        allowMethods: [apigatewayv2.CorsHttpMethod.GET, apigatewayv2.CorsHttpMethod.POST],
        allowOrigins: ['*'],
      },
    });

    // 7. เชื่อม Lambda กับ API Gateway
    const lambdaIntegration = new apigatewayv2_integrations.HttpLambdaIntegration(
      'LambdaIntegration',
      apiLambda
    );

    httpApi.addRoutes({
      path: '/api/health',
      methods: [apigatewayv2.HttpMethod.GET],
      integration: lambdaIntegration,
    });

    // 8. Output URLs และข้อมูลสำคัญ
    new cdk.CfnOutput(this, 'ApiUrl', {
      value: httpApi.url!,
      description: 'API Gateway URL',
    });

    new cdk.CfnOutput(this, 'DatabaseEndpoint', {
      value: database.instanceEndpoint.hostname,
      description: 'Database endpoint',
    });

    new cdk.CfnOutput(this, 'DatabaseSecretName', {
      value: database.secret!.secretName,
      description: 'Database credentials secret name',
    });
  }
}
