// source: lunaria/v1/lunaria.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require("google-protobuf");
var goog = jspb;
var global = Function("return this")();

goog.exportSymbol("proto.lunaria.v1.GetVersionRequest", null, global);
goog.exportSymbol("proto.lunaria.v1.GetVersionResponse", null, global);
goog.exportSymbol("proto.lunaria.v1.Version", null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lunaria.v1.Version = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lunaria.v1.Version, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lunaria.v1.Version.displayName = "proto.lunaria.v1.Version";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lunaria.v1.GetVersionRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lunaria.v1.GetVersionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lunaria.v1.GetVersionRequest.displayName =
    "proto.lunaria.v1.GetVersionRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lunaria.v1.GetVersionResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lunaria.v1.GetVersionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lunaria.v1.GetVersionResponse.displayName =
    "proto.lunaria.v1.GetVersionResponse";
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.lunaria.v1.Version.prototype.toObject = function (opt_includeInstance) {
    return proto.lunaria.v1.Version.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.lunaria.v1.Version} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.lunaria.v1.Version.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        major: jspb.Message.getFieldWithDefault(msg, 1, 0),
        minor: jspb.Message.getFieldWithDefault(msg, 2, 0),
        patch: jspb.Message.getFieldWithDefault(msg, 3, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lunaria.v1.Version}
 */
proto.lunaria.v1.Version.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lunaria.v1.Version();
  return proto.lunaria.v1.Version.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lunaria.v1.Version} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lunaria.v1.Version}
 */
proto.lunaria.v1.Version.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readInt64());
        msg.setMajor(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readInt64());
        msg.setMinor(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readInt64());
        msg.setPatch(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lunaria.v1.Version.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.lunaria.v1.Version.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lunaria.v1.Version} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lunaria.v1.Version.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getMajor();
  if (f !== 0) {
    writer.writeInt64(1, f);
  }
  f = message.getMinor();
  if (f !== 0) {
    writer.writeInt64(2, f);
  }
  f = message.getPatch();
  if (f !== 0) {
    writer.writeInt64(3, f);
  }
};

/**
 * optional int64 major = 1;
 * @return {number}
 */
proto.lunaria.v1.Version.prototype.getMajor = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.lunaria.v1.Version} returns this
 */
proto.lunaria.v1.Version.prototype.setMajor = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional int64 minor = 2;
 * @return {number}
 */
proto.lunaria.v1.Version.prototype.getMinor = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.lunaria.v1.Version} returns this
 */
proto.lunaria.v1.Version.prototype.setMinor = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional int64 patch = 3;
 * @return {number}
 */
proto.lunaria.v1.Version.prototype.getPatch = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.lunaria.v1.Version} returns this
 */
proto.lunaria.v1.Version.prototype.setPatch = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.lunaria.v1.GetVersionRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.lunaria.v1.GetVersionRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.lunaria.v1.GetVersionRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.lunaria.v1.GetVersionRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lunaria.v1.GetVersionRequest}
 */
proto.lunaria.v1.GetVersionRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lunaria.v1.GetVersionRequest();
  return proto.lunaria.v1.GetVersionRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lunaria.v1.GetVersionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lunaria.v1.GetVersionRequest}
 */
proto.lunaria.v1.GetVersionRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lunaria.v1.GetVersionRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.lunaria.v1.GetVersionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lunaria.v1.GetVersionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lunaria.v1.GetVersionRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.lunaria.v1.GetVersionResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.lunaria.v1.GetVersionResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.lunaria.v1.GetVersionResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.lunaria.v1.GetVersionResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        version:
          (f = msg.getVersion()) &&
          proto.lunaria.v1.Version.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lunaria.v1.GetVersionResponse}
 */
proto.lunaria.v1.GetVersionResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lunaria.v1.GetVersionResponse();
  return proto.lunaria.v1.GetVersionResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lunaria.v1.GetVersionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lunaria.v1.GetVersionResponse}
 */
proto.lunaria.v1.GetVersionResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.lunaria.v1.Version();
        reader.readMessage(
          value,
          proto.lunaria.v1.Version.deserializeBinaryFromReader
        );
        msg.setVersion(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lunaria.v1.GetVersionResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.lunaria.v1.GetVersionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lunaria.v1.GetVersionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lunaria.v1.GetVersionResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(1, f, proto.lunaria.v1.Version.serializeBinaryToWriter);
  }
};

/**
 * optional Version version = 1;
 * @return {?proto.lunaria.v1.Version}
 */
proto.lunaria.v1.GetVersionResponse.prototype.getVersion = function () {
  return /** @type{?proto.lunaria.v1.Version} */ (jspb.Message.getWrapperField(
    this,
    proto.lunaria.v1.Version,
    1
  ));
};

/**
 * @param {?proto.lunaria.v1.Version|undefined} value
 * @return {!proto.lunaria.v1.GetVersionResponse} returns this
 */
proto.lunaria.v1.GetVersionResponse.prototype.setVersion = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.lunaria.v1.GetVersionResponse} returns this
 */
proto.lunaria.v1.GetVersionResponse.prototype.clearVersion = function () {
  return this.setVersion(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lunaria.v1.GetVersionResponse.prototype.hasVersion = function () {
  return jspb.Message.getField(this, 1) != null;
};

goog.object.extend(exports, proto.lunaria.v1);