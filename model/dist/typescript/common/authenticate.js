"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.0.2
//   protoc               v5.27.2
// source: common/authenticate.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authenticate = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const typeRegistry_1 = require("../typeRegistry");
function createBaseAuthenticate() {
    return { $type: "model.boid.Authenticate", id: "" };
}
exports.Authenticate = {
    $type: "model.boid.Authenticate",
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthenticate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { $type: exports.Authenticate.$type, id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.Authenticate.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAuthenticate();
        message.id = object.id ?? "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Authenticate.$type, exports.Authenticate);
function isSet(value) {
    return value !== null && value !== undefined;
}
