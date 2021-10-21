/*------------------------------------------------IMPORTACIONES----------------------------------------------*/
%{
%}
/*------------------------------------------------Analisis Lexico----------------------------------------------*/
%lex
%options case-insensitive
%%
// "" %{return '';%}
"?"    %{return 'Ternario';%}

"true"  return "True_";
"false" return "False_";

"*"     %{return 'Multiplicacion';%}
"/"     %{return 'Division';%}
"-"     %{return 'Resta';%}
"+"     %{return 'Suma';%}
"^"     %{return 'Potencia';%}
"%"     %{return 'Modulo';%}
"++"    %{return 'Incremente';%}
"--"    %{return 'Decremento';%}

[(]     %{return 'ParA';%}
")"     %{return 'ParC';%}
"="     %{return 'Igual';%}
"{"     %{return 'LlaveA';%}
"}"     %{return 'LlaveC';%}
"["     %{return 'CorcheteA';%}
"]"     %{return 'CorcheteC';%}

";"     %{console.log('pcoma');return 'PComa';%}
","     %{return 'Coma';%}

"<"                     %{return 'Mayor';%}
">"                     %{return 'Menor';%}
"<="                    %{return 'MayorI';%}
">="                    %{return 'MenorI';%}
"=="                    %{return 'DIgual';%}
"!="                    %{return 'Diferencia';%}
"="                     %{return 'Igual';%}

[&][&]                  %{return 'And';%}
"||"                    %{return 'Or_';%}
'!'                     %{return 'Not';%}


[0-9]+("."[0-9]+)?\b                           %{console.log('TN: num ');return 'Numero';%}
[0-9]+\b                return 'Numero';
([a-zA-Z])[a-zA-Z0-9_]* return 'Id';


[ \t\r\n\f]+                                   { /*se ignoran*/ }
<<EOF>>     {  return 'EOF';   }
.	       { console.log("ERROR LEXICO: "+yytext); } 

/lex

/*------------------------------------ SINTACTICO ------------------------------------*/

// Presedencia
%left Or
%left And
%right Not
%left DIgual, Diferencia, Mayor, MayorI, Menor, MenorI
%left 'Suma', Resta
%left 'Division', 'Multiplicacion'
%right UMENOS

/*********** INICIO ***************/
%start INICIO
%% 

INICIO: EXPRESION PComa EOF { return $1; };//EOF SE REFIERE AL FIN DEL PROGRAMA


EXPRESION: 
  Resta EXPRESION %prec UMENOS
  |Not EXPRESION
  |EXPRESION Division EXPRESION 
  |EXPRESION Suma EXPRESION
  |EXPRESION Resta EXPRESION
  |EXPRESION Multiplicacion EXPRESION
  |EXPRESION And EXPRESION 
  |EXPRESION Or EXPRESION 
  |EXPRESION Mayor EXPRESION 
  |EXPRESION Menor EXPRESION 
  |EXPRESION MayorI EXPRESION 
  |EXPRESION MenorI EXPRESION 
  |EXPRESION Diferencia EXPRESION 
  |EXPRESION DIgual EXPRESION 
  |ParA EXPRESION ParC
  |Numero
  |Id
  |True_
  |False_; //TODO agreagar cadenas 
