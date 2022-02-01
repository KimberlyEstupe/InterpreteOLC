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
exports.Logicas = exports.TLogicas = void 0;
var ExpresionBase_1 = require("./ExpresionBase");
var TablaTipos_1 = require("./TablaTipos");
var Error_1 = require("../Errores/Error");
var TLogicas;
(function (TLogicas) {
    TLogicas[TLogicas["AND"] = 0] = "AND";
    TLogicas[TLogicas["OR"] = 1] = "OR";
    TLogicas[TLogicas["NOT"] = 2] = "NOT";
})(TLogicas = exports.TLogicas || (exports.TLogicas = {}));
var Logicas = /** @class */ (function (_super) {
    __extends(Logicas, _super);
    function Logicas(Izq, Der, tipoL, linea, col) {
        var _this = _super.call(this, linea, col) || this;
        _this.Izq = Izq;
        _this.Der = Der;
        _this.tipoL = tipoL;
        return _this;
    }
    Logicas.prototype.execute = function () {
        var DerV = this.Der.execute();
        var IzqV = this.Izq.execute();
        if (this.tipoL == TLogicas.NOT) {
            if (IzqV.value == TablaTipos_1.Type.BOOLEAN) {
                return { value: !IzqV.value, type: TablaTipos_1.Type.BOOLEAN };
            }
            throw new Error_1.Errores(this.linea, this.col, "Semantico", "La expresion izquierda no es booleana");
        }
        else if (this.tipoL == TLogicas.AND) {
            if (IzqV.value == TablaTipos_1.Type.BOOLEAN) {
                if (DerV.value == TablaTipos_1.Type.BOOLEAN) {
                    return { value: IzqV.value && DerV.value, type: TablaTipos_1.Type.BOOLEAN };
                }
                throw new Error_1.Errores(this.linea, this.col, "Semantico", "La expresion derecha no e booleana ");
            }
            throw new Error_1.Errores(this.linea, this.col, "Semantico", "La expresion izquierda no es booleana");
        }
        else if (this.tipoL == TLogicas.OR) {
            if (IzqV.value == TablaTipos_1.Type.BOOLEAN) {
                if (DerV.value == TablaTipos_1.Type.BOOLEAN) {
                    return { value: IzqV.value || DerV.value, type: TablaTipos_1.Type.BOOLEAN };
                }
                throw new Error_1.Errores(this.linea, this.col, "Semantico", "La expresion derecha no e booleana ");
            }
            throw new Error_1.Errores(this.linea, this.col, "Semantico", "La expresion izquierda no es booleana");
        }
        return { value: "", type: TablaTipos_1.Type.NULL };
    };
    return Logicas;
}(ExpresionBase_1.Expresiones));
exports.Logicas = Logicas;
