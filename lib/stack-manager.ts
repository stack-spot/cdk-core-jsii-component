import { IStringParameter, StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';
import { IResource } from './resource';

/**
 * Management of the resources created by the stack on AWS.
 */
export class StackManager {
  /**
   * Save resources in SSM.
   */
  public static saveResource(scope: Construct, resource: IResource): IStringParameter {
    return new StringParameter(scope, 'saveSsmStack-'.concat(resource.stackName), {
      parameterName: `/stackspot/${resource.stackName}/${resource.name}`,
      stringValue: resource.arn,
    });
  }

  /**
   * Get the ARN of the resource saved in SSM.
   */
  public static getResourceArn(scope: Construct, stackName: string, resourceName: string): string {
    return StringParameter.fromStringParameterName(
      scope,
      'getSsmStackResource-'.concat(stackName),
      `/stackspot/${stackName}/${resourceName}`,
    ).stringValue;
  }
}
