export enum Type {
  ENTERO = 0,
  DOBLE = 1,
  BOOLEAN = 2,
  CARACTER = 3,
  CADENA = 4,
  NULL = 5,
}

export type Retornos = {
  value: any;
  type: Type;
};

export const Tipos = [
  [Type.ENTERO, Type.DOBLE, Type.ENTERO, Type.ENTERO, Type.CADENA],
  [Type.DOBLE, Type.DOBLE, Type.DOBLE, Type.DOBLE, Type.CADENA],
  [Type.ENTERO, Type.DOBLE, Type.NULL, Type.NULL, Type.CADENA],
  [Type.ENTERO, Type.DOBLE, Type.NULL, Type.CADENA, Type.CADENA],
  [Type.CADENA, Type.CADENA, Type.CADENA, Type.CADENA, Type.CADENA],
];
