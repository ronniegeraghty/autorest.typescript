/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const SourcePath: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SourcePath",
    modelProperties: {
      source: {
        constraints: {
          MaxLength: 2048
        },
        serializedName: "source",
        type: {
          name: "String"
        }
      }
    }
  }
};
