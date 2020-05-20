/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyComplexClient } from "../bodyComplexClient";
import {
  PrimitiveGetIntResponse,
  IntWrapper,
  PrimitiveGetLongResponse,
  LongWrapper,
  PrimitiveGetFloatResponse,
  FloatWrapper,
  PrimitiveGetDoubleResponse,
  DoubleWrapper,
  PrimitiveGetBoolResponse,
  BooleanWrapper,
  PrimitiveGetStringResponse,
  StringWrapper,
  PrimitiveGetDateResponse,
  DateWrapper,
  PrimitiveGetDateTimeResponse,
  DatetimeWrapper,
  PrimitiveGetDateTimeRfc1123Response,
  Datetimerfc1123Wrapper,
  PrimitiveGetDurationResponse,
  DurationWrapper,
  PrimitiveGetByteResponse,
  ByteWrapper
} from "../models";

/**
 * Class representing a Primitive.
 */
export class Primitive {
  private readonly client: BodyComplexClient;

  /**
   * Initialize a new instance of the class Primitive class.
   * @param client Reference to the service client
   */
  constructor(client: BodyComplexClient) {
    this.client = client;
  }

  /**
   * Get complex types with integer properties
   * @param options The options parameters.
   */
  getInt(
    options?: coreHttp.OperationOptions
  ): Promise<PrimitiveGetIntResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getIntOperationSpec
    ) as Promise<PrimitiveGetIntResponse>;
  }

  /**
   * Put complex types with integer properties
   * @param complexBody Please put -1 and 2
   * @param options The options parameters.
   */
  putInt(
    complexBody: IntWrapper,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { complexBody, options: operationOptions },
      putIntOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get complex types with long properties
   * @param options The options parameters.
   */
  getLong(
    options?: coreHttp.OperationOptions
  ): Promise<PrimitiveGetLongResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getLongOperationSpec
    ) as Promise<PrimitiveGetLongResponse>;
  }

  /**
   * Put complex types with long properties
   * @param complexBody Please put 1099511627775 and -999511627788
   * @param options The options parameters.
   */
  putLong(
    complexBody: LongWrapper,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { complexBody, options: operationOptions },
      putLongOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get complex types with float properties
   * @param options The options parameters.
   */
  getFloat(
    options?: coreHttp.OperationOptions
  ): Promise<PrimitiveGetFloatResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getFloatOperationSpec
    ) as Promise<PrimitiveGetFloatResponse>;
  }

  /**
   * Put complex types with float properties
   * @param complexBody Please put 1.05 and -0.003
   * @param options The options parameters.
   */
  putFloat(
    complexBody: FloatWrapper,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { complexBody, options: operationOptions },
      putFloatOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get complex types with double properties
   * @param options The options parameters.
   */
  getDouble(
    options?: coreHttp.OperationOptions
  ): Promise<PrimitiveGetDoubleResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getDoubleOperationSpec
    ) as Promise<PrimitiveGetDoubleResponse>;
  }

  /**
   * Put complex types with double properties
   * @param complexBody Please put 3e-100 and
   *                    -0.000000000000000000000000000000000000000000000000000000005
   * @param options The options parameters.
   */
  putDouble(
    complexBody: DoubleWrapper,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { complexBody, options: operationOptions },
      putDoubleOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get complex types with bool properties
   * @param options The options parameters.
   */
  getBool(
    options?: coreHttp.OperationOptions
  ): Promise<PrimitiveGetBoolResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getBoolOperationSpec
    ) as Promise<PrimitiveGetBoolResponse>;
  }

  /**
   * Put complex types with bool properties
   * @param complexBody Please put true and false
   * @param options The options parameters.
   */
  putBool(
    complexBody: BooleanWrapper,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { complexBody, options: operationOptions },
      putBoolOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get complex types with string properties
   * @param options The options parameters.
   */
  getString(
    options?: coreHttp.OperationOptions
  ): Promise<PrimitiveGetStringResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getStringOperationSpec
    ) as Promise<PrimitiveGetStringResponse>;
  }

  /**
   * Put complex types with string properties
   * @param complexBody Please put 'goodrequest', '', and null
   * @param options The options parameters.
   */
  putString(
    complexBody: StringWrapper,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { complexBody, options: operationOptions },
      putStringOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get complex types with date properties
   * @param options The options parameters.
   */
  getDate(
    options?: coreHttp.OperationOptions
  ): Promise<PrimitiveGetDateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getDateOperationSpec
    ) as Promise<PrimitiveGetDateResponse>;
  }

  /**
   * Put complex types with date properties
   * @param complexBody Please put '0001-01-01' and '2016-02-29'
   * @param options The options parameters.
   */
  putDate(
    complexBody: DateWrapper,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { complexBody, options: operationOptions },
      putDateOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get complex types with datetime properties
   * @param options The options parameters.
   */
  getDateTime(
    options?: coreHttp.OperationOptions
  ): Promise<PrimitiveGetDateTimeResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getDateTimeOperationSpec
    ) as Promise<PrimitiveGetDateTimeResponse>;
  }

  /**
   * Put complex types with datetime properties
   * @param complexBody Please put '0001-01-01T12:00:00-04:00' and '2015-05-18T11:38:00-08:00'
   * @param options The options parameters.
   */
  putDateTime(
    complexBody: DatetimeWrapper,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { complexBody, options: operationOptions },
      putDateTimeOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get complex types with datetimeRfc1123 properties
   * @param options The options parameters.
   */
  getDateTimeRfc1123(
    options?: coreHttp.OperationOptions
  ): Promise<PrimitiveGetDateTimeRfc1123Response> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getDateTimeRfc1123OperationSpec
    ) as Promise<PrimitiveGetDateTimeRfc1123Response>;
  }

  /**
   * Put complex types with datetimeRfc1123 properties
   * @param complexBody Please put 'Mon, 01 Jan 0001 12:00:00 GMT' and 'Mon, 18 May 2015 11:38:00 GMT'
   * @param options The options parameters.
   */
  putDateTimeRfc1123(
    complexBody: Datetimerfc1123Wrapper,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { complexBody, options: operationOptions },
      putDateTimeRfc1123OperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get complex types with duration properties
   * @param options The options parameters.
   */
  getDuration(
    options?: coreHttp.OperationOptions
  ): Promise<PrimitiveGetDurationResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getDurationOperationSpec
    ) as Promise<PrimitiveGetDurationResponse>;
  }

  /**
   * Put complex types with duration properties
   * @param complexBody Please put 'P123DT22H14M12.011S'
   * @param options The options parameters.
   */
  putDuration(
    complexBody: DurationWrapper,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { complexBody, options: operationOptions },
      putDurationOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get complex types with byte properties
   * @param options The options parameters.
   */
  getByte(
    options?: coreHttp.OperationOptions
  ): Promise<PrimitiveGetByteResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getByteOperationSpec
    ) as Promise<PrimitiveGetByteResponse>;
  }

  /**
   * Put complex types with byte properties
   * @param complexBody Please put non-ascii byte string hex(FF FE FD FC 00 FA F9 F8 F7 F6)
   * @param options The options parameters.
   */
  putByte(
    complexBody: ByteWrapper,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { complexBody, options: operationOptions },
      putByteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getIntOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/primitive/integer",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IntWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putIntOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/primitive/integer",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getLongOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/primitive/long",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LongWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putLongOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/primitive/long",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getFloatOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/primitive/float",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FloatWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putFloatOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/primitive/float",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody3,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getDoubleOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/primitive/double",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DoubleWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putDoubleOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/primitive/double",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody4,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getBoolOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/primitive/bool",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BooleanWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putBoolOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/primitive/bool",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody5,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getStringOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/primitive/string",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StringWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putStringOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/primitive/string",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody6,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getDateOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/primitive/date",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DateWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putDateOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/primitive/date",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody7,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getDateTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/primitive/datetime",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatetimeWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putDateTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/primitive/datetime",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody8,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getDateTimeRfc1123OperationSpec: coreHttp.OperationSpec = {
  path: "/complex/primitive/datetimerfc1123",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Datetimerfc1123Wrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putDateTimeRfc1123OperationSpec: coreHttp.OperationSpec = {
  path: "/complex/primitive/datetimerfc1123",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody9,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getDurationOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/primitive/duration",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DurationWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putDurationOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/primitive/duration",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody10,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getByteOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/primitive/byte",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ByteWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putByteOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/primitive/byte",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody11,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
