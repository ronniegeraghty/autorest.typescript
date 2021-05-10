/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import {
  QueriesGetBooleanTrueOptionalParams,
  QueriesGetBooleanFalseOptionalParams,
  QueriesGetBooleanNullOptionalParams,
  QueriesGetIntOneMillionOptionalParams,
  QueriesGetIntNegativeOneMillionOptionalParams,
  QueriesGetIntNullOptionalParams,
  QueriesGetTenBillionOptionalParams,
  QueriesGetNegativeTenBillionOptionalParams,
  QueriesGetLongNullOptionalParams,
  QueriesFloatScientificPositiveOptionalParams,
  QueriesFloatScientificNegativeOptionalParams,
  QueriesFloatNullOptionalParams,
  QueriesDoubleDecimalPositiveOptionalParams,
  QueriesDoubleDecimalNegativeOptionalParams,
  QueriesDoubleNullOptionalParams,
  QueriesStringUnicodeOptionalParams,
  QueriesStringUrlEncodedOptionalParams,
  QueriesStringEmptyOptionalParams,
  QueriesStringNullOptionalParams,
  QueriesEnumValidOptionalParams,
  QueriesEnumNullOptionalParams,
  QueriesByteMultiByteOptionalParams,
  QueriesByteEmptyOptionalParams,
  QueriesByteNullOptionalParams,
  QueriesDateValidOptionalParams,
  QueriesDateNullOptionalParams,
  QueriesDateTimeValidOptionalParams,
  QueriesDateTimeNullOptionalParams,
  QueriesArrayStringCsvValidOptionalParams,
  QueriesArrayStringCsvNullOptionalParams,
  QueriesArrayStringCsvEmptyOptionalParams,
  QueriesArrayStringNoCollectionFormatEmptyOptionalParams,
  QueriesArrayStringSsvValidOptionalParams,
  QueriesArrayStringTsvValidOptionalParams,
  QueriesArrayStringPipesValidOptionalParams
} from "../models";

/** Interface representing a Queries. */
export interface Queries {
  /**
   * Get true Boolean value on path
   * @param options The options parameters.
   */
  getBooleanTrue(
    options?: QueriesGetBooleanTrueOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get false Boolean value on path
   * @param options The options parameters.
   */
  getBooleanFalse(
    options?: QueriesGetBooleanFalseOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get null Boolean value on query (query string should be absent)
   * @param options The options parameters.
   */
  getBooleanNull(
    options?: QueriesGetBooleanNullOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get '1000000' integer value
   * @param options The options parameters.
   */
  getIntOneMillion(
    options?: QueriesGetIntOneMillionOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get '-1000000' integer value
   * @param options The options parameters.
   */
  getIntNegativeOneMillion(
    options?: QueriesGetIntNegativeOneMillionOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get null integer value (no query parameter)
   * @param options The options parameters.
   */
  getIntNull(
    options?: QueriesGetIntNullOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get '10000000000' 64 bit integer value
   * @param options The options parameters.
   */
  getTenBillion(
    options?: QueriesGetTenBillionOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get '-10000000000' 64 bit integer value
   * @param options The options parameters.
   */
  getNegativeTenBillion(
    options?: QueriesGetNegativeTenBillionOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get 'null 64 bit integer value (no query param in uri)
   * @param options The options parameters.
   */
  getLongNull(
    options?: QueriesGetLongNullOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get '1.034E+20' numeric value
   * @param options The options parameters.
   */
  floatScientificPositive(
    options?: QueriesFloatScientificPositiveOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get '-1.034E-20' numeric value
   * @param options The options parameters.
   */
  floatScientificNegative(
    options?: QueriesFloatScientificNegativeOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get null numeric value (no query parameter)
   * @param options The options parameters.
   */
  floatNull(
    options?: QueriesFloatNullOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get '9999999.999' numeric value
   * @param options The options parameters.
   */
  doubleDecimalPositive(
    options?: QueriesDoubleDecimalPositiveOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get '-9999999.999' numeric value
   * @param options The options parameters.
   */
  doubleDecimalNegative(
    options?: QueriesDoubleDecimalNegativeOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get null numeric value (no query parameter)
   * @param options The options parameters.
   */
  doubleNull(
    options?: QueriesDoubleNullOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value
   * @param options The options parameters.
   */
  stringUnicode(
    options?: QueriesStringUnicodeOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get 'begin!*'();:@ &=+$,/?#[]end
   * @param options The options parameters.
   */
  stringUrlEncoded(
    options?: QueriesStringUrlEncodedOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get ''
   * @param options The options parameters.
   */
  stringEmpty(
    options?: QueriesStringEmptyOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get null (no query parameter in url)
   * @param options The options parameters.
   */
  stringNull(
    options?: QueriesStringNullOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get using uri with query parameter 'green color'
   * @param options The options parameters.
   */
  enumValid(
    options?: QueriesEnumValidOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get null (no query parameter in url)
   * @param options The options parameters.
   */
  enumNull(
    options?: QueriesEnumNullOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array
   * @param options The options parameters.
   */
  byteMultiByte(
    options?: QueriesByteMultiByteOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get '' as byte array
   * @param options The options parameters.
   */
  byteEmpty(
    options?: QueriesByteEmptyOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get null as byte array (no query parameters in uri)
   * @param options The options parameters.
   */
  byteNull(
    options?: QueriesByteNullOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get '2012-01-01' as date
   * @param options The options parameters.
   */
  dateValid(
    options?: QueriesDateValidOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get null as date - this should result in no query parameters in uri
   * @param options The options parameters.
   */
  dateNull(
    options?: QueriesDateNullOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get '2012-01-01T01:01:01Z' as date-time
   * @param options The options parameters.
   */
  dateTimeValid(
    options?: QueriesDateTimeValidOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get null as date-time, should result in no query parameters in uri
   * @param options The options parameters.
   */
  dateTimeNull(
    options?: QueriesDateTimeNullOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array
   * format
   * @param options The options parameters.
   */
  arrayStringCsvValid(
    options?: QueriesArrayStringCsvValidOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get a null array of string using the csv-array format
   * @param options The options parameters.
   */
  arrayStringCsvNull(
    options?: QueriesArrayStringCsvNullOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get an empty array [] of string using the csv-array format
   * @param options The options parameters.
   */
  arrayStringCsvEmpty(
    options?: QueriesArrayStringCsvEmptyOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Array query has no defined collection format, should default to csv. Pass in ['hello', 'nihao',
   * 'bonjour'] for the 'arrayQuery' parameter to the service
   * @param options The options parameters.
   */
  arrayStringNoCollectionFormatEmpty(
    options?: QueriesArrayStringNoCollectionFormatEmptyOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the ssv-array
   * format
   * @param options The options parameters.
   */
  arrayStringSsvValid(
    options?: QueriesArrayStringSsvValidOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the tsv-array
   * format
   * @param options The options parameters.
   */
  arrayStringTsvValid(
    options?: QueriesArrayStringTsvValidOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the
   * pipes-array format
   * @param options The options parameters.
   */
  arrayStringPipesValid(
    options?: QueriesArrayStringPipesValidOptionalParams
  ): Promise<coreHttp.RestResponse>;
}