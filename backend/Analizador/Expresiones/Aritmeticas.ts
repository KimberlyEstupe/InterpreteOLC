import { Expresiones } from "./ExpresionBase";
import { Retornos, Type } from "./TablaTipos";

export enum TAritmetica {
  SUMAR,
  RESTAR,
  DIVIDE,
  MULTIPLICA,
  POTENCIA,
  MODULO,
}

export abstract class Aritmeticas extends Expresiones {
  constructor(
    private Izq: Expresiones,
    private Der: Expresiones,
    private tipoA: TAritmetica,
    linea: number,
    col: number
  ) {
    super(linea, col);
  }

  public execute(): Retornos {
    const IzqV = this.Izq.execute();
    const DerV = this.Der.execute();
    let Dominante = this.TipoDominante(DerV.type, IzqV.type);

    if (this.tipoA == TAritmetica.SUMAR) {
      if (Dominante == Type.STRING) {
        return {
          value: IzqV.value.toString() + DerV.value.toString(),
          type: Type.STRING,
        };
      }
    }

    return { value: "", type: Type.NULL };
  }
}
