import { Expresiones } from "./Expresion";
import { Type, Retornos, Tipos } from "./Retornos";

export enum TLiteral {
  ENTERO = 0,
  DOBLE = 1,
  BOOLEAN = 2,
  CARACTER = 3,
  CADENA = 4,
}

export abstract class Lirerales extends Expresiones {
  constructor(
    private value: NavigationType,
    private tipo: TLiteral,
    line: number,
    col: number
  ) {
    super(line, col);
  }

  public execute(): Retornos {
    if (this.tipo == 4) {
      return { value: this.value.toString, type: Type.CADENA };
    }
  }
}
