/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export interface PetAPTrue {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  id: number;
  name?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly status?: boolean;
}

export interface ErrorModel {
  status?: number;
  message?: string;
}

export interface PetAPObject {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  id: number;
  name?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly status?: boolean;
}

export interface PetAPString {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  id: number;
  name?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly status?: boolean;
}

export interface PetAPInProperties {
  id: number;
  name?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly status?: boolean;
  /** Dictionary of <number> */
  additionalProperties?: { [propertyName: string]: number };
}

export interface PetAPInPropertiesWithAPString {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  id: number;
  name?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly status?: boolean;
  odataLocation: string;
  /** Dictionary of <number> */
  additionalProperties?: { [propertyName: string]: number };
}

export type CatAPTrue = PetAPTrue & {
  friendly?: boolean;
};

/** Optional parameters. */
export interface PetsCreateAPTrueOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createAPTrue operation. */
export type PetsCreateAPTrueResponse = PetAPTrue;

/** Optional parameters. */
export interface PetsCreateCatAPTrueOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createCatAPTrue operation. */
export type PetsCreateCatAPTrueResponse = CatAPTrue;

/** Optional parameters. */
export interface PetsCreateAPObjectOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createAPObject operation. */
export type PetsCreateAPObjectResponse = PetAPObject;

/** Optional parameters. */
export interface PetsCreateAPStringOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createAPString operation. */
export type PetsCreateAPStringResponse = PetAPString;

/** Optional parameters. */
export interface PetsCreateAPInPropertiesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createAPInProperties operation. */
export type PetsCreateAPInPropertiesResponse = PetAPInProperties;

/** Optional parameters. */
export interface PetsCreateAPInPropertiesWithAPStringOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createAPInPropertiesWithAPString operation. */
export type PetsCreateAPInPropertiesWithAPStringResponse = PetAPInPropertiesWithAPString;

/** Optional parameters. */
export interface AdditionalPropertiesClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
