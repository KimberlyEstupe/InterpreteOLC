import { Expresiones } from "./Expresion";
import { Retornos, Type } from "./Retornos";

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
    private left: Expresiones,
    private right: Expresiones,
    private tipo: TRelacion,
    line: number,
    col: number
  ) {
    super(line, col);
  }

  public execute(): Retornos {
    const leftValue = this.left.execute();

    const rightValue = this.right.execute();
    //TODO IF
    return { value: XPathResult, type: Type.BOOLEAN };
  }
}
