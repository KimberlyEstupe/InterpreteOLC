import { Expresiones } from "./Expresion";
import { Retornos, Type } from "./Retornos";

export enum TAritmetica {
  Suma,
  Resta,
  Division,
  Multiplicacion,
  Potencia,
  Mudulo,
}

export abstract class Aritmeticas extends Expresiones {
  constructor(
    private Left: Expresiones,
    private Rigt: Expresiones,
    private tipo: TAritmetica,
    linea: number,
    col: number
  ) {
    super(linea, col);
  }

  public execute(): Retornos {
    const rightV = this.Rigt.execute();
    const LefthV = this.Left.execute();
    let Dominante = this.TipoDominante(rightV.type, LefthV.type);

    return {
      value: LefthV.value.toString() + rightV.value.toString(),
      type: Type.CADENA,
    };
  }
}
