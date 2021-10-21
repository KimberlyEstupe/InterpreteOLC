var fs = require("fs"); //Llama a la libreria fs, esta se encarga de los archivos
var parse = require("./analiza"); //llama al archivo analixador para ejcutarlo

fs.readFile("./Analizador/Gramatica/Entrada.txt", (err, data) => {
  if (err) throw err;

  parse.parse(data.toString());
}); // Esto es para abrir el archivo de entrada
//
