/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export interface ErrorModel {
  status?: number;
  message?: string;
}

/** Optional parameters. */
export interface TimeGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type TimeGetResponse = {
  /** The parsed response body. */
  body: string;
};

/** Optional parameters. */
export interface TimePutOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the put operation. */
export type TimePutResponse = {
  /** The parsed response body. */
  body: string;
};

/** Optional parameters. */
export interface BodyTimeClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
