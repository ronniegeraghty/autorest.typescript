/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { CustomUrlClientContext } from "./customUrlClientContext";

class CustomUrlClient extends CustomUrlClientContext {
  paths: operations.Paths;

  /**
   * Initializes a new instance of the CustomUrlClient class.
   * @param options The parameter options
   */
  constructor(options?: any) {
    super(options);
    this.paths = new operations.Paths(this);
  }
}

// Operation Specifications

export {
  CustomUrlClient,
  CustomUrlClientContext,
  Models as CustomUrlModels,
  Mappers as CustomUrlMappers
};
export * from "./operations";
