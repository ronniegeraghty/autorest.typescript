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
  ManagedInstanceAdministrator,
  ManagedInstanceAdministratorsListByInstanceNextOptionalParams,
  ManagedInstanceAdministratorsListByInstanceOptionalParams,
  ManagedInstanceAdministratorsGetOptionalParams,
  ManagedInstanceAdministratorsGetResponse,
  ManagedInstanceAdministratorsCreateOrUpdateOptionalParams,
  ManagedInstanceAdministratorsCreateOrUpdateResponse,
  ManagedInstanceAdministratorsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedInstanceAdministrators. */
export interface ManagedInstanceAdministrators {
  /**
   * Gets a list of managed instance administrators.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  listByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstanceAdministratorsListByInstanceOptionalParams
  ): PagedAsyncIterableIterator<ManagedInstanceAdministrator>;
  /**
   * Gets a managed instance administrator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstanceAdministratorsGetOptionalParams
  ): Promise<ManagedInstanceAdministratorsGetResponse>;
  /**
   * Creates or updates a managed instance administrator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param parameters The requested administrator parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    parameters: ManagedInstanceAdministrator,
    options?: ManagedInstanceAdministratorsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ManagedInstanceAdministratorsCreateOrUpdateResponse>,
      ManagedInstanceAdministratorsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a managed instance administrator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param parameters The requested administrator parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    parameters: ManagedInstanceAdministrator,
    options?: ManagedInstanceAdministratorsCreateOrUpdateOptionalParams
  ): Promise<ManagedInstanceAdministratorsCreateOrUpdateResponse>;
  /**
   * Deletes a managed instance administrator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstanceAdministratorsDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Deletes a managed instance administrator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstanceAdministratorsDeleteOptionalParams
  ): Promise<coreHttp.RestResponse>;
}