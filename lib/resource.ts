

export interface IResource {
  readonly name: string;
  readonly arn: string;
  readonly stackName: string;
}
  
export class Resource implements IResource {
    public readonly arn: string;
    public readonly name: string;
    public readonly stackName: string;
  
    constructor(name: string, arn: string, stackName: string) {
      this.arn = arn;
      this.name = name;
      this.stackName = stackName;
    }
  }