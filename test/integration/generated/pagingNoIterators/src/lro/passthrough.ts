/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FullOperationResponse } from "@azure/core-client";
import { LROState } from "./stateMachine";

export function processPassthroughOperationResult<TResult>(
  rawResponse: FullOperationResponse,
  flatResponse: TResult
): LROState<TResult> {
  return {
    rawResponse,
    flatResponse,
    done: true
  };
}