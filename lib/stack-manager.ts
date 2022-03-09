import * as resources from './resource'
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';


export class StackManager {

    public static saveStack(scope: Construct, stack: resources.IResource){
        new ssm.StringParameter(scope, 'saveSsmStack', {
            parameterName: stack.name,
            stringValue: JSON.stringify(stack)
          });
    }

    public static getStack(scope: Construct, stackName: string): resources.Resource {
        return JSON.parse(ssm.StringParameter.fromStringParameterName(scope, 'getSsmStack', stackName).stringValue); 
    }

    // public static findResource(resourceName:string, stack: resources.Resource): resources.Resource | undefined {
    //     if(resourceName === stack.name) return stack;
        
    //     let result = undefined;
    //     for(let r of stack.resouces){
    //         result = this.findResource(resourceName, r);
    //     }

    //     return result;
    // }

}