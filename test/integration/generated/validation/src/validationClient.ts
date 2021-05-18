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
import { ValidationClientContext } from "./validationClientContext";
import {
  ValidationClientOptionalParams,
  ValidationClientValidationOfMethodParametersOptionalParams,
  ValidationClientValidationOfMethodParametersResponse,
  ValidationClientValidationOfBodyOptionalParams,
  ValidationClientValidationOfBodyResponse,
  ValidationClientGetWithConstantInPathOptionalParams,
  ValidationClientPostWithConstantInBodyOptionalParams,
  ValidationClientPostWithConstantInBodyResponse
} from "./models";

export class ValidationClient extends ValidationClientContext {
  /**
   * Initializes a new instance of the ValidationClient class.
   * @param subscriptionId Subscription ID.
   * @param options The parameter options
   */
  constructor(
    subscriptionId: string,
    options?: ValidationClientOptionalParams
  ) {
    super(subscriptionId, options);
  }

  /**
   * Validates input parameters on the method. See swagger for details.
   * @param resourceGroupName Required string between 3 and 10 chars with pattern [a-zA-Z0-9]+.
   * @param id Required int multiple of 10 from 100 to 1000.
   * @param options The options parameters.
   */
  validationOfMethodParameters(
    resourceGroupName: string,
    id: number,
    options?: ValidationClientValidationOfMethodParametersOptionalParams
  ): Promise<ValidationClientValidationOfMethodParametersResponse> {
    return this.sendOperationRequest(
      { resourceGroupName, id, options },
      validationOfMethodParametersOperationSpec
    );
  }

  /**
   * Validates body parameters on the method. See swagger for details.
   * @param resourceGroupName Required string between 3 and 10 chars with pattern [a-zA-Z0-9]+.
   * @param id Required int multiple of 10 from 100 to 1000.
   * @param options The options parameters.
   */
  validationOfBody(
    resourceGroupName: string,
    id: number,
    options?: ValidationClientValidationOfBodyOptionalParams
  ): Promise<ValidationClientValidationOfBodyResponse> {
    return this.sendOperationRequest(
      { resourceGroupName, id, options },
      validationOfBodyOperationSpec
    );
  }

  /** @param options The options parameters. */
  getWithConstantInPath(
    options?: ValidationClientGetWithConstantInPathOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { options },
      getWithConstantInPathOperationSpec
    );
  }

  /** @param options The options parameters. */
  postWithConstantInBody(
    options?: ValidationClientPostWithConstantInBodyOptionalParams
  ): Promise<ValidationClientPostWithConstantInBodyResponse> {
    return this.sendOperationRequest(
      { options },
      postWithConstantInBodyOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const validationOfMethodParametersOperationSpec: coreClient.OperationSpec = {
  path: "/fakepath/{subscriptionId}/{resourceGroupName}/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.id
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const validationOfBodyOperationSpec: coreClient.OperationSpec = {
  path: "/fakepath/{subscriptionId}/{resourceGroupName}/{id}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.id,
    Parameters.resourceGroupName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getWithConstantInPathOperationSpec: coreClient.OperationSpec = {
  path: "/validation/constantsInPath/{constantParam}/value",
  httpMethod: "GET",
  responses: { 200: {} },
  urlParameters: [Parameters.$host, Parameters.constantParam],
  serializer
};
const postWithConstantInBodyOperationSpec: coreClient.OperationSpec = {
  path: "/validation/constantsInPath/{constantParam}/value",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Product
    }
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.$host, Parameters.constantParam],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
