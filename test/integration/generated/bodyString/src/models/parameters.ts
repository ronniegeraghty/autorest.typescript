/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";

export const $host: coreHttp.OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    type: { name: "String" },
    serializedName: "$host",
    required: true
  },
  skipEncoding: true
};

export const stringBody: coreHttp.OperationParameter = {
  parameterPath: ["options", "stringBody"],
  mapper: {
    type: { name: "String" },
    serializedName: "stringBody",
    isConstant: true
  }
};

export const stringBody1: coreHttp.OperationParameter = {
  parameterPath: "stringBody",
  mapper: {
    type: { name: "String" },
    serializedName: "stringBody",
    isConstant: true,
    defaultValue: ""
  }
};

export const stringBody2: coreHttp.OperationParameter = {
  parameterPath: "stringBody",
  mapper: {
    type: { name: "String" },
    serializedName: "stringBody",
    isConstant: true,
    defaultValue:
      "啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€"
  }
};

export const stringBody3: coreHttp.OperationParameter = {
  parameterPath: "stringBody",
  mapper: {
    type: { name: "String" },
    serializedName: "stringBody",
    isConstant: true,
    defaultValue:
      "    Now is the time for all good men to come to the aid of their country    "
  }
};

export const stringBody4: coreHttp.OperationParameter = {
  parameterPath: "stringBody",
  mapper: {
    type: { name: "Base64Url" },
    serializedName: "stringBody",
    required: true
  }
};

export const stringBody5: coreHttp.OperationParameter = {
  parameterPath: "stringBody",
  mapper: {
    type: {
      name: "Enum",
      allowedValues: ["red color", "green-color", "blue_color"]
    },
    serializedName: "stringBody",
    required: true
  }
};

export const enumStringBody: coreHttp.OperationParameter = {
  parameterPath: "enumStringBody",
  mapper: {
    type: {
      name: "Enum",
      allowedValues: ["red color", "green-color", "blue_color"]
    },
    serializedName: "enumStringBody",
    required: true
  }
};

export const enumStringBody1: coreHttp.OperationParameter = {
  parameterPath: "enumStringBody",
  mapper: Mappers.RefColorConstant
};
