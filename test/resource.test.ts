import { IResource, Resource } from '../lib/index';

describe('Resource', () => {
  test('Has ARN property', () => {
    const resource: IResource = new Resource(
      'test-name',
      'test-arn',
      'test-stack-name',
    );
    expect(resource.arn).toBe('test-arn');
  });

  test('Has name property', () => {
    const resource: IResource = new Resource(
      'test-name',
      'test-arn',
      'test-stack-name',
    );
    expect(resource.name).toBe('test-name');
  });

  test('Has stack name property', () => {
    const resource: IResource = new Resource(
      'test-name',
      'test-arn',
      'test-stack-name',
    );
    expect(resource.stackName).toBe('test-stack-name');
  });
});
