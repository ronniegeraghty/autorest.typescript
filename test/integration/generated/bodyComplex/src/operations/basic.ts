/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyComplexClient } from "../bodyComplexClient";

/**
 * Class representing a Basic.
 */
export class Basic {
  private readonly client: BodyComplexClient;

  /**
   * Initialize a new instance of the class Basic class.
   * @param client Reference to the service client
   */
  constructor(client: BodyComplexClient) {
    this.client = client;
  }

  /**
   * Get complex type {id: 2, name: 'abc', color: 'YELLOW'}
   * @param options The options parameters.
   */
  getValid(
    options?: coreHttp.RequestOptionsBase
  ): Promise<Models.BasicGetValidResponse> {
    return this.client.sendOperationRequest(
      { options },
      getValidOperationSpec
    ) as Promise<Models.BasicGetValidResponse>;
  }

  /**
   * Please put {id: 2, name: 'abc', color: 'Magenta'}
   * @param complexBody Please put {id: 2, name: 'abc', color: 'Magenta'}
   * @param options The options parameters.
   */
  putValid(
    complexBody: Models.Basic,
    options?: coreHttp.RequestOptionsBase
  ): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      { complexBody, options },
      putValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get a basic complex type that is invalid for the local strong type
   * @param options The options parameters.
   */
  getInvalid(
    options?: coreHttp.RequestOptionsBase
  ): Promise<Models.BasicGetInvalidResponse> {
    return this.client.sendOperationRequest(
      { options },
      getInvalidOperationSpec
    ) as Promise<Models.BasicGetInvalidResponse>;
  }

  /**
   * Get a basic complex type that is empty
   * @param options The options parameters.
   */
  getEmpty(
    options?: coreHttp.RequestOptionsBase
  ): Promise<Models.BasicGetEmptyResponse> {
    return this.client.sendOperationRequest(
      { options },
      getEmptyOperationSpec
    ) as Promise<Models.BasicGetEmptyResponse>;
  }

  /**
   * Get a basic complex type whose properties are null
   * @param options The options parameters.
   */
  getNull(
    options?: coreHttp.RequestOptionsBase
  ): Promise<Models.BasicGetNullResponse> {
    return this.client.sendOperationRequest(
      { options },
      getNullOperationSpec
    ) as Promise<Models.BasicGetNullResponse>;
  }

  /**
   * Get a basic complex type while the server doesn't provide a response payload
   * @param options The options parameters.
   */
  getNotProvided(
    options?: coreHttp.RequestOptionsBase
  ): Promise<Models.BasicGetNotProvidedResponse> {
    return this.client.sendOperationRequest(
      { options },
      getNotProvidedOperationSpec
    ) as Promise<Models.BasicGetNotProvidedResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers);

const getValidOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/basic/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Basic
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putValidOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/basic/valid",
  httpMethod: "PUT",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  serializer
};
const getInvalidOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/basic/invalid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Basic
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getEmptyOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/basic/empty",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Basic
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getNullOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/basic/null",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Basic
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getNotProvidedOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/basic/notprovided",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Basic
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
