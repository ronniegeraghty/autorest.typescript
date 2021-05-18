/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { HttpServerFailure } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HttpInfrastructureClientContext } from "../httpInfrastructureClientContext";
import {
  HttpServerFailureHead501OptionalParams,
  HttpServerFailureGet501OptionalParams,
  HttpServerFailurePost505OptionalParams,
  HttpServerFailureDelete505OptionalParams
} from "../models";

/** Class representing a HttpServerFailure. */
export class HttpServerFailureImpl implements HttpServerFailure {
  private readonly client: HttpInfrastructureClientContext;

  /**
   * Initialize a new instance of the class HttpServerFailure class.
   * @param client Reference to the service client
   */
  constructor(client: HttpInfrastructureClientContext) {
    this.client = client;
  }

  /**
   * Return 501 status code - should be represented in the client as an error
   * @param options The options parameters.
   */
  head501(options?: HttpServerFailureHead501OptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, head501OperationSpec);
  }

  /**
   * Return 501 status code - should be represented in the client as an error
   * @param options The options parameters.
   */
  get501(options?: HttpServerFailureGet501OptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, get501OperationSpec);
  }

  /**
   * Return 505 status code - should be represented in the client as an error
   * @param options The options parameters.
   */
  post505(options?: HttpServerFailurePost505OptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, post505OperationSpec);
  }

  /**
   * Return 505 status code - should be represented in the client as an error
   * @param options The options parameters.
   */
  delete505(options?: HttpServerFailureDelete505OptionalParams): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      delete505OperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const head501OperationSpec: coreClient.OperationSpec = {
  path: "/http/failure/server/501",
  httpMethod: "HEAD",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get501OperationSpec: coreClient.OperationSpec = {
  path: "/http/failure/server/501",
  httpMethod: "GET",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const post505OperationSpec: coreClient.OperationSpec = {
  path: "/http/failure/server/505",
  httpMethod: "POST",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.booleanValue,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const delete505OperationSpec: coreClient.OperationSpec = {
  path: "/http/failure/server/505",
  httpMethod: "DELETE",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.booleanValue,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
