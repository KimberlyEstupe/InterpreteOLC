import { Expresiones } from "./ExpresionBase";
import { Retornos, Type } from "./TablaTipos";

export enum TRelacion {
  And,
  Or,
  Mayor,
  Menor,
  MayorI,
  MenorI,
  Digual,
  Diferencia,
}

export class Relacionales extends Expresiones {
  constructor(
    private Izq: Expresiones,
    private Der: Expresiones,
    private tipo: TRelacion,
    linea: number,
    col: number
  ) {
    super(linea, col);
  }

  public execute(): Retornos {
    const DerV = this.Der.execute();
    const IzqV = this.Izq.execute();
    //TODO IF
    return { value: XPathResult, type: Type.BOOLEAN };
    // else return {value: null, type: Type.NULL}
  }
}
// >< >= <= ==
