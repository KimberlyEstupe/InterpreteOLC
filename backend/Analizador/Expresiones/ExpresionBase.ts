import { Type, Retornos, Tipos } from "./TablaTipos";

export abstract class Expresiones {
  public linea: number;
  public col: number;
  constructor(linea: number, columna: number) {
    this.col = columna;
    this.linea = linea;
  }

  public abstract execute(): Retornos;

  public TipoDominante(tipo1: Type, tipo2: Type): Type {
    return Tipos[tipo1][tipo2];
  }
}
