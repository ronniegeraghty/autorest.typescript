/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BarApi } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Parameters from "../models/parameters";
import { MediaTypesV3ClientContext } from "../mediaTypesV3ClientContext";
import {
  BarApiPostSendOnDefaultOptionalParams,
  BarApiPostSendOnDefaultResponse
} from "../models";

/** Class representing a BarApi. */
export class BarApiImpl implements BarApi {
  private readonly client: MediaTypesV3ClientContext;

  /**
   * Initialize a new instance of the class BarApi class.
   * @param client Reference to the service client
   */
  constructor(client: MediaTypesV3ClientContext) {
    this.client = client;
  }

  /**
   * Send payload to Foo service.
   * @param data simple string
   * @param options The options parameters.
   */
  postSendOnDefault(
    data: string,
    options?: BarApiPostSendOnDefaultOptionalParams
  ): Promise<BarApiPostSendOnDefaultResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      data,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      postSendOnDefaultOperationSpec
    ) as Promise<BarApiPostSendOnDefaultResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer({}, /* isXml */ false);

const postSendOnDefaultOperationSpec: coreHttp.OperationSpec = {
  path: "/bar/api/v1",
  httpMethod: "POST",
  responses: {
    202: {},
    400: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  requestBody: Parameters.data,
  queryParameters: [Parameters.excluded],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "text",
  serializer
};