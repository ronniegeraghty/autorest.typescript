/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  Route,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates a route in the specified route table.
 *
 * @summary Creates or updates a route in the specified route table.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/RouteTableRouteCreate.json
 */
async function createRoute() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const routeTableName = "testrt";
  const routeName = "route1";
  const routeParameters: Route = {
    addressPrefix: "10.0.3.0/24",
    nextHopType: "VirtualNetworkGateway"
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.routes.beginCreateOrUpdateAndWait(
    resourceGroupName,
    routeTableName,
    routeName,
    routeParameters
  );
  console.log(result);
}

createRoute().catch(console.error);