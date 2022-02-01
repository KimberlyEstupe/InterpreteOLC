import { Expresiones } from "./ExpresionBase";
import { Type, Retornos, Tipos } from "./TablaTipos";

export enum TLiteral {
  INT = 0,
  DOBLE = 1,
  BOOLEAN = 2,
  CHAR = 3,
  STRING = 4,
}

export abstract class Lirerales extends Expresiones {
  constructor(
    private value: any,
    private tipo: TLiteral,
    linea: number,
    col: number
  ) {
    super(linea, col);
  }

  public execute(): Retornos {
    if (this.tipo == TLiteral.STRING) {
      return { value: this.value.toString(), type: Type.STRING };
    } else if (this.tipo == TLiteral.INT) {
      return { value: Number(this.value), type: Type.INT };
    } else if (this.tipo == TLiteral.DOBLE) {
      return { value: parseFloat(this.value), type: Type.DOBLE };
    } else if (this.tipo == TLiteral.CHAR) {
      const letra = this.value;
      return { value: letra[0], type: Type.CHAR }; //TODO Convertir a char
    }

    if (this.value.toString().toLowerCase() == "true") {
      return { value: true, type: Type.BOOLEAN };
    }
    return { value: false, type: Type.BOOLEAN };
  }
}
