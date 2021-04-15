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
import { LROOperationState } from "../lro";
import { PollerLike } from "@azure/core-lro";
import {
  ManagedServerSecurityAlertPolicy,
  SecurityAlertPolicyNameAutoGenerated,
  ManagedServerSecurityAlertPoliciesGetResponse,
  ManagedServerSecurityAlertPoliciesCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedServerSecurityAlertPolicies. */
export interface ManagedServerSecurityAlertPolicies {
  /**
   * Get the managed server's threat detection policies.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  listByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<ManagedServerSecurityAlertPolicy>;
  /**
   * Get a managed server's threat detection policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    securityAlertPolicyName: SecurityAlertPolicyNameAutoGenerated,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedServerSecurityAlertPoliciesGetResponse>;
  /**
   * Creates or updates a threat detection policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param parameters The managed server security alert policy.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    securityAlertPolicyName: SecurityAlertPolicyNameAutoGenerated,
    parameters: ManagedServerSecurityAlertPolicy,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      LROOperationState<
        ManagedServerSecurityAlertPoliciesCreateOrUpdateResponse
      >,
      ManagedServerSecurityAlertPoliciesCreateOrUpdateResponse
    >
  >;
}