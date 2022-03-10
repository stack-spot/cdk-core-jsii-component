import * as ssm from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';
import { Resource } from '.';


export class StackManager {

    public static saveResource(scope: Construct, resource: Resource) {
        new ssm.StringParameter(scope, 'saveSsmStack-'.concat(resource.stackName), {
            parameterName: `/stackspot/${resource.stackName}/${resource.name}`,
            stringValue: resource.arn
          });
    }

    public static getResourceArn(scope: Construct, stackName: string, rosourceName: string): string {
        return ssm.StringParameter.fromStringParameterName(scope, 
            'getSsmStackResource-'.concat(stackName), 
            `/stackspot/${stackName}/${rosourceName}`).stringValue;
    }

}