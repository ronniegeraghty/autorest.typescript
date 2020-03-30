/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as operations from "./operations";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import { BodyBooleanQuirksClientContext } from "./bodyBooleanQuirksClientContext";

class BodyBooleanQuirksClient extends BodyBooleanQuirksClientContext {
  /**
   * Initializes a new instance of the BodyBooleanQuirksClient class.
   * @param options The parameter options
   */
  constructor(options?: Models.BodyBooleanQuirksClientOptionalParams) {
    super(options);
    this.bool = new operations.Bool(this);
  }

  bool: operations.Bool;
}

// Operation Specifications

export {
  BodyBooleanQuirksClient,
  BodyBooleanQuirksClientContext,
  Models as BodyBooleanQuirksModels,
  Mappers as BodyBooleanQuirksMappers
};
export * from "./operations";