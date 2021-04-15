## API Report File for "msi-resource-manager"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreHttp from '@azure/core-http';
import { PagedAsyncIterableIterator } from '@azure/core-paging';

// @public
export interface CloudError {
    error?: CloudErrorBody;
}

// @public
export interface CloudErrorBody {
    code?: string;
    details?: CloudErrorBody[];
    message?: string;
    target?: string;
}

// @public
export type Identity = TrackedResource & {
    readonly tenantId?: string;
    readonly principalId?: string;
    readonly clientId?: string;
};

// @public
export type IdentityUpdate = Resource & {
    location?: string;
    tags?: {
        [propertyName: string]: string;
    };
    readonly tenantId?: string;
    readonly principalId?: string;
    readonly clientId?: string;
};

// @public (undocumented)
export class ManagedServiceIdentityClient extends ManagedServiceIdentityClientContext {
    constructor(credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials, subscriptionId: string, options?: ManagedServiceIdentityClientOptionalParams);
    // (undocumented)
    operations: Operations;
    // (undocumented)
    systemAssignedIdentities: SystemAssignedIdentities;
    // (undocumented)
    userAssignedIdentities: UserAssignedIdentities;
}

// @public (undocumented)
export class ManagedServiceIdentityClientContext extends coreHttp.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials, subscriptionId: string, options?: ManagedServiceIdentityClientOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    subscriptionId: string;
}

// @public
export interface ManagedServiceIdentityClientOptionalParams extends coreHttp.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export interface Operation {
    display?: OperationDisplay;
    name?: string;
}

// @public
export interface OperationDisplay {
    description?: string;
    operation?: string;
    provider?: string;
    resource?: string;
}

// @public
export interface OperationListResult {
    nextLink?: string;
    value?: Operation[];
}

// @public
export interface Operations {
    list(options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<Operation>;
}

// @public
export type OperationsListNextResponse = OperationListResult & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: OperationListResult;
    };
};

// @public
export type OperationsListResponse = OperationListResult & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: OperationListResult;
    };
};

// @public
export type ProxyResource = Resource & {};

// @public (undocumented)
export interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
}

// @public
export interface SystemAssignedIdentities {
    getByScope(scope: string, options?: coreHttp.OperationOptions): Promise<SystemAssignedIdentitiesGetByScopeResponse>;
}

// @public
export type SystemAssignedIdentitiesGetByScopeResponse = SystemAssignedIdentity & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: SystemAssignedIdentity;
    };
};

// @public
export type SystemAssignedIdentity = ProxyResource & {
    location: string;
    tags?: {
        [propertyName: string]: string;
    };
    readonly tenantId?: string;
    readonly principalId?: string;
    readonly clientId?: string;
    readonly clientSecretUrl?: string;
};

// @public
export type TrackedResource = Resource & {
    tags?: {
        [propertyName: string]: string;
    };
    location: string;
};

// @public
export interface UserAssignedIdentities {
    createOrUpdate(resourceGroupName: string, resourceName: string, parameters: Identity, options?: coreHttp.OperationOptions): Promise<UserAssignedIdentitiesCreateOrUpdateResponse>;
    delete(resourceGroupName: string, resourceName: string, options?: coreHttp.OperationOptions): Promise<coreHttp.RestResponse>;
    get(resourceGroupName: string, resourceName: string, options?: coreHttp.OperationOptions): Promise<UserAssignedIdentitiesGetResponse>;
    listByResourceGroup(resourceGroupName: string, options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<Identity>;
    listBySubscription(options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<Identity>;
    update(resourceGroupName: string, resourceName: string, parameters: IdentityUpdate, options?: coreHttp.OperationOptions): Promise<UserAssignedIdentitiesUpdateResponse>;
}

// @public
export type UserAssignedIdentitiesCreateOrUpdateResponse = Identity & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: Identity;
    };
};

// @public
export type UserAssignedIdentitiesGetResponse = Identity & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: Identity;
    };
};

// @public
export type UserAssignedIdentitiesListByResourceGroupNextResponse = UserAssignedIdentitiesListResult & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: UserAssignedIdentitiesListResult;
    };
};

// @public
export type UserAssignedIdentitiesListByResourceGroupResponse = UserAssignedIdentitiesListResult & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: UserAssignedIdentitiesListResult;
    };
};

// @public
export type UserAssignedIdentitiesListBySubscriptionNextResponse = UserAssignedIdentitiesListResult & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: UserAssignedIdentitiesListResult;
    };
};

// @public
export type UserAssignedIdentitiesListBySubscriptionResponse = UserAssignedIdentitiesListResult & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: UserAssignedIdentitiesListResult;
    };
};

// @public
export interface UserAssignedIdentitiesListResult {
    nextLink?: string;
    value?: Identity[];
}

// @public
export type UserAssignedIdentitiesUpdateResponse = Identity & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: Identity;
    };
};


// (No @packageDocumentation comment for this package)

```