import { Expresiones } from "./ExpresionBase";
import { Retornos, Type } from "./TablaTipos";
import { Errores } from "../Errores/Error";

export enum TRelacion {
  MAYOR,
  MENOR,
  MAYORI,
  MENORI,
  DIGUAL,
  DIFERENCIA,
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

    if (this.tipo == TRelacion.DIGUAL) {
      return { value: IzqV.value == DerV.value, type: Type.BOOLEAN };
    } else if (this.tipo == TRelacion.MAYOR) {
      return { value: IzqV.value > DerV.value, type: Type.BOOLEAN };
    } else if (this.tipo == TRelacion.MENOR) {
      return { value: IzqV.value < DerV.value, type: Type.BOOLEAN };
    } else if (this.tipo == TRelacion.MAYORI) {
      return { value: IzqV.value >= DerV.value, type: Type.BOOLEAN };
    } else if (this.tipo == TRelacion.MENORI) {
      return { value: IzqV.value <= DerV.value, type: Type.BOOLEAN };
    } else if (this.tipo == TRelacion.DIFERENCIA) {
      return { value: IzqV.value != DerV.value, type: Type.BOOLEAN };
    }
    return { value: "", type: Type.NULL };
  }
}
// >< >= <= ==
