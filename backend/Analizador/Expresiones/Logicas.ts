import { Expresiones } from "./ExpresionBase";
import { Retornos, Type } from "./TablaTipos";
import { Errores } from "../Errores/Error";

export enum TLogicas {
  AND,
  OR,
  NOT,
}

export abstract class Logicas extends Expresiones {
  constructor(
    private Izq: Expresiones,
    private Der: Expresiones,
    private tipoL: TLogicas,
    linea: number,
    col: number
  ) {
    super(linea, col);
  }

  public execute(): Retornos {
    const DerV = this.Der.execute();
    const IzqV = this.Izq.execute();

    if (this.tipoL == TLogicas.NOT) {
      if (IzqV.value == Type.BOOLEAN) {
        return { value: !IzqV.value, type: Type.BOOLEAN };
      }
      throw new Errores(
        this.linea,
        this.col,
        "Semantico",
        "La expresion izquierda no es booleana"
      );
    } else if (this.tipoL == TLogicas.AND) {
      if (IzqV.value == Type.BOOLEAN) {
        if (DerV.value == Type.BOOLEAN) {
          return { value: IzqV.value && DerV.value, type: Type.BOOLEAN };
        }
        throw new Errores(
          this.linea,
          this.col,
          "Semantico",
          "La expresion derecha no e booleana "
        );
      }
      throw new Errores(
        this.linea,
        this.col,
        "Semantico",
        "La expresion izquierda no es booleana"
      );
    } else if (this.tipoL == TLogicas.OR) {
      if (IzqV.value == Type.BOOLEAN) {
        if (DerV.value == Type.BOOLEAN) {
          return { value: IzqV.value || DerV.value, type: Type.BOOLEAN };
        }
        throw new Errores(
          this.linea,
          this.col,
          "Semantico",
          "La expresion derecha no e booleana "
        );
      }
      throw new Errores(
        this.linea,
        this.col,
        "Semantico",
        "La expresion izquierda no es booleana"
      );
    }
    return { value: "", type: Type.NULL };
  }
}
