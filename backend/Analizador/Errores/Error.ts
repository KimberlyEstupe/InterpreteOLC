export class Errores {
  constructor(
    public linea: number,
    public columna: number,
    public tipo: string,
    public mensaje: string
  ) {}
}
