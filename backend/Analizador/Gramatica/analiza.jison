/*------------------------------------------------IMPORTACIONES----------------------------------------------*/
%{
    /*const {Aritmetica,TipoAritmetica} = require('../Expresiones/Aritmeticas')
    const {Relacional,TipoRelacional} = require('../Expresiones/Relacionales')
    const {Literal,TipoLiteral} = require('../Expresiones/Literal')*/
%}
/*------------------------------------------------Analisis Lexico----------------------------------------------*/
%lex
%options case-insensitive
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


"<="                    %{return 'MayorI';%}
">="                    %{return 'MenorI';%}
"=="                    %{return 'DIgual';%}
"!="                    %{return 'Diferencia';%}
"<"                     %{return 'Mayor';%}
">"                     %{return 'Menor';%}
"="                     %{return 'Igual';%}

[&][&]                  %{return 'And';%}
"||"                    %{return 'Or_';%}
'!'                     %{return 'Not';%}

[0-9]+\b                    %{return 'Entero';%}
[0-9]+("."[0-9]+)?\b        %{return 'Double';%}
([a-zA-Z])[a-zA-Z0-9_]*     %{return 'Id';%}


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
  Resta EXPRESION %prec UMENOS        {}
  |Not EXPRESION                      {}
  |EXPRESION Division EXPRESION       {}
  |EXPRESION Suma EXPRESION           {}
  |EXPRESION Resta EXPRESION          {}
  |EXPRESION Multiplicacion EXPRESION {}
  |EXPRESION And EXPRESION            {}
  |EXPRESION Or EXPRESION             {}
  |EXPRESION Mayor EXPRESION          {} 
  |EXPRESION Menor EXPRESION          {} 
  |EXPRESION MayorI EXPRESION         {} 
  |EXPRESION MenorI EXPRESION         {}
  |EXPRESION Diferencia EXPRESION     {}
  |EXPRESION DIgual EXPRESION         {} 
  |ParA EXPRESION ParC                {}
  |Double                             {$$ = new Literal($1, TipoLiteral.DOUBLE, @1first_line, @1first_column)}
  |Entero                             {$$ = new Literal($1, TipoLiteral.ENTERO, @1first_line, @1first_column)}
  |Id                                 {$$ = new Literal($1, TipoLiteral.CADENA, @1first_line, @1first_column)}
  |True_                              {$$ = new Literal($1, TipoLiteral.BOOLEAN, @1first_line, @1first_column)}
  |False_                             {$$ = new Literal($1, TipoLiteral.BOOLEAN, @1first_line, @1first_column)}
  ; //TODO agreagar cadenas 
