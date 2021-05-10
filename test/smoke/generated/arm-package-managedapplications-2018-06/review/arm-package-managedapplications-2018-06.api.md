## API Report File for "arm-package-managedapplications-2018-06"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreHttp from '@azure/core-http';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

// @public
export type Application = GenericResource & {
    plan?: Plan;
    kind: string;
    managedResourceGroupId: string;
    applicationDefinitionId?: string;
    parameters?: any;
    readonly outputs?: any;
    readonly provisioningState?: ProvisioningState;
};

// @public
export interface ApplicationArtifact {
    name?: string;
    type?: ApplicationArtifactType;
    uri?: string;
}

// @public
export type ApplicationArtifactType = "Template" | "Custom";

// @public (undocumented)
export class ApplicationClient extends ApplicationClientContext {
    constructor(credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials, subscriptionId: string, options?: ApplicationClientOptionalParams);
    // (undocumented)
    applicationDefinitions: ApplicationDefinitions;
    // (undocumented)
    applications: Applications;
}

// @public (undocumented)
export class ApplicationClientContext extends coreHttp.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials, subscriptionId: string, options?: ApplicationClientOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    subscriptionId: string;
}

// @public
export interface ApplicationClientOptionalParams extends coreHttp.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export type ApplicationDefinition = GenericResource & {
    lockLevel: ApplicationLockLevel;
    displayName?: string;
    isEnabled?: string;
    authorizations: ApplicationProviderAuthorization[];
    artifacts?: ApplicationArtifact[];
    description?: string;
    packageFileUri?: string;
    mainTemplate?: any;
    createUiDefinition?: any;
};

// @public
export interface ApplicationDefinitionListResult {
    nextLink?: string;
    value?: ApplicationDefinition[];
}

// @public
export interface ApplicationDefinitions {
    createOrUpdate(resourceGroupName: string, applicationDefinitionName: string, parameters: ApplicationDefinition, options?: ApplicationDefinitionsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ApplicationDefinitionsCreateOrUpdateResponse>, ApplicationDefinitionsCreateOrUpdateResponse>>;
    createOrUpdateById(applicationDefinitionId: string, parameters: ApplicationDefinition, options?: ApplicationDefinitionsCreateOrUpdateByIdOptionalParams): Promise<PollerLike<PollOperationState<ApplicationDefinitionsCreateOrUpdateByIdResponse>, ApplicationDefinitionsCreateOrUpdateByIdResponse>>;
    delete(resourceGroupName: string, applicationDefinitionName: string, options?: ApplicationDefinitionsDeleteOptionalParams): Promise<PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>>;
    deleteById(applicationDefinitionId: string, options?: ApplicationDefinitionsDeleteByIdOptionalParams): Promise<PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>>;
    get(resourceGroupName: string, applicationDefinitionName: string, options?: ApplicationDefinitionsGetOptionalParams): Promise<ApplicationDefinitionsGetResponse>;
    getById(applicationDefinitionId: string, options?: ApplicationDefinitionsGetByIdOptionalParams): Promise<ApplicationDefinitionsGetByIdResponse>;
    listByResourceGroup(resourceGroupName: string, options?: ApplicationDefinitionsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<ApplicationDefinition>;
}

// @public
export interface ApplicationDefinitionsCreateOrUpdateByIdOptionalParams extends coreHttp.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type ApplicationDefinitionsCreateOrUpdateByIdResponse = ApplicationDefinition & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: ApplicationDefinition;
    };
};

// @public
export interface ApplicationDefinitionsCreateOrUpdateOptionalParams extends coreHttp.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type ApplicationDefinitionsCreateOrUpdateResponse = ApplicationDefinition & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: ApplicationDefinition;
    };
};

// @public
export interface ApplicationDefinitionsDeleteByIdOptionalParams extends coreHttp.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface ApplicationDefinitionsDeleteOptionalParams extends coreHttp.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface ApplicationDefinitionsGetByIdOptionalParams extends coreHttp.OperationOptions {
}

// @public
export type ApplicationDefinitionsGetByIdResponse = ApplicationDefinition & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: ApplicationDefinition;
    };
};

// @public
export interface ApplicationDefinitionsGetOptionalParams extends coreHttp.OperationOptions {
}

// @public
export type ApplicationDefinitionsGetResponse = ApplicationDefinition & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: ApplicationDefinition;
    };
};

// @public
export interface ApplicationDefinitionsListByResourceGroupNextOptionalParams extends coreHttp.OperationOptions {
}

// @public
export type ApplicationDefinitionsListByResourceGroupNextResponse = ApplicationDefinitionListResult & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: ApplicationDefinitionListResult;
    };
};

// @public
export interface ApplicationDefinitionsListByResourceGroupOptionalParams extends coreHttp.OperationOptions {
}

// @public
export type ApplicationDefinitionsListByResourceGroupResponse = ApplicationDefinitionListResult & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: ApplicationDefinitionListResult;
    };
};

// @public
export interface ApplicationListResult {
    nextLink?: string;
    value?: Application[];
}

// @public
export type ApplicationLockLevel = "CanNotDelete" | "ReadOnly" | "None";

// @public
export type ApplicationPatchable = GenericResource & {
    plan?: PlanPatchable;
    kind?: string;
    managedResourceGroupId?: string;
    applicationDefinitionId?: string;
    parameters?: any;
    readonly outputs?: any;
    readonly provisioningState?: ProvisioningState;
};

// @public
export interface ApplicationProviderAuthorization {
    principalId: string;
    roleDefinitionId: string;
}

// @public
export interface Applications {
    createOrUpdate(resourceGroupName: string, applicationName: string, parameters: Application, options?: ApplicationsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ApplicationsCreateOrUpdateResponse>, ApplicationsCreateOrUpdateResponse>>;
    createOrUpdateById(applicationId: string, parameters: Application, options?: ApplicationsCreateOrUpdateByIdOptionalParams): Promise<PollerLike<PollOperationState<ApplicationsCreateOrUpdateByIdResponse>, ApplicationsCreateOrUpdateByIdResponse>>;
    delete(resourceGroupName: string, applicationName: string, options?: ApplicationsDeleteOptionalParams): Promise<PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>>;
    deleteById(applicationId: string, options?: ApplicationsDeleteByIdOptionalParams): Promise<PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>>;
    get(resourceGroupName: string, applicationName: string, options?: ApplicationsGetOptionalParams): Promise<ApplicationsGetResponse>;
    getById(applicationId: string, options?: ApplicationsGetByIdOptionalParams): Promise<ApplicationsGetByIdResponse>;
    listByResourceGroup(resourceGroupName: string, options?: ApplicationsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<Application>;
    listBySubscription(options?: ApplicationsListBySubscriptionOptionalParams): PagedAsyncIterableIterator<Application>;
    update(resourceGroupName: string, applicationName: string, options?: ApplicationsUpdateOptionalParams): Promise<ApplicationsUpdateResponse>;
    updateById(applicationId: string, options?: ApplicationsUpdateByIdOptionalParams): Promise<ApplicationsUpdateByIdResponse>;
}

// @public
export interface ApplicationsCreateOrUpdateByIdOptionalParams extends coreHttp.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type ApplicationsCreateOrUpdateByIdResponse = Application & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: Application;
    };
};

// @public
export interface ApplicationsCreateOrUpdateOptionalParams extends coreHttp.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type ApplicationsCreateOrUpdateResponse = Application & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: Application;
    };
};

// @public
export interface ApplicationsDeleteByIdOptionalParams extends coreHttp.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface ApplicationsDeleteOptionalParams extends coreHttp.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface ApplicationsGetByIdOptionalParams extends coreHttp.OperationOptions {
}

// @public
export type ApplicationsGetByIdResponse = Application & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: Application;
    };
};

// @public
export interface ApplicationsGetOptionalParams extends coreHttp.OperationOptions {
}

// @public
export type ApplicationsGetResponse = Application & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: Application;
    };
};

// @public
export interface ApplicationsListByResourceGroupNextOptionalParams extends coreHttp.OperationOptions {
}

// @public
export type ApplicationsListByResourceGroupNextResponse = ApplicationListResult & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: ApplicationListResult;
    };
};

// @public
export interface ApplicationsListByResourceGroupOptionalParams extends coreHttp.OperationOptions {
}

// @public
export type ApplicationsListByResourceGroupResponse = ApplicationListResult & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: ApplicationListResult;
    };
};

// @public
export interface ApplicationsListBySubscriptionNextOptionalParams extends coreHttp.OperationOptions {
}

// @public
export type ApplicationsListBySubscriptionNextResponse = ApplicationListResult & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: ApplicationListResult;
    };
};

// @public
export interface ApplicationsListBySubscriptionOptionalParams extends coreHttp.OperationOptions {
}

// @public
export type ApplicationsListBySubscriptionResponse = ApplicationListResult & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: ApplicationListResult;
    };
};

// @public
export interface ApplicationsUpdateByIdOptionalParams extends coreHttp.OperationOptions {
    parameters?: Application;
}

// @public
export type ApplicationsUpdateByIdResponse = Application & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: Application;
    };
};

// @public
export interface ApplicationsUpdateOptionalParams extends coreHttp.OperationOptions {
    parameters?: Application;
}

// @public
export type ApplicationsUpdateResponse = Application & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: Application;
    };
};

// @public
export interface ErrorResponse {
    errorCode?: string;
    errorMessage?: string;
    httpStatus?: string;
}

// @public
export type GenericResource = Resource & {
    managedBy?: string;
    sku?: Sku;
    identity?: Identity;
};

// @public
export interface Identity {
    readonly principalId?: string;
    readonly tenantId?: string;
    type?: "SystemAssigned";
}

// @public
export const enum KnownProvisioningState {
    // (undocumented)
    Accepted = "Accepted",
    // (undocumented)
    Canceled = "Canceled",
    // (undocumented)
    Created = "Created",
    // (undocumented)
    Creating = "Creating",
    // (undocumented)
    Deleted = "Deleted",
    // (undocumented)
    Deleting = "Deleting",
    // (undocumented)
    Failed = "Failed",
    // (undocumented)
    Ready = "Ready",
    // (undocumented)
    Running = "Running",
    // (undocumented)
    Succeeded = "Succeeded",
    // (undocumented)
    Updating = "Updating"
}

// @public
export interface Plan {
    name: string;
    product: string;
    promotionCode?: string;
    publisher: string;
    version: string;
}

// @public
export interface PlanPatchable {
    name?: string;
    product?: string;
    promotionCode?: string;
    publisher?: string;
    version?: string;
}

// @public
export type ProvisioningState = string;

// @public
export interface Resource {
    readonly id?: string;
    location?: string;
    readonly name?: string;
    tags?: {
        [propertyName: string]: string;
    };
    readonly type?: string;
}

// @public
export interface Sku {
    capacity?: number;
    family?: string;
    model?: string;
    name: string;
    size?: string;
    tier?: string;
}


// (No @packageDocumentation comment for this package)

```