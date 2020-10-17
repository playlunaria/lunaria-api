// package: lunaria.v1
// file: lunaria/v1/lunaria.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import { handleClientStreamingCall } from "@grpc/grpc-js/build/src/server-call";
import * as lunaria_v1_lunaria_pb from "../../lunaria/v1/lunaria_pb";

interface ILunariaService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getVersion: ILunariaService_IGetVersion;
}

interface ILunariaService_IGetVersion
  extends grpc.MethodDefinition<
    lunaria_v1_lunaria_pb.GetVersionRequest,
    lunaria_v1_lunaria_pb.GetVersionResponse
  > {
  path: "/lunaria.v1.Lunaria/GetVersion";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<lunaria_v1_lunaria_pb.GetVersionRequest>;
  requestDeserialize: grpc.deserialize<lunaria_v1_lunaria_pb.GetVersionRequest>;
  responseSerialize: grpc.serialize<lunaria_v1_lunaria_pb.GetVersionResponse>;
  responseDeserialize: grpc.deserialize<
    lunaria_v1_lunaria_pb.GetVersionResponse
  >;
}

export const LunariaService: ILunariaService;

export interface ILunariaServer {
  getVersion: grpc.handleUnaryCall<
    lunaria_v1_lunaria_pb.GetVersionRequest,
    lunaria_v1_lunaria_pb.GetVersionResponse
  >;
}

export interface ILunariaClient {
  getVersion(
    request: lunaria_v1_lunaria_pb.GetVersionRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: lunaria_v1_lunaria_pb.GetVersionResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getVersion(
    request: lunaria_v1_lunaria_pb.GetVersionRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: lunaria_v1_lunaria_pb.GetVersionResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getVersion(
    request: lunaria_v1_lunaria_pb.GetVersionRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: lunaria_v1_lunaria_pb.GetVersionResponse
    ) => void
  ): grpc.ClientUnaryCall;
}

export class LunariaClient extends grpc.Client implements ILunariaClient {
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: Partial<grpc.ClientOptions>
  );
  public getVersion(
    request: lunaria_v1_lunaria_pb.GetVersionRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: lunaria_v1_lunaria_pb.GetVersionResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getVersion(
    request: lunaria_v1_lunaria_pb.GetVersionRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: lunaria_v1_lunaria_pb.GetVersionResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getVersion(
    request: lunaria_v1_lunaria_pb.GetVersionRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: lunaria_v1_lunaria_pb.GetVersionResponse
    ) => void
  ): grpc.ClientUnaryCall;
}
