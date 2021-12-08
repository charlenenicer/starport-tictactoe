/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "charlenenicer.tictactoe.tictactoe";
const baseGame = {
    creator: "",
    challenger: "",
    turn: "",
    board: "",
    status: "",
    id: 0,
};
export const Game = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.challenger !== "") {
            writer.uint32(18).string(message.challenger);
        }
        if (message.turn !== "") {
            writer.uint32(26).string(message.turn);
        }
        for (const v of message.board) {
            writer.uint32(34).string(v);
        }
        if (message.status !== "") {
            writer.uint32(42).string(message.status);
        }
        if (message.id !== 0) {
            writer.uint32(48).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGame };
        message.board = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.challenger = reader.string();
                    break;
                case 3:
                    message.turn = reader.string();
                    break;
                case 4:
                    message.board.push(reader.string());
                    break;
                case 5:
                    message.status = reader.string();
                    break;
                case 6:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGame };
        message.board = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.challenger !== undefined && object.challenger !== null) {
            message.challenger = String(object.challenger);
        }
        else {
            message.challenger = "";
        }
        if (object.turn !== undefined && object.turn !== null) {
            message.turn = String(object.turn);
        }
        else {
            message.turn = "";
        }
        if (object.board !== undefined && object.board !== null) {
            for (const e of object.board) {
                message.board.push(String(e));
            }
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        }
        else {
            message.status = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.challenger !== undefined && (obj.challenger = message.challenger);
        message.turn !== undefined && (obj.turn = message.turn);
        if (message.board) {
            obj.board = message.board.map((e) => e);
        }
        else {
            obj.board = [];
        }
        message.status !== undefined && (obj.status = message.status);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGame };
        message.board = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.challenger !== undefined && object.challenger !== null) {
            message.challenger = object.challenger;
        }
        else {
            message.challenger = "";
        }
        if (object.turn !== undefined && object.turn !== null) {
            message.turn = object.turn;
        }
        else {
            message.turn = "";
        }
        if (object.board !== undefined && object.board !== null) {
            for (const e of object.board) {
                message.board.push(e);
            }
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
