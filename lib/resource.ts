
export interface IResource {
    readonly name: string;
    readonly arn: string;
    readonly resourceType: string;
  }
  
export class Resource implements IResource {
    public readonly arn: string;
    public readonly name: string;
    public readonly resourceType: string;
    public readonly resouces: Resource[];
  
    constructor(arn: string, name: string, resourceType: string){
      this.arn = arn;
      this.name = name;
      this.resourceType = resourceType;
      this.resouces = []
    }
  }