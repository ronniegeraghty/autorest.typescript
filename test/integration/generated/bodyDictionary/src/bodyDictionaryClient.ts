/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { DictionaryImpl } from "./operations";
import { Dictionary } from "./operationsInterfaces";
import { BodyDictionaryClientContext } from "./bodyDictionaryClientContext";
import { BodyDictionaryClientOptionalParams } from "./models";

export class BodyDictionaryClient extends BodyDictionaryClientContext {
  /**
   * Initializes a new instance of the BodyDictionaryClient class.
   * @param options The parameter options
   */
  constructor(options?: BodyDictionaryClientOptionalParams) {
    super(options);
    this.dictionary = new DictionaryImpl(this);
  }

  dictionary: Dictionary;
}