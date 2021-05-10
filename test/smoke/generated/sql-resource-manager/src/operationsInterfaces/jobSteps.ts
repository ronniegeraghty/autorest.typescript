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
  JobStep,
  JobStepsListByVersionNextOptionalParams,
  JobStepsListByVersionOptionalParams,
  JobStepsListByJobNextOptionalParams,
  JobStepsListByJobOptionalParams,
  JobStepsGetByVersionOptionalParams,
  JobStepsGetByVersionResponse,
  JobStepsGetOptionalParams,
  JobStepsGetResponse,
  JobStepsCreateOrUpdateOptionalParams,
  JobStepsCreateOrUpdateResponse,
  JobStepsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a JobSteps. */
export interface JobSteps {
  /**
   * Gets all job steps in the specified job version.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobVersion The version of the job to get.
   * @param options The options parameters.
   */
  listByVersion(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobVersion: number,
    options?: JobStepsListByVersionOptionalParams
  ): PagedAsyncIterableIterator<JobStep>;
  /**
   * Gets all job steps for a job's current version.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param options The options parameters.
   */
  listByJob(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    options?: JobStepsListByJobOptionalParams
  ): PagedAsyncIterableIterator<JobStep>;
  /**
   * Gets the specified version of a job step.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job.
   * @param jobVersion The version of the job to get.
   * @param stepName The name of the job step.
   * @param options The options parameters.
   */
  getByVersion(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobVersion: number,
    stepName: string,
    options?: JobStepsGetByVersionOptionalParams
  ): Promise<JobStepsGetByVersionResponse>;
  /**
   * Gets a job step in a job's current version.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job.
   * @param stepName The name of the job step.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    stepName: string,
    options?: JobStepsGetOptionalParams
  ): Promise<JobStepsGetResponse>;
  /**
   * Creates or updates a job step. This will implicitly create a new job version.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job.
   * @param stepName The name of the job step.
   * @param parameters The requested state of the job step.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    stepName: string,
    parameters: JobStep,
    options?: JobStepsCreateOrUpdateOptionalParams
  ): Promise<JobStepsCreateOrUpdateResponse>;
  /**
   * Deletes a job step. This will implicitly create a new job version.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job.
   * @param stepName The name of the job step to delete.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    stepName: string,
    options?: JobStepsDeleteOptionalParams
  ): Promise<coreHttp.RestResponse>;
}