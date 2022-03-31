import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';
import { IResource } from './resource';

/**
 * Management of the resources created by the stack on AWS.
 */
export class StackManager {
  /**
   * Get the ARN of the resource saved in SSM.
   *
   * @param {Construct} scope The construct within which this construct is defined.
   * @param {string} stackName The name of the stack.
   * @param {string} resourceName The name of the resource.
   * @returns string The ARN saved in SSM.
   */
  public static getResourceArn(
    scope: Construct,
    stackName: string,
    resourceName: string
  ): string {
    return StringParameter.fromStringParameterName(
      scope,
      `getSsmStackResource-${stackName}`,
      `/stackspot/${stackName}/${resourceName}`
    ).stringValue;
  }

  /**
   * Save resources in SSM.
   *
   * @param {Construct} scope The construct within which this construct is defined.
   * @param {IResource} resource The resource to be saved.
   * @returns StringParameter The saved resource.
   */
  public static saveResource(
    scope: Construct,
    resource: IResource
  ): StringParameter {
    return new StringParameter(scope, `saveSsmResource-${resource.name}`, {
      parameterName: `/stackspot/${resource.stackName}/${resource.name}`,
      stringValue: resource.arn,
    });
  }
}
