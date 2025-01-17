import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PipelineResource,
  PipelinesListByFactoryOptionalParams,
  PipelinesCreateOrUpdateOptionalParams,
  PipelinesCreateOrUpdateResponse,
  PipelinesGetOptionalParams,
  PipelinesGetResponse,
  PipelinesDeleteOptionalParams,
  PipelinesCreateRunOptionalParams,
  PipelinesCreateRunResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Pipelines. */
export interface Pipelines {
  /**
   * Lists pipelines.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: PipelinesListByFactoryOptionalParams
  ): PagedAsyncIterableIterator<PipelineResource>;
  /**
   * Creates or updates a pipeline.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param pipelineName The pipeline name.
   * @param pipeline Pipeline resource definition.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    factoryName: string,
    pipelineName: string,
    pipeline: PipelineResource,
    options?: PipelinesCreateOrUpdateOptionalParams
  ): Promise<PipelinesCreateOrUpdateResponse>;
  /**
   * Gets a pipeline.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param pipelineName The pipeline name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    pipelineName: string,
    options?: PipelinesGetOptionalParams
  ): Promise<PipelinesGetResponse>;
  /**
   * Deletes a pipeline.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param pipelineName The pipeline name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    factoryName: string,
    pipelineName: string,
    options?: PipelinesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Creates a run of a pipeline.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param pipelineName The pipeline name.
   * @param options The options parameters.
   */
  createRun(
    resourceGroupName: string,
    factoryName: string,
    pipelineName: string,
    options?: PipelinesCreateRunOptionalParams
  ): Promise<PipelinesCreateRunResponse>;
}
