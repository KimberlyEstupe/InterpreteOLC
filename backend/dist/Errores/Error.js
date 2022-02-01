"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Errores = void 0;
var Errores = /** @class */ (function () {
    function Errores(linea, columna, tipo, mensaje) {
        this.linea = linea;
        this.columna = columna;
        this.tipo = tipo;
        this.mensaje = mensaje;
    }
    return Errores;
}());
exports.Errores = Errores;
