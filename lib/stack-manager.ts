import * as resources from './resource'
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';
import { Resource } from '.';


export class StackManager {

    public static readonly STACK_TYPE = 'STACKSPOT_STACK'; 

    public static saveStack(scope: Construct, stack: resources.IResource){
        new ssm.StringParameter(scope, 'saveSsmStack', {
            parameterName: stack.name,
            stringValue: JSON.stringify(stack)
          });
    }

    public static createStack(scope: Construct, stackName: string) : Resource {
        const stack = new Resource('', stackName, this.STACK_TYPE);
        this.saveStack(scope, stack);
        return stack;
    }

    public static getStack(scope: Construct, stackName: string): resources.Resource {
        return JSON.parse(ssm.StringParameter.fromStringParameterName(scope, 'getSsmStack', stackName).stringValue); 
    }

}