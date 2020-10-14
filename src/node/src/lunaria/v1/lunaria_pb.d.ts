// package: lunaria.v1
// file: lunaria/v1/lunaria.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Version extends jspb.Message {
  getMajor(): number;
  setMajor(value: number): Version;

  getMinor(): number;
  setMinor(value: number): Version;

  getPatch(): number;
  setPatch(value: number): Version;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Version.AsObject;
  static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Version,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Version;
  static deserializeBinaryFromReader(
    message: Version,
    reader: jspb.BinaryReader
  ): Version;
}

export namespace Version {
  export type AsObject = {
    major: number;
    minor: number;
    patch: number;
  };
}

export class GetVersionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVersionRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetVersionRequest
  ): GetVersionRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetVersionRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetVersionRequest;
  static deserializeBinaryFromReader(
    message: GetVersionRequest,
    reader: jspb.BinaryReader
  ): GetVersionRequest;
}

export namespace GetVersionRequest {
  export type AsObject = {};
}

export class GetVersionResponse extends jspb.Message {
  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): Version | undefined;
  setVersion(value?: Version): GetVersionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVersionResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetVersionResponse
  ): GetVersionResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetVersionResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetVersionResponse;
  static deserializeBinaryFromReader(
    message: GetVersionResponse,
    reader: jspb.BinaryReader
  ): GetVersionResponse;
}

export namespace GetVersionResponse {
  export type AsObject = {
    version?: Version.AsObject;
  };
}
