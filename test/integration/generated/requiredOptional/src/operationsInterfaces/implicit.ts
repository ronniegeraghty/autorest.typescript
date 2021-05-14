/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import {
  ImplicitGetRequiredPathOptionalParams,
  ImplicitPutOptionalQueryOptionalParams,
  ImplicitPutOptionalHeaderOptionalParams,
  ImplicitPutOptionalBodyOptionalParams,
  ImplicitPutOptionalBinaryBodyOptionalParams,
  ImplicitGetRequiredGlobalPathOptionalParams,
  ImplicitGetRequiredGlobalQueryOptionalParams,
  ImplicitGetOptionalGlobalQueryOptionalParams
} from "../models";

/** Interface representing a Implicit. */
export interface Implicit {
  /**
   * Test implicitly required path parameter
   * @param pathParameter
   * @param options The options parameters.
   */
  getRequiredPath(
    pathParameter: string,
    options?: ImplicitGetRequiredPathOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test implicitly optional query parameter
   * @param options The options parameters.
   */
  putOptionalQuery(
    options?: ImplicitPutOptionalQueryOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test implicitly optional header parameter
   * @param options The options parameters.
   */
  putOptionalHeader(
    options?: ImplicitPutOptionalHeaderOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test implicitly optional body parameter
   * @param options The options parameters.
   */
  putOptionalBody(
    options?: ImplicitPutOptionalBodyOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test implicitly optional body parameter
   * @param options The options parameters.
   */
  putOptionalBinaryBody(
    options?: ImplicitPutOptionalBinaryBodyOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test implicitly required path parameter
   * @param options The options parameters.
   */
  getRequiredGlobalPath(
    options?: ImplicitGetRequiredGlobalPathOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test implicitly required query parameter
   * @param options The options parameters.
   */
  getRequiredGlobalQuery(
    options?: ImplicitGetRequiredGlobalQueryOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test implicitly optional query parameter
   * @param options The options parameters.
   */
  getOptionalGlobalQuery(
    options?: ImplicitGetOptionalGlobalQueryOptionalParams
  ): Promise<coreHttp.RestResponse>;
}