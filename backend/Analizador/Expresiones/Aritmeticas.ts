import { Expresiones } from "./ExpresionBase";
import { Retornos, Type } from "./TablaTipos";
import { Errores } from "../Errores/Error";

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
    let Dominante = this.TipoDominante(IzqV.type, DerV.type);

    if (this.tipoA == TAritmetica.SUMAR) {
      if (Dominante == Type.INT) {
        return {
          value: IzqV.value + DerV.value,
          type: Type.INT,
        };
      } else if (Dominante == Type.STRING) {
        return {
          value: IzqV.value.toString() + DerV.value.toString(),
          type: Type.STRING,
        };
      }

      throw new Errores(this.linea, this.col, "Semantico", "Error en suma");
    }
    //-------------------- RESTA ------------------------------
    else if (this.tipoA == TAritmetica.RESTAR) {
      if (Dominante == Type.INT) {
        return {
          value: IzqV.value - DerV.value,
          type: Type.INT,
        };
      }

      throw new Errores(this.linea, this.col, "Semantico", "Error en resta");
    }

    //-------------------- Multiplicacion ------------------------------
    else if (this.tipoA == TAritmetica.MULTIPLICA) {
      if (Dominante == Type.INT) {
        return {
          value: IzqV.value * DerV.value,
          type: Type.INT,
        };
      }

      throw new Errores(
        this.linea,
        this.col,
        "Semantico",
        "Error en multiplicacion"
      );
    }

    //-------------------- Divide ------------------------------
    else if (this.tipoA == TAritmetica.DIVIDE) {
      if (Dominante == Type.INT) {
        if (DerV.value != 0) {
          return {
            value: IzqV.value / DerV.value,
            type: Type.INT,
          };
        }
      }

      throw new Errores(this.linea, this.col, "Semantico", "Error en Division");
    }

    return { value: "", type: Type.NULL };
  }
}
