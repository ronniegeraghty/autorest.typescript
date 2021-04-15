/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import {
  FileServicesListResponse,
  FileServiceProperties,
  FileServicesSetServicePropertiesResponse,
  FileServicesGetServicePropertiesResponse
} from "../models";

/** Interface representing a FileServices. */
export interface FileServices {
  /**
   * List all file services in storage accounts
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    options?: coreHttp.OperationOptions
  ): Promise<FileServicesListResponse>;
  /**
   * Sets the properties of file services in storage accounts, including CORS (Cross-Origin Resource
   * Sharing) rules.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param parameters The properties of file services in storage accounts, including CORS (Cross-Origin
   *                   Resource Sharing) rules.
   * @param options The options parameters.
   */
  setServiceProperties(
    resourceGroupName: string,
    accountName: string,
    parameters: FileServiceProperties,
    options?: coreHttp.OperationOptions
  ): Promise<FileServicesSetServicePropertiesResponse>;
  /**
   * Gets the properties of file services in storage accounts, including CORS (Cross-Origin Resource
   * Sharing) rules.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  getServiceProperties(
    resourceGroupName: string,
    accountName: string,
    options?: coreHttp.OperationOptions
  ): Promise<FileServicesGetServicePropertiesResponse>;
}