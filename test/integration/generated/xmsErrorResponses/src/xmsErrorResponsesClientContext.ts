/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { XmsErrorResponsesClientOptionalParams } from "./models";

const packageName = "xms-error-responses";
const packageVersion = "1.0.0-preview1";

export class XmsErrorResponsesClientContext extends coreHttp.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the XmsErrorResponsesClientContext class.
   * @param options The parameter options
   */
  constructor(options?: XmsErrorResponsesClientOptionalParams) {
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
    this.baseUri = options.endpoint || "https://localhost";

    // Assigning values to Constant parameters
    this.$host = options.$host || "http://localhost";
  }
}
