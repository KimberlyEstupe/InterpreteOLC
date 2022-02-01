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
exports.Aritmeticas = exports.TAritmetica = void 0;
var ExpresionBase_1 = require("./ExpresionBase");
var TablaTipos_1 = require("./TablaTipos");
var Error_1 = require("../Errores/Error");
var TAritmetica;
(function (TAritmetica) {
    TAritmetica[TAritmetica["SUMAR"] = 0] = "SUMAR";
    TAritmetica[TAritmetica["RESTAR"] = 1] = "RESTAR";
    TAritmetica[TAritmetica["DIVIDE"] = 2] = "DIVIDE";
    TAritmetica[TAritmetica["MULTIPLICA"] = 3] = "MULTIPLICA";
    TAritmetica[TAritmetica["POTENCIA"] = 4] = "POTENCIA";
    TAritmetica[TAritmetica["MODULO"] = 5] = "MODULO";
})(TAritmetica = exports.TAritmetica || (exports.TAritmetica = {}));
var Aritmeticas = /** @class */ (function (_super) {
    __extends(Aritmeticas, _super);
    function Aritmeticas(Izq, Der, tipoA, linea, col) {
        var _this = _super.call(this, linea, col) || this;
        _this.Izq = Izq;
        _this.Der = Der;
        _this.tipoA = tipoA;
        return _this;
    }
    Aritmeticas.prototype.execute = function () {
        var IzqV = this.Izq.execute();
        var DerV = this.Der.execute();
        var Dominante = this.TipoDominante(IzqV.type, DerV.type);
        if (this.tipoA == TAritmetica.SUMAR) {
            if (Dominante == TablaTipos_1.Type.INT) {
                return {
                    value: IzqV.value + DerV.value,
                    type: TablaTipos_1.Type.INT,
                };
            }
            else if (Dominante == TablaTipos_1.Type.STRING) {
                return {
                    value: IzqV.value.toString() + DerV.value.toString(),
                    type: TablaTipos_1.Type.STRING,
                };
            }
            throw new Error_1.Errores(this.linea, this.col, "Semantico", "Error en suma");
        }
        //-------------------- RESTA ------------------------------
        else if (this.tipoA == TAritmetica.RESTAR) {
            if (Dominante == TablaTipos_1.Type.INT) {
                return {
                    value: IzqV.value - DerV.value,
                    type: TablaTipos_1.Type.INT,
                };
            }
            throw new Error_1.Errores(this.linea, this.col, "Semantico", "Error en resta");
        }
        //-------------------- Multiplicacion ------------------------------
        else if (this.tipoA == TAritmetica.MULTIPLICA) {
            if (Dominante == TablaTipos_1.Type.INT) {
                return {
                    value: IzqV.value * DerV.value,
                    type: TablaTipos_1.Type.INT,
                };
            }
            throw new Error_1.Errores(this.linea, this.col, "Semantico", "Error en multiplicacion");
        }
        //-------------------- Divide ------------------------------
        else if (this.tipoA == TAritmetica.DIVIDE) {
            if (Dominante == TablaTipos_1.Type.INT) {
                if (DerV.value != 0) {
                    return {
                        value: IzqV.value / DerV.value,
                        type: TablaTipos_1.Type.INT,
                    };
                }
            }
            throw new Error_1.Errores(this.linea, this.col, "Semantico", "Error en Division");
        }
        return { value: "", type: TablaTipos_1.Type.NULL };
    };
    return Aritmeticas;
}(ExpresionBase_1.Expresiones));
exports.Aritmeticas = Aritmeticas;
