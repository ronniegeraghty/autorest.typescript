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
import {
  ManagedDatabaseSecurityAlertPolicy,
  ManagedDatabaseSecurityAlertPoliciesListByDatabaseNextOptionalParams,
  ManagedDatabaseSecurityAlertPoliciesListByDatabaseOptionalParams,
  SecurityAlertPolicyName,
  ManagedDatabaseSecurityAlertPoliciesGetOptionalParams,
  ManagedDatabaseSecurityAlertPoliciesGetResponse,
  ManagedDatabaseSecurityAlertPoliciesCreateOrUpdateOptionalParams,
  ManagedDatabaseSecurityAlertPoliciesCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedDatabaseSecurityAlertPolicies. */
export interface ManagedDatabaseSecurityAlertPolicies {
  /**
   * Gets a list of managed database's security alert policies.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security alert policies are
   *                     defined.
   * @param options The options parameters.
   */
  listByDatabase(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedDatabaseSecurityAlertPoliciesListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<ManagedDatabaseSecurityAlertPolicy>;
  /**
   * Gets a managed database's security alert policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security alert policy is defined.
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    securityAlertPolicyName: SecurityAlertPolicyName,
    options?: ManagedDatabaseSecurityAlertPoliciesGetOptionalParams
  ): Promise<ManagedDatabaseSecurityAlertPoliciesGetResponse>;
  /**
   * Creates or updates a database's security alert policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security alert policy is defined.
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param parameters The database security alert policy.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    securityAlertPolicyName: SecurityAlertPolicyName,
    parameters: ManagedDatabaseSecurityAlertPolicy,
    options?: ManagedDatabaseSecurityAlertPoliciesCreateOrUpdateOptionalParams
  ): Promise<ManagedDatabaseSecurityAlertPoliciesCreateOrUpdateResponse>;
}