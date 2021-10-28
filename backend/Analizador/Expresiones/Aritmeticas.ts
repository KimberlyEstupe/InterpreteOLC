import { Expresiones } from "./ExpresionBase";
import { Retornos, Type } from "./TablaTipos";

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
    private tipoA: TAritmetica,
    linea: number,
    col: number
  ) {
    super(linea, col);
  }

  public execute(): Retornos {
    const LefthV = this.Left.execute();
    const rightV = this.Rigt.execute();
    let Dominante = this.TipoDominante(rightV.type, LefthV.type);

    if (this.tipoA == TAritmetica.Suma) {
      if (Dominante == Type.CADENA) {
        return {
          value: LefthV.value.toString() + rightV.value.toString(),
          type: Type.CADENA,
        };
      }
    }

    return { value: "", type: Type.NULL };
  }
}
