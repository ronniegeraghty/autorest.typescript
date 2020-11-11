/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Group } from "./operations";
import { SubscriptionIdApiVersionClientContext } from "./subscriptionIdApiVersionClientContext";
import { SubscriptionIdApiVersionClientOptionalParams } from "./models";

export class SubscriptionIdApiVersionClient extends SubscriptionIdApiVersionClientContext {
  /**
   * Initializes a new instance of the SubscriptionIdApiVersionClient class.
   * @param subscriptionId Subscription Id.
   * @param options The parameter options
   */
  constructor(
    subscriptionId: string,
    options?: SubscriptionIdApiVersionClientOptionalParams
  ) {
    super(subscriptionId, options);
    this.group = new Group(this);
  }

  group: Group;
}