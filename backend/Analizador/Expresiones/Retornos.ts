export enum Type {
  ENTERO = 0,
  DOBLE = 1,
  BOOLEAN = 2,
  CARACTER = 3,
  CADENA = 4,
}

export type Retornos = {
  value: any;
  type: Type;
};

export const Tipos = [
  [Type.ENTERO, Type.DOBLE, Type.ENTERO, Type.ENTERO, Type.CADENA],
  [Type.DOBLE, Type.DOBLE, Type.DOBLE, Type.DOBLE, Type.CADENA],
  [Type.ENTERO, Type.DOBLE, -1, -1, Type.CADENA],
  [Type.ENTERO, Type.DOBLE, -1, Type.CADENA, Type.CADENA],
  [Type.CADENA, Type.CADENA, Type.CADENA, Type.CADENA, Type.CADENA],
];
