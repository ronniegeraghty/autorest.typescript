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
import { SqlManagementClient } from "../sqlManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  SyncGroupsListSyncDatabaseIdsResponse,
  SyncGroupsListHubSchemasResponse,
  Enum15,
  SyncGroupsListLogsOptionalParams,
  SyncGroupsListLogsResponse,
  SyncGroupsGetResponse,
  SyncGroup,
  SyncGroupsCreateOrUpdateResponse,
  SyncGroupsUpdateResponse,
  SyncGroupsListByDatabaseResponse,
  SyncGroupsListSyncDatabaseIdsNextResponse,
  SyncGroupsListHubSchemasNextResponse,
  SyncGroupsListLogsNextOptionalParams,
  SyncGroupsListLogsNextResponse,
  SyncGroupsListByDatabaseNextResponse
} from "../models";

/**
 * Class representing a SyncGroups.
 */
export class SyncGroups {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class SyncGroups class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a collection of sync database ids.
   * @param locationName The name of the region where the resource is located.
   * @param options The options parameters.
   */
  listSyncDatabaseIds(
    locationName: string,
    options?: coreHttp.OperationOptions
  ): Promise<SyncGroupsListSyncDatabaseIdsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { locationName, options: operationOptions },
      listSyncDatabaseIdsOperationSpec
    ) as Promise<SyncGroupsListSyncDatabaseIdsResponse>;
  }

  /**
   * Refreshes a hub database schema.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  async refreshHubSchema(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
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
      refreshHubSchemaOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: refreshHubSchemaOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Gets a collection of hub database schemas.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  listHubSchemas(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<SyncGroupsListHubSchemasResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        syncGroupName,
        options: operationOptions
      },
      listHubSchemasOperationSpec
    ) as Promise<SyncGroupsListHubSchemasResponse>;
  }

  /**
   * Gets a collection of sync group logs.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param startTime Get logs generated after this time.
   * @param endTime Get logs generated before this time.
   * @param typeParam The types of logs to retrieve.
   * @param options The options parameters.
   */
  listLogs(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    startTime: string,
    endTime: string,
    typeParam: Enum15,
    options?: SyncGroupsListLogsOptionalParams
  ): Promise<SyncGroupsListLogsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        syncGroupName,
        startTime,
        endTime,
        typeParam,
        options: operationOptions
      },
      listLogsOperationSpec
    ) as Promise<SyncGroupsListLogsResponse>;
  }

  /**
   * Cancels a sync group synchronization.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  cancelSync(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        syncGroupName,
        options: operationOptions
      },
      cancelSyncOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Triggers a sync group synchronization.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  triggerSync(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        syncGroupName,
        options: operationOptions
      },
      triggerSyncOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Gets a sync group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<SyncGroupsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        syncGroupName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<SyncGroupsGetResponse>;
  }

  /**
   * Creates or updates a sync group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param parameters The requested sync group resource state.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    parameters: SyncGroup,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<SyncGroupsCreateOrUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        SyncGroupsCreateOrUpdateResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      createOrUpdateOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: createOrUpdateOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Deletes a sync group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
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
      sendOperation
    });
  }

  /**
   * Updates a sync group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param parameters The requested sync group resource state.
   * @param options The options parameters.
   */
  async update(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    parameters: SyncGroup,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<SyncGroupsUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        SyncGroupsUpdateResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      updateOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: updateOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Lists sync groups under a hub database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param options The options parameters.
   */
  listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: coreHttp.OperationOptions
  ): Promise<SyncGroupsListByDatabaseResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        options: operationOptions
      },
      listByDatabaseOperationSpec
    ) as Promise<SyncGroupsListByDatabaseResponse>;
  }

  /**
   * ListSyncDatabaseIdsNext
   * @param locationName The name of the region where the resource is located.
   * @param nextLink The nextLink from the previous successful call to the ListSyncDatabaseIds method.
   * @param options The options parameters.
   */
  listSyncDatabaseIdsNext(
    locationName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<SyncGroupsListSyncDatabaseIdsNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { locationName, nextLink, options: operationOptions },
      listSyncDatabaseIdsNextOperationSpec
    ) as Promise<SyncGroupsListSyncDatabaseIdsNextResponse>;
  }

  /**
   * ListHubSchemasNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param nextLink The nextLink from the previous successful call to the ListHubSchemas method.
   * @param options The options parameters.
   */
  listHubSchemasNext(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<SyncGroupsListHubSchemasNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        syncGroupName,
        nextLink,
        options: operationOptions
      },
      listHubSchemasNextOperationSpec
    ) as Promise<SyncGroupsListHubSchemasNextResponse>;
  }

  /**
   * ListLogsNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param startTime Get logs generated after this time.
   * @param endTime Get logs generated before this time.
   * @param typeParam The types of logs to retrieve.
   * @param nextLink The nextLink from the previous successful call to the ListLogs method.
   * @param options The options parameters.
   */
  listLogsNext(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    startTime: string,
    endTime: string,
    typeParam: Enum15,
    nextLink: string,
    options?: SyncGroupsListLogsNextOptionalParams
  ): Promise<SyncGroupsListLogsNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        syncGroupName,
        startTime,
        endTime,
        typeParam,
        nextLink,
        options: operationOptions
      },
      listLogsNextOperationSpec
    ) as Promise<SyncGroupsListLogsNextResponse>;
  }

  /**
   * ListByDatabaseNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param nextLink The nextLink from the previous successful call to the ListByDatabase method.
   * @param options The options parameters.
   */
  listByDatabaseNext(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<SyncGroupsListByDatabaseNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        nextLink,
        options: operationOptions
      },
      listByDatabaseNextOperationSpec
    ) as Promise<SyncGroupsListByDatabaseNextResponse>;
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

const listSyncDatabaseIdsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/syncDatabaseIds",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncDatabaseIdListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName
  ],
  serializer
};
const refreshHubSchemaOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/refreshHubSchema",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName17,
    Parameters.syncGroupName
  ],
  serializer
};
const listHubSchemasOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/hubSchemas",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncFullSchemaPropertiesListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName17,
    Parameters.syncGroupName
  ],
  serializer
};
const listLogsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/logs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncGroupLogListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion3,
    Parameters.startTime,
    Parameters.endTime,
    Parameters.typeParam,
    Parameters.continuationToken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName17,
    Parameters.syncGroupName
  ],
  serializer
};
const cancelSyncOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/cancelSync",
  httpMethod: "POST",
  responses: { 200: {}, default: {} },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName17,
    Parameters.syncGroupName
  ],
  serializer
};
const triggerSyncOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/triggerSync",
  httpMethod: "POST",
  responses: { 200: {}, default: {} },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName17,
    Parameters.syncGroupName
  ],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncGroup
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName17,
    Parameters.syncGroupName
  ],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SyncGroup
    },
    201: {
      bodyMapper: Mappers.SyncGroup
    },
    202: {
      bodyMapper: Mappers.SyncGroup
    },
    204: {
      bodyMapper: Mappers.SyncGroup
    }
  },
  requestBody: Parameters.parameters23,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName17,
    Parameters.syncGroupName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName17,
    Parameters.syncGroupName
  ],
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SyncGroup
    },
    201: {
      bodyMapper: Mappers.SyncGroup
    },
    202: {
      bodyMapper: Mappers.SyncGroup
    },
    204: {
      bodyMapper: Mappers.SyncGroup
    }
  },
  requestBody: Parameters.parameters23,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName17,
    Parameters.syncGroupName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByDatabaseOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncGroupListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName17
  ],
  serializer
};
const listSyncDatabaseIdsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncDatabaseIdListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName,
    Parameters.nextLink4
  ],
  serializer
};
const listHubSchemasNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncFullSchemaPropertiesListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName17,
    Parameters.syncGroupName,
    Parameters.nextLink5
  ],
  serializer
};
const listLogsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncGroupLogListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion3,
    Parameters.startTime,
    Parameters.endTime,
    Parameters.typeParam,
    Parameters.continuationToken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName17,
    Parameters.syncGroupName,
    Parameters.nextLink6
  ],
  serializer
};
const listByDatabaseNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncGroupListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName17,
    Parameters.nextLink7
  ],
  serializer
};
