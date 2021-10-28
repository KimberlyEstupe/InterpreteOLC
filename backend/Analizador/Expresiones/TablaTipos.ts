export enum Type {
  STRING = 0, //Cadena
  INT = 1, //entero
  BOOLEAN = 2,
  CHAR = 3, //Caracter
  DOBLE = 4,
  NULL = 5,
}

export type Retornos = {
  value: any;
  type: Type;
};

export const Tipos = [
  [Type.INT, Type.DOBLE, Type.INT, Type.INT, Type.STRING],
  [Type.DOBLE, Type.DOBLE, Type.DOBLE, Type.DOBLE, Type.STRING],
  [Type.INT, Type.DOBLE, Type.NULL, Type.NULL, Type.STRING],
  [Type.INT, Type.DOBLE, Type.NULL, Type.STRING, Type.STRING],
  [Type.STRING, Type.STRING, Type.STRING, Type.STRING, Type.STRING],
];
