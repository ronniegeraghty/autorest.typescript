/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  PathsGetBooleanTrueOptionalParams,
  PathsGetBooleanFalseOptionalParams,
  PathsGetIntOneMillionOptionalParams,
  PathsGetIntNegativeOneMillionOptionalParams,
  PathsGetTenBillionOptionalParams,
  PathsGetNegativeTenBillionOptionalParams,
  PathsFloatScientificPositiveOptionalParams,
  PathsFloatScientificNegativeOptionalParams,
  PathsDoubleDecimalPositiveOptionalParams,
  PathsDoubleDecimalNegativeOptionalParams,
  PathsStringUnicodeOptionalParams,
  PathsStringUrlEncodedOptionalParams,
  PathsStringUrlNonEncodedOptionalParams,
  PathsStringEmptyOptionalParams,
  PathsStringNullOptionalParams,
  UriColor,
  PathsEnumValidOptionalParams,
  PathsEnumNullOptionalParams,
  PathsByteMultiByteOptionalParams,
  PathsByteEmptyOptionalParams,
  PathsByteNullOptionalParams,
  PathsDateValidOptionalParams,
  PathsDateNullOptionalParams,
  PathsDateTimeValidOptionalParams,
  PathsDateTimeNullOptionalParams,
  PathsBase64UrlOptionalParams,
  PathsArrayCsvInPathOptionalParams,
  PathsUnixTimeUrlOptionalParams
} from "../models";

/** Interface representing a Paths. */
export interface Paths {
  /**
   * Get true Boolean value on path
   * @param options The options parameters.
   */
  getBooleanTrue(options?: PathsGetBooleanTrueOptionalParams): Promise<void>;
  /**
   * Get false Boolean value on path
   * @param options The options parameters.
   */
  getBooleanFalse(options?: PathsGetBooleanFalseOptionalParams): Promise<void>;
  /**
   * Get '1000000' integer value
   * @param options The options parameters.
   */
  getIntOneMillion(
    options?: PathsGetIntOneMillionOptionalParams
  ): Promise<void>;
  /**
   * Get '-1000000' integer value
   * @param options The options parameters.
   */
  getIntNegativeOneMillion(
    options?: PathsGetIntNegativeOneMillionOptionalParams
  ): Promise<void>;
  /**
   * Get '10000000000' 64 bit integer value
   * @param options The options parameters.
   */
  getTenBillion(options?: PathsGetTenBillionOptionalParams): Promise<void>;
  /**
   * Get '-10000000000' 64 bit integer value
   * @param options The options parameters.
   */
  getNegativeTenBillion(
    options?: PathsGetNegativeTenBillionOptionalParams
  ): Promise<void>;
  /**
   * Get '1.034E+20' numeric value
   * @param options The options parameters.
   */
  floatScientificPositive(
    options?: PathsFloatScientificPositiveOptionalParams
  ): Promise<void>;
  /**
   * Get '-1.034E-20' numeric value
   * @param options The options parameters.
   */
  floatScientificNegative(
    options?: PathsFloatScientificNegativeOptionalParams
  ): Promise<void>;
  /**
   * Get '9999999.999' numeric value
   * @param options The options parameters.
   */
  doubleDecimalPositive(
    options?: PathsDoubleDecimalPositiveOptionalParams
  ): Promise<void>;
  /**
   * Get '-9999999.999' numeric value
   * @param options The options parameters.
   */
  doubleDecimalNegative(
    options?: PathsDoubleDecimalNegativeOptionalParams
  ): Promise<void>;
  /**
   * Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value
   * @param options The options parameters.
   */
  stringUnicode(options?: PathsStringUnicodeOptionalParams): Promise<void>;
  /**
   * Get 'begin!*'();:@ &=+$,/?#[]end
   * @param options The options parameters.
   */
  stringUrlEncoded(
    options?: PathsStringUrlEncodedOptionalParams
  ): Promise<void>;
  /**
   * https://tools.ietf.org/html/rfc3986#appendix-A 'path' accept any 'pchar' not encoded
   * @param options The options parameters.
   */
  stringUrlNonEncoded(
    options?: PathsStringUrlNonEncodedOptionalParams
  ): Promise<void>;
  /**
   * Get ''
   * @param options The options parameters.
   */
  stringEmpty(options?: PathsStringEmptyOptionalParams): Promise<void>;
  /**
   * Get null (should throw)
   * @param stringPath null string value
   * @param options The options parameters.
   */
  stringNull(
    stringPath: string,
    options?: PathsStringNullOptionalParams
  ): Promise<void>;
  /**
   * Get using uri with 'green color' in path parameter
   * @param enumPath send the value green
   * @param options The options parameters.
   */
  enumValid(
    enumPath: UriColor,
    options?: PathsEnumValidOptionalParams
  ): Promise<void>;
  /**
   * Get null (should throw on the client before the request is sent on wire)
   * @param enumPath send null should throw
   * @param options The options parameters.
   */
  enumNull(
    enumPath: UriColor,
    options?: PathsEnumNullOptionalParams
  ): Promise<void>;
  /**
   * Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array
   * @param bytePath '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array
   * @param options The options parameters.
   */
  byteMultiByte(
    bytePath: Uint8Array,
    options?: PathsByteMultiByteOptionalParams
  ): Promise<void>;
  /**
   * Get '' as byte array
   * @param options The options parameters.
   */
  byteEmpty(options?: PathsByteEmptyOptionalParams): Promise<void>;
  /**
   * Get null as byte array (should throw)
   * @param bytePath null as byte array (should throw)
   * @param options The options parameters.
   */
  byteNull(
    bytePath: Uint8Array,
    options?: PathsByteNullOptionalParams
  ): Promise<void>;
  /**
   * Get '2012-01-01' as date
   * @param options The options parameters.
   */
  dateValid(options?: PathsDateValidOptionalParams): Promise<void>;
  /**
   * Get null as date - this should throw or be unusable on the client side, depending on date
   * representation
   * @param datePath null as date (should throw)
   * @param options The options parameters.
   */
  dateNull(
    datePath: Date,
    options?: PathsDateNullOptionalParams
  ): Promise<void>;
  /**
   * Get '2012-01-01T01:01:01Z' as date-time
   * @param options The options parameters.
   */
  dateTimeValid(options?: PathsDateTimeValidOptionalParams): Promise<void>;
  /**
   * Get null as date-time, should be disallowed or throw depending on representation of date-time
   * @param dateTimePath null as date-time
   * @param options The options parameters.
   */
  dateTimeNull(
    dateTimePath: Date,
    options?: PathsDateTimeNullOptionalParams
  ): Promise<void>;
  /**
   * Get 'lorem' encoded value as 'bG9yZW0' (base64url)
   * @param base64UrlPath base64url encoded value
   * @param options The options parameters.
   */
  base64Url(
    base64UrlPath: Uint8Array,
    options?: PathsBase64UrlOptionalParams
  ): Promise<void>;
  /**
   * Get an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array
   * format
   * @param arrayPath an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using
   *                  the csv-array format
   * @param options The options parameters.
   */
  arrayCsvInPath(
    arrayPath: string[],
    options?: PathsArrayCsvInPathOptionalParams
  ): Promise<void>;
  /**
   * Get the date 2016-04-13 encoded value as '1460505600' (Unix time)
   * @param unixTimeUrlPath Unix time encoded value
   * @param options The options parameters.
   */
  unixTimeUrl(
    unixTimeUrlPath: Date,
    options?: PathsUnixTimeUrlOptionalParams
  ): Promise<void>;
}
