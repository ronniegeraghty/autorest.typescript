/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { NumberOperationsImpl } from "./operations";
import { NumberOperations } from "./operationsInterfaces";
import { BodyNumberClientContext } from "./bodyNumberClientContext";
import { BodyNumberClientOptionalParams } from "./models";

export class BodyNumberClient extends BodyNumberClientContext {
  /**
   * Initializes a new instance of the BodyNumberClient class.
   * @param options The parameter options
   */
  constructor(options?: BodyNumberClientOptionalParams) {
    super(options);
    this.number = new NumberOperationsImpl(this);
  }

  number: NumberOperations;
}