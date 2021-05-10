/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

/** Result of the request to list Microsoft.Resources operations. It contains a list of operations and a URL link to get the next set of results. */
export interface OperationListResult {
  /** List of Microsoft.Resources operations. */
  value?: Operation[];
  /** URL to get the next set of operation list results if there are any. */
  nextLink?: string;
}

/** Microsoft.Resources operation */
export interface Operation {
  /** Operation name: {provider}/{resource}/{operation} */
  name?: string;
  /** The object that represents the operation. */
  display?: OperationDisplay;
}

/** The object that represents the operation. */
export interface OperationDisplay {
  /** Service provider: Microsoft.Resources */
  provider?: string;
  /** Resource on which the operation is performed: Profile, endpoint, etc. */
  resource?: string;
  /** Operation type: Read, write, delete, etc. */
  operation?: string;
  /** Description of the operation. */
  description?: string;
}

/** The resource link. */
export interface ResourceLink {
  /**
   * The fully qualified ID of the resource link.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource link.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The resource link object.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: any;
  /** Properties for resource link. */
  properties?: ResourceLinkProperties;
}

/** The resource link properties. */
export interface ResourceLinkProperties {
  /**
   * The fully qualified ID of the source resource in the link.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly sourceId?: string;
  /** The fully qualified ID of the target resource in the link. */
  targetId: string;
  /** Notes about the resource link. */
  notes?: string;
}

/** List of resource links. */
export interface ResourceLinkResult {
  /** An array of resource links. */
  value: ResourceLink[];
  /**
   * The URL to use for getting the next set of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Resource link filter. */
export interface ResourceLinkFilter {
  /** The ID of the target resource. */
  targetId: string;
}

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: OperationListResult;
  };
};

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationListResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: OperationListResult;
  };
};

/** Optional parameters. */
export interface ResourceLinksDeleteOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface ResourceLinksCreateOrUpdateOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type ResourceLinksCreateOrUpdateResponse = ResourceLink & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ResourceLink;
  };
};

/** Optional parameters. */
export interface ResourceLinksGetOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the get operation. */
export type ResourceLinksGetResponse = ResourceLink & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ResourceLink;
  };
};

/** Optional parameters. */
export interface ResourceLinksListAtSubscriptionOptionalParams
  extends coreHttp.OperationOptions {
  /** The filter to apply on the list resource links operation. The supported filter for list resource links is targetId. For example, $filter=targetId eq {value} */
  filter?: string;
}

/** Contains response data for the listAtSubscription operation. */
export type ResourceLinksListAtSubscriptionResponse = ResourceLinkResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ResourceLinkResult;
  };
};

/** Optional parameters. */
export interface ResourceLinksListAtSourceScopeOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the listAtSourceScope operation. */
export type ResourceLinksListAtSourceScopeResponse = ResourceLinkResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ResourceLinkResult;
  };
};

/** Optional parameters. */
export interface ResourceLinksListAtSubscriptionNextOptionalParams
  extends coreHttp.OperationOptions {
  /** The filter to apply on the list resource links operation. The supported filter for list resource links is targetId. For example, $filter=targetId eq {value} */
  filter?: string;
}

/** Contains response data for the listAtSubscriptionNext operation. */
export type ResourceLinksListAtSubscriptionNextResponse = ResourceLinkResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ResourceLinkResult;
  };
};

/** Optional parameters. */
export interface ResourceLinksListAtSourceScopeNextOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the listAtSourceScopeNext operation. */
export type ResourceLinksListAtSourceScopeNextResponse = ResourceLinkResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ResourceLinkResult;
  };
};

/** Optional parameters. */
export interface ManagementLinkClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}