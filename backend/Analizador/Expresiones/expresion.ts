import { Type, Retornos, Tipos } from "./Retornos";

export abstract class Expresiones {
  public linea: number;
  public colum: number;
  constructor(linea: number, columna: number) {
    this.colum = columna;
    this.linea = linea;
  }

  public abstract execute(): Retornos;

  public TipoDominante(tipo1: Type, tipo2: Type): Type {
    return Tipos[tipo1][tipo2];
  }
}
