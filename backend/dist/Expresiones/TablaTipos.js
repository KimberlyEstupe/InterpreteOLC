"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tipos = exports.Type = void 0;
var Type;
(function (Type) {
    Type[Type["INT"] = 0] = "INT";
    Type[Type["DOBLE"] = 1] = "DOBLE";
    Type[Type["BOOLEAN"] = 2] = "BOOLEAN";
    Type[Type["CHAR"] = 3] = "CHAR";
    Type[Type["STRING"] = 4] = "STRING";
    Type[Type["NULL"] = 5] = "NULL";
})(Type = exports.Type || (exports.Type = {}));
exports.Tipos = [
    [Type.INT, Type.DOBLE, Type.INT, Type.INT, Type.STRING],
    [Type.DOBLE, Type.DOBLE, Type.DOBLE, Type.DOBLE, Type.STRING],
    [Type.INT, Type.DOBLE, Type.NULL, Type.NULL, Type.STRING],
    [Type.INT, Type.DOBLE, Type.NULL, Type.STRING, Type.STRING],
    [Type.STRING, Type.STRING, Type.STRING, Type.STRING, Type.STRING],
];
