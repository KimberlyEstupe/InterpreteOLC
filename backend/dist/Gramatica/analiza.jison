/*------------------------------------------------IMPORTACIONES----------------------------------------------*/
%{
    const {Relacionales,TRelacion} = require('../Expresiones/Relacionales')
    const {Literales,TLiteral} = require('../Expresiones/Literales')
    const {Logicas, TLogicas} = require('../Expresiones/Logicas')
    const { Errores } = require('../Errores/Error')
    const {Aritmeticas,TAritmetica} = require('../Expresiones/Aritmeticas')
%}
/*------------------------------------------------Analisis Lexico----------------------------------------------*/
%lex
%options case-insensitive
LCADENA =[\"\“] [^\"\”\'\n]* [\"\”\n]
LENTERO = [0-9]+\b 
LDOUBLE = [0-9]+("."[0-9]+)?\b 
LCARACTER = [\'][^\'][\']
ID = ([a-zA-Z])[a-zA-Z0-9_]* 
%%
// "" %{return '';%}
"?"    %{return 'Ternario';%}

"true"  return "True_";
"false" return "False_";

//TODO resto de palabras severvadas 

"++"    %{return 'Incremente';%}
"--"    %{return 'Decremento';%}
"*"     %{return 'Multiplicacion';%}
"/"     %{return 'Division';%}
"-"     %{return 'Resta';%}
"+"     %{return 'Suma';%}
"^"     %{return 'Potencia';%}
"%"     %{return 'Modulo';%}


[(]     %{return 'ParA';%}
")"     %{return 'ParC';%}
"{"     %{return 'LlaveA';%}
"}"     %{return 'LlaveC';%}
"["     %{return 'CorcheteA';%}
"]"     %{return 'CorcheteC';%}

";"     %{console.log('pcoma');return 'PComa';%}
","     %{return 'Coma';%}
':'     %{return 'DPuntos';%}


"<="                    %{return 'MayorI';%}
">="                    %{return 'MenorI';%}
"=="                    %{return 'DIgual';%}
"!="                    %{return 'Diferencia';%}
"<"                     %{return 'Mayor';%}
">"                     %{return 'Menor';%}
"="                     %{return 'Igual';%}

[&][&]                  %{return 'And';%}
"||"                    %{return 'Or';%}
'!'                     %{return 'Not';%}

{LCADENA}         %{return 'Cadena';%}
{LENTERO}         %{return 'Entero';%}
{LDOUBLE}         %{return 'Double';%}
{LCARACTE}        %{return 'Caracter';%}
{ID}              %{return 'Id';%}



[ \t\r\n\f]+                                   { /*se ignoran*/ }
<<EOF>>     {  return 'EOF';   }
.	       { throw new Errores(yylloc.first_line, yylloc.first_column, "Lexico", "No fue reconocida: "+yytext);console.log("ERROR LEXICO: "+yytext); } 

/lex

/*------------------------------------ SINTACTICO ------------------------------------*/

// Presedencia
//TODO falta modulo, potencia
%left 'Ternario', 'DPuntos'
%left 'Or'
%left 'And'
%right 'Not'
%left 'Diferencia','Igual'
%left 'DIgual',  'Mayor', 'MayorI', 'Menor', MenorI
%left 'Suma', Resta
%left 'Division', 'Multiplicacion'
%left UMENOS
%right 'Not'

/*********** INICIO ***************/
%start INICIO
%% 

INICIO: EXPRESION PComa EOF { console.log($1); return $1; };//EOF SE REFIERE AL FIN DEL PROGRAMA


EXPRESION
  : Resta EXPRESION %prec UMENOS      {$$ = new Aritmeticas(0, $3, TipoAritmetica.RESTAR, yylloc.first_line, yylloc.first_column)}
  |Not EXPRESION                      {$$ = new Logicas($1, 0, TLogicas.OR, yylloc.first_line, yylloc.first_column)}
  |EXPRESION Division EXPRESION       {$$ = new Aritmeticas($1, $3, TipoAritmetica.DIVIDE, yylloc.first_line, yylloc.first_column)}
  |EXPRESION Suma EXPRESION           {$$ = new Aritmeticas($1, $3, TipoAritmetica.SUMAR, yylloc.first_line, yylloc.first_column)}
  |EXPRESION Resta EXPRESION          {$$ = new Aritmeticas($1, $3, TipoAritmetica.RESTAR, yylloc.first_line, yylloc.first_column)}
  |EXPRESION Multiplicacion EXPRESION {$$ = new Aritmeticas($1, $3, TipoAritmetica.MULTIPLICA, yylloc.first_line, yylloc.first_column)}
  |EXPRESION And EXPRESION            {$$ = new Logicas ($1, $3, TLogicas.AND, yylloc.first_line, yylloc.first_column)}
  |EXPRESION Or EXPRESION             {$$ = new Logicas($1, $3, TLogicas.OR, yylloc.first_line, yylloc.first_column)}
  |EXPRESION Mayor EXPRESION          {$$ = new Relacionales($1, $3, TRelacion.MAYOR, yylloc.first_line, yylloc.first_column)} 
  |EXPRESION Menor EXPRESION          {$$ = new Relacionales($1, $3, TRelacion.MENOR, yylloc.first_line, yylloc.first_column)} 
  |EXPRESION MayorI EXPRESION         {$$ = new Relacionales($1, $3, TRelacion.MAYORI, yylloc.first_line, yylloc.first_column)} 
  |EXPRESION MenorI EXPRESION         {$$ = new Relacionales($1, $3, TRelacion.MENORI, yylloc.first_line, yylloc.first_column)}
  |EXPRESION Diferencia EXPRESION     {$$ = new Relacionales($1, $3, TRelacion.DIFERENCIA, yylloc.first_line, yylloc.first_column)}
  |EXPRESION DIgual EXPRESION         {$$ = new Relacionales($1, $3, TRelacion.DIGUAL, yylloc.first_line, yylloc.first_column)} 
  |ParA EXPRESION ParC                {$$ = $2}
  |Double                             {$$ = new Literales($1, TLiteral.DOBLE, yylloc.first_line, yylloc.first_column)}
  |Entero                             {$$ = new Literales($1, TLiteral.INT, yylloc.first_line, yylloc.first_column)}
  |True_                              {$$ = new Literales($1, TLiteral.BOOLEAN, yylloc.first_line, yylloc.first_column)}
  |False_                             {$$ = new Literales($1, TLiteral.BOOLEAN, yylloc.first_line, yylloc.first_column)}
  |Caracter                           {$$ = new Literales($1, TLiteral.CHAR, yylloc.first_line, yylloc.first_column)}
  |Cadena                             {$$ = new Literales($1, TLiteral.STRING, yylloc.first_line, yylloc.first_column)}
; 
//pagare