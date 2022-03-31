/**
 * Resource properties.
 */
export interface IResource {
  /**
   * The ARN of the resource.
   */
  readonly arn: string;

  /**
   * The name of the resource.
   */
  readonly name: string;

  /**
   * The name of the resource's stack.
   */
  readonly stackName: string;
}

/**
 * The resource represents something created in AWS.
 */
export class Resource {
  /**
   * The ARN of the resource.
   */
  public readonly arn: string;

  /**
   * The name of the resource.
   */
  public readonly name: string;

  /**
   * The name of the resource's stack.
   */
  public readonly stackName: string;

  /**
   * Creates a new instance of type Resource.
   *
   * @param {string} name The name of the resource.
   * @param {string} arn The ARN of the resource.
   * @param {string} stackName The name of the resource's stack.
   */
  constructor(name: string, arn: string, stackName: string) {
    this.arn = arn;
    this.name = name;
    this.stackName = stackName;
  }
}
