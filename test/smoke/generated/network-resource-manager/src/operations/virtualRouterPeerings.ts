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
import { NetworkManagementClient } from "../networkManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  VirtualRouterPeeringsGetResponse,
  VirtualRouterPeering,
  VirtualRouterPeeringsCreateOrUpdateResponse,
  VirtualRouterPeeringsListResponse,
  VirtualRouterPeeringsListNextResponse
} from "../models";

/**
 * Class representing a VirtualRouterPeerings.
 */
export class VirtualRouterPeerings {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class VirtualRouterPeerings class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Deletes the specified peering from a Virtual Router.
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param peeringName The name of the peering.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    virtualRouterName: string,
    peeringName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      virtualRouterName,
      peeringName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      deleteOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: deleteOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Gets the specified Virtual Router Peering.
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param peeringName The name of the Virtual Router Peering.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    virtualRouterName: string,
    peeringName: string,
    options?: coreHttp.OperationOptions
  ): Promise<VirtualRouterPeeringsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualRouterName,
        peeringName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<VirtualRouterPeeringsGetResponse>;
  }

  /**
   * Creates or updates the specified Virtual Router Peering.
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param peeringName The name of the Virtual Router Peering.
   * @param parameters Parameters supplied to the create or update Virtual Router Peering operation.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    virtualRouterName: string,
    peeringName: string,
    parameters: VirtualRouterPeering,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<VirtualRouterPeeringsCreateOrUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "azure-async-operation"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      virtualRouterName,
      peeringName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        VirtualRouterPeeringsCreateOrUpdateResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      createOrUpdateOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: createOrUpdateOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "azure-async-operation"
    });
  }

  /**
   * Lists all Virtual Router Peerings in a Virtual Router resource.
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    virtualRouterName: string,
    options?: coreHttp.OperationOptions
  ): Promise<VirtualRouterPeeringsListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, virtualRouterName, options: operationOptions },
      listOperationSpec
    ) as Promise<VirtualRouterPeeringsListResponse>;
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    resourceGroupName: string,
    virtualRouterName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<VirtualRouterPeeringsListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualRouterName,
        nextLink,
        options: operationOptions
      },
      listNextOperationSpec
    ) as Promise<VirtualRouterPeeringsListNextResponse>;
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

const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualRouters/{virtualRouterName}/peerings/{peeringName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.peeringName,
    Parameters.virtualRouterName
  ],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualRouters/{virtualRouterName}/peerings/{peeringName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualRouterPeering
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.virtualRouterName,
    Parameters.peeringName1
  ],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualRouters/{virtualRouterName}/peerings/{peeringName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualRouterPeering
    },
    201: {
      bodyMapper: Mappers.VirtualRouterPeering
    },
    202: {
      bodyMapper: Mappers.VirtualRouterPeering
    },
    204: {
      bodyMapper: Mappers.VirtualRouterPeering
    }
  },
  requestBody: Parameters.parameters87,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.virtualRouterName,
    Parameters.peeringName1
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualRouters/{virtualRouterName}/peerings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualRouterPeeringListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.virtualRouterName
  ],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualRouterPeeringListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.virtualRouterName
  ],
  serializer
};
