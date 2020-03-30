/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyComplexClient } from "../bodyComplexClient";
import {
  DictionaryGetValidResponse,
  DictionaryWrapper,
  DictionaryGetEmptyResponse,
  DictionaryGetNullResponse,
  DictionaryGetNotProvidedResponse
} from "../models";

/**
 * Class representing a Dictionary.
 */
export class Dictionary {
  private readonly client: BodyComplexClient;

  /**
   * Initialize a new instance of the class Dictionary class.
   * @param client Reference to the service client
   */
  constructor(client: BodyComplexClient) {
    this.client = client;
  }

  /**
   * Get complex types with dictionary property
   * @param options The options parameters.
   */
  getValid(
    options?: coreHttp.OperationOptions
  ): Promise<DictionaryGetValidResponse> {
    return this.client.sendOperationRequest(
      { options },
      getValidOperationSpec
    ) as Promise<DictionaryGetValidResponse>;
  }

  /**
   * Put complex types with dictionary property
   * @param complexBody Please put a dictionary with 5 key-value pairs: "txt":"notepad", "bmp":"mspaint",
   *                    "xls":"excel", "exe":"", "":null
   * @param options The options parameters.
   */
  putValid(
    complexBody: DictionaryWrapper,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      { complexBody, options },
      putValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get complex types with dictionary property which is empty
   * @param options The options parameters.
   */
  getEmpty(
    options?: coreHttp.OperationOptions
  ): Promise<DictionaryGetEmptyResponse> {
    return this.client.sendOperationRequest(
      { options },
      getEmptyOperationSpec
    ) as Promise<DictionaryGetEmptyResponse>;
  }

  /**
   * Put complex types with dictionary property which is empty
   * @param complexBody Please put an empty dictionary
   * @param options The options parameters.
   */
  putEmpty(
    complexBody: DictionaryWrapper,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      { complexBody, options },
      putEmptyOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get complex types with dictionary property which is null
   * @param options The options parameters.
   */
  getNull(
    options?: coreHttp.OperationOptions
  ): Promise<DictionaryGetNullResponse> {
    return this.client.sendOperationRequest(
      { options },
      getNullOperationSpec
    ) as Promise<DictionaryGetNullResponse>;
  }

  /**
   * Get complex types with dictionary property while server doesn't provide a response payload
   * @param options The options parameters.
   */
  getNotProvided(
    options?: coreHttp.OperationOptions
  ): Promise<DictionaryGetNotProvidedResponse> {
    return this.client.sendOperationRequest(
      { options },
      getNotProvidedOperationSpec
    ) as Promise<DictionaryGetNotProvidedResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getValidOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/dictionary/typed/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DictionaryWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putValidOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/dictionary/typed/valid",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody14,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  serializer
};
const getEmptyOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/dictionary/typed/empty",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DictionaryWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putEmptyOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/dictionary/typed/empty",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody15,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  serializer
};
const getNullOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/dictionary/typed/null",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DictionaryWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getNotProvidedOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/dictionary/typed/notprovided",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DictionaryWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};