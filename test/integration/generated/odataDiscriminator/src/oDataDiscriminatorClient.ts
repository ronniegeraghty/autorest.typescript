/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { ODataDiscriminatorClientContext } from "./oDataDiscriminatorClientContext";
import {
  ODataDiscriminatorClientOptionalParams,
  Enum0,
  ODataDiscriminatorClientApiV1ValueGetOptionalParams,
  ODataDiscriminatorClientApiV1ValueGetResponse
} from "./models";

export class ODataDiscriminatorClient extends ODataDiscriminatorClientContext {
  /**
   * Initializes a new instance of the ODataDiscriminatorClient class.
   * @param $host server parameter
   * @param apiVersion
   * @param options The parameter options
   */
  constructor(
    $host: string,
    apiVersion: Enum0,
    options?: ODataDiscriminatorClientOptionalParams
  ) {
    super($host, apiVersion, options);
  }

  /** @param options The options parameters. */
  apiV1ValueGet(
    options?: ODataDiscriminatorClientApiV1ValueGetOptionalParams
  ): Promise<ODataDiscriminatorClientApiV1ValueGetResponse> {
    return this.sendOperationRequest({ options }, apiV1ValueGetOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const apiV1ValueGetOperationSpec: coreClient.OperationSpec = {
  path: "/api/v1/value",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.apiVersion],
  serializer
};
