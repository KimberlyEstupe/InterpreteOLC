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
exports.Relacionales = exports.TRelacion = void 0;
var ExpresionBase_1 = require("./ExpresionBase");
var TablaTipos_1 = require("./TablaTipos");
var TRelacion;
(function (TRelacion) {
    TRelacion[TRelacion["MAYOR"] = 0] = "MAYOR";
    TRelacion[TRelacion["MENOR"] = 1] = "MENOR";
    TRelacion[TRelacion["MAYORI"] = 2] = "MAYORI";
    TRelacion[TRelacion["MENORI"] = 3] = "MENORI";
    TRelacion[TRelacion["DIGUAL"] = 4] = "DIGUAL";
    TRelacion[TRelacion["DIFERENCIA"] = 5] = "DIFERENCIA";
})(TRelacion = exports.TRelacion || (exports.TRelacion = {}));
var Relacionales = /** @class */ (function (_super) {
    __extends(Relacionales, _super);
    function Relacionales(Izq, Der, tipo, linea, col) {
        var _this = _super.call(this, linea, col) || this;
        _this.Izq = Izq;
        _this.Der = Der;
        _this.tipo = tipo;
        return _this;
    }
    Relacionales.prototype.execute = function () {
        var DerV = this.Der.execute();
        var IzqV = this.Izq.execute();
        if (this.tipo == TRelacion.DIGUAL) {
            return { value: IzqV.value == DerV.value, type: TablaTipos_1.Type.BOOLEAN };
        }
        else if (this.tipo == TRelacion.MAYOR) {
            return { value: IzqV.value > DerV.value, type: TablaTipos_1.Type.BOOLEAN };
        }
        else if (this.tipo == TRelacion.MENOR) {
            return { value: IzqV.value < DerV.value, type: TablaTipos_1.Type.BOOLEAN };
        }
        else if (this.tipo == TRelacion.MAYORI) {
            return { value: IzqV.value >= DerV.value, type: TablaTipos_1.Type.BOOLEAN };
        }
        else if (this.tipo == TRelacion.MENORI) {
            return { value: IzqV.value <= DerV.value, type: TablaTipos_1.Type.BOOLEAN };
        }
        else if (this.tipo == TRelacion.DIFERENCIA) {
            return { value: IzqV.value != DerV.value, type: TablaTipos_1.Type.BOOLEAN };
        }
        return { value: "", type: TablaTipos_1.Type.NULL };
    };
    return Relacionales;
}(ExpresionBase_1.Expresiones));
exports.Relacionales = Relacionales;
// >< >= <= ==
