import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { IResource, Resource, StackManager } from '../lib/index';

describe('Stack Manager', () => {
  test('Can save resource in SSM', () => {
    const resource: IResource = new Resource(
      'test-name',
      'test-arn',
      'test-stack-name'
    );

    const app = new App();
    const stack = new Stack(app, 'TestStack');
    StackManager.saveResource(stack, resource);
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::SSM::Parameter', {
      Name: '/stackspot/test-stack-name/test-name',
      Type: 'String',
      Value: 'test-arn',
    });
  });

  test('Can get ARN resource from SSM', () => {
    const resource: IResource = new Resource(
      'test-name',
      'test-arn',
      'test-stack-name'
    );

    const app = new App();
    const stack = new Stack(app, 'TestStack');
    StackManager.saveResource(stack, resource);
    const ssmParameter = StackManager.getResourceArn(
      stack,
      'test-stack-name',
      'test-name'
    );

    expect(stack.resolve(ssmParameter).Ref).toBe(
      'getSsmStackResourceteststacknameParameter'
    );
  });
});
