/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PathsGetEmptyOptionalParams } from "../models";

/** Interface representing a Paths. */
export interface Paths {
  /**
   * Get a 200 to test a valid base uri
   * @param accountName Account Name
   * @param options The options parameters.
   */
  getEmpty(
    accountName: string,
    options?: PathsGetEmptyOptionalParams
  ): Promise<void>;
}
