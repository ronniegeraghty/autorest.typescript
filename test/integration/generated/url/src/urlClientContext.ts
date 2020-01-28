/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "./models";

const packageName = "url";
const packageVersion = "1.0.0-preview1";

export class UrlClientContext extends coreHttp.ServiceClient {
  $host: string;
  globalStringPath: string;
  globalStringQuery?: string;

  /**
   * Initializes a new instance of the UrlClientContext class.
   *
   * @param options The parameter options
   */
  constructor(globalStringPath: string, options?: any) {
    if (globalStringPath === undefined) {
      throw new Error("'globalStringPath' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.requestContentType = "application/json; charset=utf-8";

    // Parameter assignments
    this.globalStringPath = globalStringPath;

    // Assigning values to Constant parameters
    this.$host = "http://localhost:3000";

    this.baseUri = options.baseUri || this.baseUri || "{$host}";

    // Replacing parameter defaults with user-provided parameters.
    if (options.$host !== null && options.$host !== undefined) {
      this.$host = options.$host;
    }
    if (
      options.globalStringQuery !== null &&
      options.globalStringQuery !== undefined
    ) {
      this.globalStringQuery = options.globalStringQuery;
    }
  }
}
