/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  HttpFailureImpl,
  HttpSuccessImpl,
  HttpRedirectsImpl,
  HttpClientFailureImpl,
  HttpServerFailureImpl,
  HttpRetryImpl,
  MultipleResponsesImpl
} from "./operations";
import {
  HttpFailure,
  HttpSuccess,
  HttpRedirects,
  HttpClientFailure,
  HttpServerFailure,
  HttpRetry,
  MultipleResponses
} from "./operationsInterfaces";
import { HttpInfrastructureClientContext } from "./httpInfrastructureClientContext";
import { HttpInfrastructureClientOptionalParams } from "./models";

export class HttpInfrastructureClient extends HttpInfrastructureClientContext {
  /**
   * Initializes a new instance of the HttpInfrastructureClient class.
   * @param options The parameter options
   */
  constructor(options?: HttpInfrastructureClientOptionalParams) {
    super(options);
    this.httpFailure = new HttpFailureImpl(this);
    this.httpSuccess = new HttpSuccessImpl(this);
    this.httpRedirects = new HttpRedirectsImpl(this);
    this.httpClientFailure = new HttpClientFailureImpl(this);
    this.httpServerFailure = new HttpServerFailureImpl(this);
    this.httpRetry = new HttpRetryImpl(this);
    this.multipleResponses = new MultipleResponsesImpl(this);
  }

  httpFailure: HttpFailure;
  httpSuccess: HttpSuccess;
  httpRedirects: HttpRedirects;
  httpClientFailure: HttpClientFailure;
  httpServerFailure: HttpServerFailure;
  httpRetry: HttpRetry;
  multipleResponses: MultipleResponses;
}