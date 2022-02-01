"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expresiones = void 0;
var TablaTipos_1 = require("./TablaTipos");
var Expresiones = /** @class */ (function () {
    function Expresiones(linea, columna) {
        this.col = columna;
        this.linea = linea;
    }
    Expresiones.prototype.TipoDominante = function (tipo1, tipo2) {
        return TablaTipos_1.Tipos[tipo1][tipo2];
    };
    return Expresiones;
}());
exports.Expresiones = Expresiones;
