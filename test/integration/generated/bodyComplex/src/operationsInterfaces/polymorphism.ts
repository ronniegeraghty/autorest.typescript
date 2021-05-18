/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  PolymorphismGetValidOptionalParams,
  PolymorphismGetValidResponse,
  FishUnion,
  PolymorphismPutValidOptionalParams,
  PolymorphismGetDotSyntaxOptionalParams,
  PolymorphismGetDotSyntaxResponse,
  PolymorphismGetComposedWithDiscriminatorOptionalParams,
  PolymorphismGetComposedWithDiscriminatorResponse,
  PolymorphismGetComposedWithoutDiscriminatorOptionalParams,
  PolymorphismGetComposedWithoutDiscriminatorResponse,
  PolymorphismGetComplicatedOptionalParams,
  PolymorphismGetComplicatedResponse,
  SalmonUnion,
  PolymorphismPutComplicatedOptionalParams,
  PolymorphismPutMissingDiscriminatorOptionalParams,
  PolymorphismPutMissingDiscriminatorResponse,
  PolymorphismPutValidMissingRequiredOptionalParams
} from "../models";

/** Interface representing a Polymorphism. */
export interface Polymorphism {
  /**
   * Get complex types that are polymorphic
   * @param options The options parameters.
   */
  getValid(
    options?: PolymorphismGetValidOptionalParams
  ): Promise<PolymorphismGetValidResponse>;
  /**
   * Put complex types that are polymorphic
   * @param complexBody Please put a salmon that looks like this:
   *                    {
   *                            'fishtype':'Salmon',
   *                            'location':'alaska',
   *                            'iswild':true,
   *                            'species':'king',
   *                            'length':1.0,
   *                            'siblings':[
   *                              {
   *                                'fishtype':'Shark',
   *                                'age':6,
   *                                'birthday': '2012-01-05T01:00:00Z',
   *                                'length':20.0,
   *                                'species':'predator',
   *                              },
   *                              {
   *                                'fishtype':'Sawshark',
   *                                'age':105,
   *                                'birthday': '1900-01-05T01:00:00Z',
   *                                'length':10.0,
   *                                'picture': new Buffer([255, 255, 255, 255, 254]).toString('base64'),
   *                                'species':'dangerous',
   *                              },
   *                              {
   *                                'fishtype': 'goblin',
   *                                'age': 1,
   *                                'birthday': '2015-08-08T00:00:00Z',
   *                                'length': 30.0,
   *                                'species': 'scary',
   *                                'jawsize': 5
   *                              }
   *                            ]
   *                          };
   * @param options The options parameters.
   */
  putValid(
    complexBody: FishUnion,
    options?: PolymorphismPutValidOptionalParams
  ): Promise<void>;
  /**
   * Get complex types that are polymorphic, JSON key contains a dot
   * @param options The options parameters.
   */
  getDotSyntax(
    options?: PolymorphismGetDotSyntaxOptionalParams
  ): Promise<PolymorphismGetDotSyntaxResponse>;
  /**
   * Get complex object composing a polymorphic scalar property and array property with polymorphic
   * element type, with discriminator specified. Deserialization must NOT fail and use the discriminator
   * type specified on the wire.
   * @param options The options parameters.
   */
  getComposedWithDiscriminator(
    options?: PolymorphismGetComposedWithDiscriminatorOptionalParams
  ): Promise<PolymorphismGetComposedWithDiscriminatorResponse>;
  /**
   * Get complex object composing a polymorphic scalar property and array property with polymorphic
   * element type, without discriminator specified on wire. Deserialization must NOT fail and use the
   * explicit type of the property.
   * @param options The options parameters.
   */
  getComposedWithoutDiscriminator(
    options?: PolymorphismGetComposedWithoutDiscriminatorOptionalParams
  ): Promise<PolymorphismGetComposedWithoutDiscriminatorResponse>;
  /**
   * Get complex types that are polymorphic, but not at the root of the hierarchy; also have additional
   * properties
   * @param options The options parameters.
   */
  getComplicated(
    options?: PolymorphismGetComplicatedOptionalParams
  ): Promise<PolymorphismGetComplicatedResponse>;
  /**
   * Put complex types that are polymorphic, but not at the root of the hierarchy; also have additional
   * properties
   * @param complexBody
   * @param options The options parameters.
   */
  putComplicated(
    complexBody: SalmonUnion,
    options?: PolymorphismPutComplicatedOptionalParams
  ): Promise<void>;
  /**
   * Put complex types that are polymorphic, omitting the discriminator
   * @param complexBody
   * @param options The options parameters.
   */
  putMissingDiscriminator(
    complexBody: SalmonUnion,
    options?: PolymorphismPutMissingDiscriminatorOptionalParams
  ): Promise<PolymorphismPutMissingDiscriminatorResponse>;
  /**
   * Put complex types that are polymorphic, attempting to omit required 'birthday' field - the request
   * should not be allowed from the client
   * @param complexBody Please attempt put a sawshark that looks like this, the client should not allow
   *                    this data to be sent:
   *                    {
   *                        "fishtype": "sawshark",
   *                        "species": "snaggle toothed",
   *                        "length": 18.5,
   *                        "age": 2,
   *                        "birthday": "2013-06-01T01:00:00Z",
   *                        "location": "alaska",
   *                        "picture": base64(FF FF FF FF FE),
   *                        "siblings": [
   *                            {
   *                                "fishtype": "shark",
   *                                "species": "predator",
   *                                "birthday": "2012-01-05T01:00:00Z",
   *                                "length": 20,
   *                                "age": 6
   *                            },
   *                            {
   *                                "fishtype": "sawshark",
   *                                "species": "dangerous",
   *                                "picture": base64(FF FF FF FF FE),
   *                                "length": 10,
   *                                "age": 105
   *                            }
   *                        ]
   *                    }
   * @param options The options parameters.
   */
  putValidMissingRequired(
    complexBody: FishUnion,
    options?: PolymorphismPutValidMissingRequiredOptionalParams
  ): Promise<void>;
}
