/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "charlenenicer.tictactoe.tictactoe";

export interface QueryGamesRequest {}

export interface QueryGamesResponse {
  status: string;
}

const baseQueryGamesRequest: object = {};

export const QueryGamesRequest = {
  encode(_: QueryGamesRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGamesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGamesRequest } as QueryGamesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGamesRequest {
    const message = { ...baseQueryGamesRequest } as QueryGamesRequest;
    return message;
  },

  toJSON(_: QueryGamesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryGamesRequest>): QueryGamesRequest {
    const message = { ...baseQueryGamesRequest } as QueryGamesRequest;
    return message;
  },
};

const baseQueryGamesResponse: object = { status: "" };

export const QueryGamesResponse = {
  encode(
    message: QueryGamesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGamesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGamesResponse } as QueryGamesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGamesResponse {
    const message = { ...baseQueryGamesResponse } as QueryGamesResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: QueryGamesResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGamesResponse>): QueryGamesResponse {
    const message = { ...baseQueryGamesResponse } as QueryGamesResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a list of games items. */
  Games(request: QueryGamesRequest): Promise<QueryGamesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Games(request: QueryGamesRequest): Promise<QueryGamesResponse> {
    const data = QueryGamesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "charlenenicer.tictactoe.tictactoe.Query",
      "Games",
      data
    );
    return promise.then((data) => QueryGamesResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
