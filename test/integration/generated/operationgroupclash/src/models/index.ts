import * as coreClient from "@azure/core-client";

export interface Product {
  integer?: number;
  string?: string;
}

export interface Dummy {
  integer?: number;
  string?: string;
}

/** Known values of {@link Enum0} that the service accepts. */
export const enum KnownEnum0 {
  One = "one",
  Two = "two"
}

/**
 * Defines values for Enum0. \
 * {@link KnownEnum0} can be used interchangeably with Enum0,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **one** \
 * **two**
 */
export type Enum0 = string;

/** Optional parameters. */
export interface ProductOperationsApiV1ValueGetOptionalParams
  extends coreClient.OperationOptions {
  /** Specify page number or range of page numbers to process, e.g: 1, 5, 7, 9-10 */
  pageRange?: string[];
}

/** Contains response data for the apiV1ValueGet operation. */
export type ProductOperationsApiV1ValueGetResponse = {
  /** The parsed response body. */
  body: string[];
};

/** Optional parameters. */
export interface OperationGroupClashClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}