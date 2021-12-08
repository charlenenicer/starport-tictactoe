import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "charlenenicer.tictactoe.tictactoe";
export interface QueryGamesRequest {
}
export interface QueryGamesResponse {
    status: string;
}
export declare const QueryGamesRequest: {
    encode(_: QueryGamesRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGamesRequest;
    fromJSON(_: any): QueryGamesRequest;
    toJSON(_: QueryGamesRequest): unknown;
    fromPartial(_: DeepPartial<QueryGamesRequest>): QueryGamesRequest;
};
export declare const QueryGamesResponse: {
    encode(message: QueryGamesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGamesResponse;
    fromJSON(object: any): QueryGamesResponse;
    toJSON(message: QueryGamesResponse): unknown;
    fromPartial(object: DeepPartial<QueryGamesResponse>): QueryGamesResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a list of games items. */
    Games(request: QueryGamesRequest): Promise<QueryGamesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Games(request: QueryGamesRequest): Promise<QueryGamesResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
