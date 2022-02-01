"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lirerales = exports.TLiteral = void 0;
var ExpresionBase_1 = require("./ExpresionBase");
var TablaTipos_1 = require("./TablaTipos");
var TLiteral;
(function (TLiteral) {
    TLiteral[TLiteral["INT"] = 0] = "INT";
    TLiteral[TLiteral["DOBLE"] = 1] = "DOBLE";
    TLiteral[TLiteral["BOOLEAN"] = 2] = "BOOLEAN";
    TLiteral[TLiteral["CHAR"] = 3] = "CHAR";
    TLiteral[TLiteral["STRING"] = 4] = "STRING";
})(TLiteral = exports.TLiteral || (exports.TLiteral = {}));
var Lirerales = /** @class */ (function (_super) {
    __extends(Lirerales, _super);
    function Lirerales(value, tipo, linea, col) {
        var _this = _super.call(this, linea, col) || this;
        _this.value = value;
        _this.tipo = tipo;
        return _this;
    }
    Lirerales.prototype.execute = function () {
        if (this.tipo == TLiteral.STRING) {
            return { value: this.value.toString(), type: TablaTipos_1.Type.STRING };
        }
        else if (this.tipo == TLiteral.INT) {
            return { value: Number(this.value), type: TablaTipos_1.Type.INT };
        }
        else if (this.tipo == TLiteral.DOBLE) {
            return { value: parseFloat(this.value), type: TablaTipos_1.Type.DOBLE };
        }
        else if (this.tipo == TLiteral.CHAR) {
            var letra = this.value;
            return { value: letra[0], type: TablaTipos_1.Type.CHAR }; //TODO Convertir a char
        }
        if (this.value.toString().toLowerCase() == "true") {
            return { value: true, type: TablaTipos_1.Type.BOOLEAN };
        }
        return { value: false, type: TablaTipos_1.Type.BOOLEAN };
    };
    return Lirerales;
}(ExpresionBase_1.Expresiones));
exports.Lirerales = Lirerales;
