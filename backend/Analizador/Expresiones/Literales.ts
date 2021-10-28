import { Expresiones } from "./ExpresionBase";
import { Type, Retornos, Tipos } from "./TablaTipos";

export enum TLiteral {
  ENTERO = 0,
  DOBLE = 1,
  BOOLEAN = 2,
  CARACTER = 3,
  STRING = 4,
}

export abstract class Lirerales extends Expresiones {
  constructor(
    private value: NavigationType,
    private tipo: TLiteral,
    linea: number,
    col: number
  ) {
    super(linea, col);
  }

  public execute(): Retornos {
    if (this.tipo == 4) {
      return { value: this.value.toString, type: Type.STRING };
    } else {
      return { value: null, type: Type.NULL };
    }
  }
}
/*      E
  E     +   E
Literal  Literal
    5       3
True, false, numero, STRING, char
*/
