/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ParameterGroupingPostRequiredParameters,
  ParameterGroupingPostRequiredOptionalParams,
  ParameterGroupingPostOptionalOptionalParams,
  ParameterGroupingPostMultiParamGroupsOptionalParams,
  ParameterGroupingPostSharedParameterGroupObjectOptionalParams
} from "../models";

/** Interface representing a ParameterGrouping. */
export interface ParameterGrouping {
  /**
   * Post a bunch of required parameters grouped
   * @param parameterGroupingPostRequiredParameters Parameter group
   * @param options The options parameters.
   */
  postRequired(
    parameterGroupingPostRequiredParameters: ParameterGroupingPostRequiredParameters,
    options?: ParameterGroupingPostRequiredOptionalParams
  ): Promise<void>;
  /**
   * Post a bunch of optional parameters grouped
   * @param options The options parameters.
   */
  postOptional(
    options?: ParameterGroupingPostOptionalOptionalParams
  ): Promise<void>;
  /**
   * Post parameters from multiple different parameter groups
   * @param options The options parameters.
   */
  postMultiParamGroups(
    options?: ParameterGroupingPostMultiParamGroupsOptionalParams
  ): Promise<void>;
  /**
   * Post parameters with a shared parameter group object
   * @param options The options parameters.
   */
  postSharedParameterGroupObject(
    options?: ParameterGroupingPostSharedParameterGroupObjectOptionalParams
  ): Promise<void>;
}
