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
import { LROClient } from "../lROClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  LRORetrysPut201CreatingSucceeded200OptionalParams,
  LRORetrysPut201CreatingSucceeded200Response,
  LRORetrysPutAsyncRelativeRetrySucceededOptionalParams,
  LRORetrysPutAsyncRelativeRetrySucceededResponse,
  LRORetrysDeleteProvisioning202Accepted200SucceededResponse,
  LRORetrysDelete202Retry200Response,
  LRORetrysDeleteAsyncRelativeRetrySucceededResponse,
  LRORetrysPost202Retry200OptionalParams,
  LRORetrysPost202Retry200Response,
  LRORetrysPostAsyncRelativeRetrySucceededOptionalParams,
  LRORetrysPostAsyncRelativeRetrySucceededResponse
} from "../models";

/**
 * Class representing a LRORetrys.
 */
export class LRORetrys {
  private readonly client: LROClient;

  /**
   * Initialize a new instance of the class LRORetrys class.
   * @param client Reference to the service client
   */
  constructor(client: LROClient) {
    this.client = client;
  }

  /**
   * Long running put request, service returns a 500, then a 201 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a
   * ‘200’ with ProvisioningState=’Succeeded’
   * @param options The options parameters.
   */
  async put201CreatingSucceeded200(
    options?: LRORetrysPut201CreatingSucceeded200OptionalParams
  ): Promise<LROPoller<LRORetrysPut201CreatingSucceeded200Response>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = { options: operationOptions };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        LRORetrysPut201CreatingSucceeded200Response
      >;
    const initialOperationResult = await sendOperation(
      args,
      put201CreatingSucceeded200OperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: put201CreatingSucceeded200OperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Long running put request, service returns a 500, then a 200 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation
   * header for operation status
   * @param options The options parameters.
   */
  async putAsyncRelativeRetrySucceeded(
    options?: LRORetrysPutAsyncRelativeRetrySucceededOptionalParams
  ): Promise<LROPoller<LRORetrysPutAsyncRelativeRetrySucceededResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = { options: operationOptions };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        LRORetrysPutAsyncRelativeRetrySucceededResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      putAsyncRelativeRetrySucceededOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: putAsyncRelativeRetrySucceededOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Long running delete request, service returns a 500, then a  202 to the initial request, with an
   * entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll
   * returns a ‘200’ with ProvisioningState=’Succeeded’
   * @param options The options parameters.
   */
  async deleteProvisioning202Accepted200Succeeded(
    options?: coreHttp.OperationOptions
  ): Promise<
    LROPoller<LRORetrysDeleteProvisioning202Accepted200SucceededResponse>
  > {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = { options: operationOptions };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        LRORetrysDeleteProvisioning202Accepted200SucceededResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      deleteProvisioning202Accepted200SucceededOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: deleteProvisioning202Accepted200SucceededOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Long running delete request, service returns a 500, then a 202 to the initial request. Polls return
   * this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’
   * @param options The options parameters.
   */
  async delete202Retry200(
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<LRORetrysDelete202Retry200Response>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = { options: operationOptions };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        LRORetrysDelete202Retry200Response
      >;
    const initialOperationResult = await sendOperation(
      args,
      delete202Retry200OperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: delete202Retry200OperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Long running delete request, service returns a 500, then a 202 to the initial request. Poll the
   * endpoint indicated in the Azure-AsyncOperation header for operation status
   * @param options The options parameters.
   */
  async deleteAsyncRelativeRetrySucceeded(
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<LRORetrysDeleteAsyncRelativeRetrySucceededResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = { options: operationOptions };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        LRORetrysDeleteAsyncRelativeRetrySucceededResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      deleteAsyncRelativeRetrySucceededOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: deleteAsyncRelativeRetrySucceededOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Long running post request, service returns a 500, then a 202 to the initial request, with 'Location'
   * and 'Retry-After' headers, Polls return a 200 with a response body after success
   * @param options The options parameters.
   */
  async post202Retry200(
    options?: LRORetrysPost202Retry200OptionalParams
  ): Promise<LROPoller<LRORetrysPost202Retry200Response>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = { options: operationOptions };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        LRORetrysPost202Retry200Response
      >;
    const initialOperationResult = await sendOperation(
      args,
      post202Retry200OperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: post202Retry200OperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Long running post request, service returns a 500, then a 202 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation
   * header for operation status
   * @param options The options parameters.
   */
  async postAsyncRelativeRetrySucceeded(
    options?: LRORetrysPostAsyncRelativeRetrySucceededOptionalParams
  ): Promise<LROPoller<LRORetrysPostAsyncRelativeRetrySucceededResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = { options: operationOptions };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        LRORetrysPostAsyncRelativeRetrySucceededResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      postAsyncRelativeRetrySucceededOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: postAsyncRelativeRetrySucceededOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const put201CreatingSucceeded200OperationSpec: coreHttp.OperationSpec = {
  path: "/lro/retryerror/put/201/creating/succeeded/200",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    201: {
      bodyMapper: Mappers.Product
    },
    202: {
      bodyMapper: Mappers.Product
    },
    204: {
      bodyMapper: Mappers.Product
    }
  },
  requestBody: Parameters.product,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const putAsyncRelativeRetrySucceededOperationSpec: coreHttp.OperationSpec = {
  path: "/lro/retryerror/putasync/retry/succeeded",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.LRORetrysPutAsyncRelativeRetrySucceededHeaders
    },
    201: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.LRORetrysPutAsyncRelativeRetrySucceededHeaders
    },
    202: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.LRORetrysPutAsyncRelativeRetrySucceededHeaders
    },
    204: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.LRORetrysPutAsyncRelativeRetrySucceededHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.product,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteProvisioning202Accepted200SucceededOperationSpec: coreHttp.OperationSpec = {
  path: "/lro/retryerror/delete/provisioning/202/accepted/200/succeeded",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    201: {
      bodyMapper: Mappers.Product
    },
    202: {
      bodyMapper: Mappers.Product
    },
    204: {
      bodyMapper: Mappers.Product
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const delete202Retry200OperationSpec: coreHttp.OperationSpec = {
  path: "/lro/retryerror/delete/202/retry/200",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.LRORetrysDelete202Retry200Headers
    },
    201: {
      headersMapper: Mappers.LRORetrysDelete202Retry200Headers
    },
    202: {
      headersMapper: Mappers.LRORetrysDelete202Retry200Headers
    },
    204: {
      headersMapper: Mappers.LRORetrysDelete202Retry200Headers
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const deleteAsyncRelativeRetrySucceededOperationSpec: coreHttp.OperationSpec = {
  path: "/lro/retryerror/deleteasync/retry/succeeded",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.LRORetrysDeleteAsyncRelativeRetrySucceededHeaders
    },
    201: {
      headersMapper: Mappers.LRORetrysDeleteAsyncRelativeRetrySucceededHeaders
    },
    202: {
      headersMapper: Mappers.LRORetrysDeleteAsyncRelativeRetrySucceededHeaders
    },
    204: {
      headersMapper: Mappers.LRORetrysDeleteAsyncRelativeRetrySucceededHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const post202Retry200OperationSpec: coreHttp.OperationSpec = {
  path: "/lro/retryerror/post/202/retry/200",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.LRORetrysPost202Retry200Headers
    },
    201: {
      headersMapper: Mappers.LRORetrysPost202Retry200Headers
    },
    202: {
      headersMapper: Mappers.LRORetrysPost202Retry200Headers
    },
    204: {
      headersMapper: Mappers.LRORetrysPost202Retry200Headers
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.product,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const postAsyncRelativeRetrySucceededOperationSpec: coreHttp.OperationSpec = {
  path: "/lro/retryerror/postasync/retry/succeeded",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.LRORetrysPostAsyncRelativeRetrySucceededHeaders
    },
    201: {
      headersMapper: Mappers.LRORetrysPostAsyncRelativeRetrySucceededHeaders
    },
    202: {
      headersMapper: Mappers.LRORetrysPostAsyncRelativeRetrySucceededHeaders
    },
    204: {
      headersMapper: Mappers.LRORetrysPostAsyncRelativeRetrySucceededHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.product,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
