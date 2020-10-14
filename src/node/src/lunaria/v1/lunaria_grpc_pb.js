// GENERATED CODE -- DO NOT EDIT!

"use strict";
var grpc = require("@grpc/grpc-js");
var lunaria_v1_lunaria_pb = require("../../lunaria/v1/lunaria_pb.js");

function serialize_lunaria_v1_GetVersionRequest(arg) {
  if (!(arg instanceof lunaria_v1_lunaria_pb.GetVersionRequest)) {
    throw new Error("Expected argument of type lunaria.v1.GetVersionRequest");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lunaria_v1_GetVersionRequest(buffer_arg) {
  return lunaria_v1_lunaria_pb.GetVersionRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_lunaria_v1_GetVersionResponse(arg) {
  if (!(arg instanceof lunaria_v1_lunaria_pb.GetVersionResponse)) {
    throw new Error("Expected argument of type lunaria.v1.GetVersionResponse");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lunaria_v1_GetVersionResponse(buffer_arg) {
  return lunaria_v1_lunaria_pb.GetVersionResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

var LunariaService = (exports.LunariaService = {
  getVersion: {
    path: "/lunaria.v1.Lunaria/GetVersion",
    requestStream: false,
    responseStream: false,
    requestType: lunaria_v1_lunaria_pb.GetVersionRequest,
    responseType: lunaria_v1_lunaria_pb.GetVersionResponse,
    requestSerialize: serialize_lunaria_v1_GetVersionRequest,
    requestDeserialize: deserialize_lunaria_v1_GetVersionRequest,
    responseSerialize: serialize_lunaria_v1_GetVersionResponse,
    responseDeserialize: deserialize_lunaria_v1_GetVersionResponse,
  },
});

exports.LunariaClient = grpc.makeGenericClientConstructor(LunariaService);
