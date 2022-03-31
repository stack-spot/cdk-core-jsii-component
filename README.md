# CDK Core

[![aws-cdk][badge-aws-cdk]][aws-cdk]
[![jsii][badge-jsii]][jsii]
[![npm-version][badge-npm-version]][npm-package]
[![nuget-version][badge-nuget-version]][nuget-package]
[![npm-downloads][badge-npm-downloads]][npm-package]
[![nuget-downloads][badge-nuget-downloads]][nuget-package]
[![license][badge-license]][license]

Component to manage stack in SSM.

## How to use

Below are all languages supported by the AWS CDK.

### C#

Install the dependency:

```sh
dotnet add package StackSpot.Cdk.Core
```

Import the construct into your project, for example:

```csharp
using Amazon.CDK;
using Constructs;
using StackSpot.Cdk.Core;

namespace MyStack
{
    public class MyStack : Stack
    {
        internal MyStack(Construct scope, string id, IStackProps props = null) : base(scope, id, props)
        {
            Resource resource = new Resource("resource-name", "resource-arn", "resource-stack-name");

            // Save
            StackManager.SaveResource(this, resource);

            // Fetch
            string myArn = StackManager.GetResourceArn(this, "resource-stack-name", "resource-name");
        }
    }
}
```

### F#

Not yet supported.

### Go

Not yet supported.

### Java

Not yet supported.

### JavaScript

Install the dependency:

```sh
npm install --save @stackspot/cdk-core
```

Import the construct into your project, for example:

```javascript
const { Stack } = require('aws-cdk-lib');
const { IResource, Resource, StackManager } = require('@stackspot/cdk-core');

class MyStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const resource: IResource = new Resource(
      'resource-name',
      'resource-arn',
      'resource-stack-name'
    );

    // Save
    StackManager.saveResource(this, resource);

    // Fetch
    const myArn: string = StackManager.getResourceArn(
      this,
      'resource-stack-name',
      'resource-name'
    );
  }
}

module.exports = { MyStack };
```

### Python

Not yet supported.

### TypeScript

Install the dependency:

```sh
npm install --save @stackspot/cdk-core
```

Import the construct into your project, for example:

```typescript
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { IResource, Resource, StackManager } from '@stackspot/cdk-core';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const resource: IResource = new Resource(
      'resource-name',
      'resource-arn',
      'resource-stack-name'
    );

    // Save
    StackManager.saveResource(this, resource);

    // Fetch
    const myArn: string = StackManager.getResourceArn(
      this,
      'resource-stack-name',
      'resource-name'
    );
  }
}
```

## Construct Props

### Resource

| Name      | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| arn       | string | The ARN of the resource.          |
| name      | string | The name of the resource.         |
| stackName | string | The name of the resource's stack. |

## Properties

### Resource

| Name      | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| arn       | string | The ARN of the resource.          |
| name      | string | The name of the resource.         |
| stackName | string | The name of the resource's stack. |

## Methods

### StackManager

| Name                                                  | Description                               |
| ----------------------------------------------------- | ----------------------------------------- |
| static getResourceArn(scope, stackName, resourceName) | Get the ARN of the resource saved in SSM. |
| static saveResource(scope, resource)                  | Save resources in SSM.                    |

#### static getResourceArn(scope, stackName, resourceName)

```typescript
public static getResourceArn(scope: Construct, stackName: string, resourceName: string): string
```

_Parameters_

- **scope** [Construct][aws-cdk-construct]
- **stackName** string
- **resourceName** string

_Returns_

- string

Get the ARN of the resource saved in SSM.

#### static saveResource(scope, resource)

```typescript
public static saveResource(scope: Construct, resource: IResource): StringParameter
```

_Parameters_

- **scope** [Construct][aws-cdk-construct]
- **resource** [IResource](#resource)

_Returns_

- [StringParameter][aws-cdk-ssm-string-parameter]

Save resources in SSM.

## IAM Least privilege

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ssm:DeleteParameter",
        "ssm:GetParameters",
        "ssm:PutParameter"
      ],
      "Resource": "*"
    }
  ]
}
```

## Development

### Prerequisites

- [EditorConfig][editorconfig] (Optional)
- [Git][git]
- [Node.js][nodejs] 17

### Setup

```sh
cd cdk-core-jsii-component
npm install
```

You are done! Happy coding!

[aws-cdk]: https://aws.amazon.com/cdk
[aws-cdk-construct]: https://docs.aws.amazon.com/cdk/api/v2/docs/constructs.Construct.html
[aws-cdk-ssm-string-parameter]: https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ssm.StringParameter.html
[badge-aws-cdk]: https://img.shields.io/github/package-json/dependency-version/stack-spot/cdk-core-jsii-component/aws-cdk-lib
[badge-jsii]: https://img.shields.io/github/package-json/dependency-version/stack-spot/cdk-core-jsii-component/dev/jsii
[badge-license]: https://img.shields.io/github/license/stack-spot/cdk-core-jsii-component
[badge-npm-downloads]: https://img.shields.io/npm/dt/@stackspot/cdk-core?label=downloads%20%28npm%29
[badge-npm-version]: https://img.shields.io/npm/v/@stackspot/cdk-core
[badge-nuget-downloads]: https://img.shields.io/nuget/dt/StackSpot.Cdk.Core?label=downloads%20%28NuGet%29
[badge-nuget-version]: https://img.shields.io/nuget/vpre/StackSpot.Cdk.Core
[editorconfig]: https://editorconfig.org/
[git]: https://git-scm.com/downloads
[jsii]: https://aws.github.io/jsii/
[license]: https://github.com/stack-spot/cdk-core-jsii-component/blob/main/LICENSE
[nodejs]: https://nodejs.org/en/download/
[npm-package]: https://www.npmjs.com/package/@stackspot/cdk-core
[nuget-package]: https://www.nuget.org/packages/StackSpot.Cdk.Core
