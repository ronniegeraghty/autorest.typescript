/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  VpnConnection,
  VpnConnectionsListByVpnGatewayNextOptionalParams,
  VpnConnectionsListByVpnGatewayOptionalParams,
  VpnConnectionsGetOptionalParams,
  VpnConnectionsGetResponse,
  VpnConnectionsCreateOrUpdateOptionalParams,
  VpnConnectionsCreateOrUpdateResponse,
  VpnConnectionsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VpnConnections. */
export interface VpnConnections {
  /**
   * Retrieves all vpn connections for a particular virtual wan vpn gateway.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param options The options parameters.
   */
  listByVpnGateway(
    resourceGroupName: string,
    gatewayName: string,
    options?: VpnConnectionsListByVpnGatewayOptionalParams
  ): PagedAsyncIterableIterator<VpnConnection>;
  /**
   * Retrieves the details of a vpn connection.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param connectionName The name of the vpn connection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    gatewayName: string,
    connectionName: string,
    options?: VpnConnectionsGetOptionalParams
  ): Promise<VpnConnectionsGetResponse>;
  /**
   * Creates a vpn connection to a scalable vpn gateway if it doesn't exist else updates the existing
   * connection.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param connectionName The name of the connection.
   * @param vpnConnectionParameters Parameters supplied to create or Update a VPN Connection.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    gatewayName: string,
    connectionName: string,
    vpnConnectionParameters: VpnConnection,
    options?: VpnConnectionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VpnConnectionsCreateOrUpdateResponse>,
      VpnConnectionsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates a vpn connection to a scalable vpn gateway if it doesn't exist else updates the existing
   * connection.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param connectionName The name of the connection.
   * @param vpnConnectionParameters Parameters supplied to create or Update a VPN Connection.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    gatewayName: string,
    connectionName: string,
    vpnConnectionParameters: VpnConnection,
    options?: VpnConnectionsCreateOrUpdateOptionalParams
  ): Promise<VpnConnectionsCreateOrUpdateResponse>;
  /**
   * Deletes a vpn connection.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param connectionName The name of the connection.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    gatewayName: string,
    connectionName: string,
    options?: VpnConnectionsDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Deletes a vpn connection.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param connectionName The name of the connection.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    gatewayName: string,
    connectionName: string,
    options?: VpnConnectionsDeleteOptionalParams
  ): Promise<coreHttp.RestResponse>;
}