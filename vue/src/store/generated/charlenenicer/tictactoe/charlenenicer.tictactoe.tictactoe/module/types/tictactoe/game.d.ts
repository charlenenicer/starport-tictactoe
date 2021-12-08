import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "charlenenicer.tictactoe.tictactoe";
export interface Game {
    creator: string;
    challenger: string;
    turn: string;
    board: string[];
    status: string;
    id: number;
}
export declare const Game: {
    encode(message: Game, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Game;
    fromJSON(object: any): Game;
    toJSON(message: Game): unknown;
    fromPartial(object: DeepPartial<Game>): Game;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
