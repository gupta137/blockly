// Do not edit this file; automatically generated by build.py.
'use strict';

Blockly.PERL=new Blockly.Generator("PERL");Blockly.PERL.addReservedWords("SANDRA_WAS_HERE");Blockly.PERL.ORDER_ATOMIC=0;Blockly.PERL.ORDER_CLONE=1;Blockly.PERL.ORDER_NEW=1;Blockly.PERL.ORDER_MEMBER=2;Blockly.PERL.ORDER_FUNCTION_CALL=2;Blockly.PERL.ORDER_INCREMENT=3;Blockly.PERL.ORDER_DECREMENT=3;Blockly.PERL.ORDER_LOGICAL_NOT=4;Blockly.PERL.ORDER_BITWISE_NOT=4;Blockly.PERL.ORDER_UNARY_PLUS=4;Blockly.PERL.ORDER_UNARY_NEGATION=4;Blockly.PERL.ORDER_POWER=5;Blockly.PERL.ORDER_MODULUS=5;
Blockly.PERL.ORDER_MULTIPLICATION=7;Blockly.PERL.ORDER_DIVISION=7;Blockly.PERL.ORDER_ADDITION=7;Blockly.PERL.ORDER_SUBTRACTION=7;Blockly.PERL.ORDER_BITWISE_SHIFT=8;Blockly.PERL.ORDER_RELATIONAL=9;Blockly.PERL.ORDER_IN=9;Blockly.PERL.ORDER_INSTANCEOF=9;Blockly.PERL.ORDER_EQUALITY=10;Blockly.PERL.ORDER_BITWISE_AND=11;Blockly.PERL.ORDER_BITWISE_XOR=12;Blockly.PERL.ORDER_BITWISE_OR=13;Blockly.PERL.ORDER_CONDITIONAL=14;Blockly.PERL.ORDER_ASSIGNMENT=15;Blockly.PERL.ORDER_LOGICAL_AND=16;
Blockly.PERL.ORDER_LOGICAL_OR=17;Blockly.PERL.ORDER_COMMA=18;Blockly.PERL.ORDER_NONE=99;
Blockly.PERL.init=function(a){Blockly.PERL.definitions_=Object.create(null);Blockly.PERL.functionNames_=Object.create(null);Blockly.PERL.variableDB_?Blockly.PERL.variableDB_.reset():Blockly.PERL.variableDB_=new Blockly.Names(Blockly.PERL.RESERVED_WORDS_,"$");var b=[];a=Blockly.Variables.allVariables(a);for(var c=0;c<a.length;c++)b[c]="my "+Blockly.PERL.variableDB_.getName(a[c],Blockly.Variables.NAME_TYPE)+";";Blockly.PERL.definitions_.variables=b.join("\n")};
Blockly.PERL.finish=function(a){var b=[],c;for(c in Blockly.PERL.definitions_)b.push(Blockly.PERL.definitions_[c]);delete Blockly.PERL.definitions_;delete Blockly.PERL.functionNames_;Blockly.PERL.variableDB_.reset();return b.join("\n\n")+"\n\n\n"+a};Blockly.PERL.scrubNakedValue=function(a){return a+";\n"};Blockly.PERL.quote_=function(a){return'"'+a+'"'};
Blockly.PERL.scrub_=function(a,b){var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();d&&(c+=Blockly.PERL.prefixLines(d,"# ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.PERL.allNestedComments(d))&&(c+=Blockly.PERL.prefixLines(d,"# "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=Blockly.PERL.blockToCode(e);return c+b+e};Blockly.PERL.texts={};Blockly.PERL.text=function(a){return[Blockly.PERL.quote_(a.getFieldValue("TEXT")),Blockly.PERL.ORDER_ATOMIC]};Blockly.PERL.text_append=function(a){var b=Blockly.PERL.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);a=Blockly.PERL.valueToCode(a,"TEXT",Blockly.PERL.ORDER_NONE)||"''";return b+" .= "+a+";\n"};Blockly.PERL.text_print=function(a){return"print("+(Blockly.PERL.valueToCode(a,"TEXT",Blockly.PERL.ORDER_NONE)||"''")+");\n"};Blockly.PERL.procedures={};
Blockly.PERL.procedures_defreturn=function(a){for(var b=Blockly.Variables.allVariables(a),c=b.length-1;0<=c;c--){var d=b[c];-1==a.arguments_.indexOf(d)?b[c]=Blockly.PERL.variableDB_.getName(d,Blockly.Variables.NAME_TYPE):b.splice(c,1)}b.length&&b.join(", ");b=Blockly.PERL.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE);c=Blockly.PERL.statementToCode(a,"STACK");Blockly.PERL.STATEMENT_PREFIX&&(c=Blockly.PERL.prefixLines(Blockly.PERL.STATEMENT_PREFIX.replace(/%1/g,"'"+a.id+
"'"),Blockly.PERL.INDENT)+c);Blockly.PERL.INFINITE_LOOP_TRAP&&(c=Blockly.PERL.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+a.id+"'")+c);(d=Blockly.PERL.valueToCode(a,"RETURN",Blockly.PERL.ORDER_NONE)||"")&&(d="  return "+d+";\n");for(var e=[],f=0;f<a.arguments_.length;f++)e[f]="  "+Blockly.PERL.variableDB_.getName(a.arguments_[f],Blockly.Variables.NAME_TYPE)+" = shift;\n";c="sub "+b+" {\n"+e.join("")+c+d+"}";c=Blockly.PERL.scrub_(a,c);Blockly.PERL.definitions_[b]=c;return null};
Blockly.PERL.procedures_defnoreturn=Blockly.PERL.procedures_defreturn;Blockly.PERL.procedures_callreturn=function(a){for(var b=Blockly.PERL.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.PERL.valueToCode(a,"ARG"+d,Blockly.PERL.ORDER_COMMA)||"";return[b+"("+c.join(", ")+")",Blockly.PERL.ORDER_FUNCTION_CALL]};
Blockly.PERL.procedures_callnoreturn=function(a){for(var b=Blockly.PERL.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.PERL.valueToCode(a,"ARG"+d,Blockly.PERL.ORDER_COMMA)||"";return b+"("+c.join(", ")+");\n"};
Blockly.PERL.procedures_ifreturn=function(a){var b="if ("+(Blockly.PERL.valueToCode(a,"CONDITION",Blockly.PERL.ORDER_NONE)||0)+") {\n";a.hasReturnValue_?(a=Blockly.PERL.valueToCode(a,"VALUE",Blockly.PERL.ORDER_NONE)||"",b+="  return "+a+";\n"):b+="  return;\n";return b+"}\n"};Blockly.PERL.loops={};
Blockly.PERL.controls_repeat_ext=function(a){var b=a.getField("TIMES")?String(Number(a.getFieldValue("TIMES"))):Blockly.PERL.valueToCode(a,"TIMES",Blockly.PERL.ORDER_ASSIGNMENT)||"0",c=Blockly.PERL.statementToCode(a,"DO"),c=Blockly.PERL.addLoopTrap(c,a.id);a="";var d=Blockly.PERL.variableDB_.getDistinctName("count",Blockly.Variables.NAME_TYPE),e=b;b.match(/^\w+$/)||Blockly.isNumber(b)||(e=Blockly.PERL.variableDB_.getDistinctName("repeat_end",Blockly.Variables.NAME_TYPE),a+=e+" = "+b+";\n");return a+
("for (my "+d+" = 0; "+d+" < "+e+"; "+d+"++) {\n"+c+"}\n")};Blockly.PERL.controls_repeat=Blockly.PERL.controls_repeat_ext;Blockly.PERL.controls_whileUntil=function(a){var b="UNTIL"==a.getFieldValue("MODE"),c=Blockly.PERL.valueToCode(a,"BOOL",b?Blockly.PERL.ORDER_LOGICAL_NOT:Blockly.PERL.ORDER_NONE)||"false",d=Blockly.PERL.statementToCode(a,"DO"),d=Blockly.PERL.addLoopTrap(d,a.id);b&&(c="!"+c);return"while ("+c+") {\n"+d+"}\n"};
Blockly.PERL.controls_for=function(a){var b=Blockly.PERL.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),c=Blockly.PERL.valueToCode(a,"FROM",Blockly.PERL.ORDER_ASSIGNMENT)||"0",d=Blockly.PERL.valueToCode(a,"TO",Blockly.PERL.ORDER_ASSIGNMENT)||"0",e=Blockly.PERL.valueToCode(a,"BY",Blockly.PERL.ORDER_ASSIGNMENT)||"1",f=Blockly.PERL.statementToCode(a,"DO"),f=Blockly.PERL.addLoopTrap(f,a.id);if(Blockly.isNumber(c)&&Blockly.isNumber(d)&&Blockly.isNumber(e)){var g=parseFloat(c)<=
parseFloat(d);a="for ("+b+" = "+c+"; "+b+(g?" <= ":" >= ")+d+"; "+b;b=Math.abs(parseFloat(e));a=(1==b?a+(g?"++":"--"):a+((g?" += ":" -= ")+b))+(") {\n"+f+"}\n")}else a="",g=c,c.match(/^\w+$/)||Blockly.isNumber(c)||(g=Blockly.PERL.variableDB_.getDistinctName(b+"_start",Blockly.Variables.NAME_TYPE),a+=g+" = "+c+";\n"),c=d,d.match(/^\w+$/)||Blockly.isNumber(d)||(c=Blockly.PERL.variableDB_.getDistinctName(b+"_end",Blockly.Variables.NAME_TYPE),a+=c+" = "+d+";\n"),d=Blockly.PERL.variableDB_.getDistinctName(b+
"_inc",Blockly.Variables.NAME_TYPE),a+=d+" = ",a=Blockly.isNumber(e)?a+(Math.abs(e)+";\n"):a+("abs("+e+");\n"),a+="if ("+g+" > "+c+") {\n",a+=Blockly.PERL.INDENT+d+" = -"+d+";\n",a+="}\n",a+="for ("+b+" = "+g+";\n     "+d+" >= 0 ? "+b+" <= "+c+" : "+b+" >= "+c+";\n     "+b+" += "+d+") {\n"+f+"}\n";return a};
Blockly.PERL.controls_forEach=function(a){var b=Blockly.PERL.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),c=Blockly.PERL.valueToCode(a,"LIST",Blockly.PERL.ORDER_ASSIGNMENT)||"",d=Blockly.PERL.statementToCode(a,"DO"),d=Blockly.PERL.addLoopTrap(d,a.id);return""+("foreach "+b+" ("+c+") {\n"+d+"}\n")};Blockly.PERL.controls_flow_statements=function(a){switch(a.getFieldValue("FLOW")){case "BREAK":return"last;\n";case "CONTINUE":return"next;\n"}throw"Unknown flow statement.";};Blockly.PERL.lists={};Blockly.PERL.lists_create_empty=function(a){return["()",Blockly.PERL.ORDER_ATOMIC]};Blockly.PERL.lists_create_with=function(a){for(var b=Array(a.itemCount_),c=0;c<a.itemCount_;c++)b[c]=Blockly.PERL.valueToCode(a,"ADD"+c,Blockly.PERL.ORDER_COMMA)||"";b="("+b.join(", ")+")";return[b,Blockly.PERL.ORDER_ATOMIC]};Blockly.PERL.lists_length=function(a){return["scalar ("+(Blockly.PERL.valueToCode(a,"VALUE",Blockly.PERL.ORDER_FUNCTION_CALL)||"''")+");",Blockly.PERL.ORDER_FUNCTION_CALL]};
Blockly.PERL.lists_isEmpty=function(a){return["! "+(Blockly.PERL.valueToCode(a,"VALUE",Blockly.PERL.ORDER_FUNCTION_CALL)||"array()")+")",Blockly.PERL.ORDER_FUNCTION_CALL]};Blockly.PERL.variables={};Blockly.PERL.variables_get=function(a){return[Blockly.PERL.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),Blockly.PERL.ORDER_ATOMIC]};Blockly.PERL.variables_set=function(a){var b=Blockly.PERL.valueToCode(a,"VALUE",Blockly.PERL.ORDER_ASSIGNMENT)||"0";return Blockly.PERL.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+" = "+b+";\n"};Blockly.PERL.math={};Blockly.PERL.math_number=function(a){a=parseFloat(a.getFieldValue("NUM"));Infinity==a?a="inf":-Infinity==a&&(a="-inf");return[a,Blockly.PERL.ORDER_ATOMIC]};
Blockly.PERL.math_arithmetic=function(a){var b={ADD:[" + ",Blockly.PERL.ORDER_ADDITION],MINUS:[" - ",Blockly.PERL.ORDER_SUBTRACTION],MULTIPLY:[" * ",Blockly.PERL.ORDER_MULTIPLICATION],DIVIDE:[" / ",Blockly.PERL.ORDER_DIVISION],POWER:[" ** ",Blockly.PERL.ORDER_POWER]}[a.getFieldValue("OP")],c=b[0],b=b[1],d=Blockly.PERL.valueToCode(a,"A",b)||"0";a=Blockly.PERL.valueToCode(a,"B",b)||"0";return[d+c+a,b]};
Blockly.PERL.math_single=function(a){var b=a.getFieldValue("OP"),c;if("NEG"==b)return a=Blockly.PERL.valueToCode(a,"NUM",Blockly.PERL.ORDER_UNARY_NEGATION)||"0","-"==a[0]&&(a=" "+a),["-"+a,Blockly.PERL.ORDER_UNARY_NEGATION];a="SIN"==b||"COS"==b||"TAN"==b?Blockly.PERL.valueToCode(a,"NUM",Blockly.PERL.ORDER_DIVISION)||"0":Blockly.PERL.valueToCode(a,"NUM",Blockly.PERL.ORDER_NONE)||"0";switch(b){case "ABS":c="abs("+a+")";break;case "ROOT":c="sqrt("+a+")";break;case "LN":c="log("+a+")";break;case "EXP":c=
"exp("+a+")";break;case "POW10":c="10 ** "+a+")";break;case "ROUND":c="round("+a+")";break;case "ROUNDUP":c="ceil("+a+")";break;case "ROUNDDOWN":c="floor("+a+")";break;case "SIN":c="sin("+a+" / 180 * pi)";break;case "COS":c="cos("+a+" / 180 * pi)";break;case "TAN":c="tan("+a+" / 180 * pi)"}if(c)return[c,Blockly.PERL.ORDER_FUNCTION_CALL];switch(b){case "LOG10":c="log("+a+") / log(10)";break;case "ASIN":c="asin("+a+") / pi * 180";break;case "ACOS":c="acos("+a+") / pi * 180";break;case "ATAN":c="atan("+
a+") / pi * 180";break;default:throw"Unknown math operator: "+b;}return[c,Blockly.PERL.ORDER_DIVISION]};Blockly.PERL.math_constant=function(a){return{PI:["pi",Blockly.PERL.ORDER_ATOMIC],E:["exp(1)",Blockly.PERL.ORDER_ATOMIC],GOLDEN_RATIO:["(1 + sqrt(5)) / 2",Blockly.PERL.ORDER_DIVISION],SQRT2:["sqrt(2)",Blockly.PERL.ORDER_ATOMIC],SQRT1_2:["sqrt(1/2)",Blockly.PERL.ORDER_ATOMIC],INFINITY:["inf",Blockly.PERL.ORDER_ATOMIC]}[a.getFieldValue("CONSTANT")]};
Blockly.PERL.math_number_property=function(a){var b=Blockly.PERL.valueToCode(a,"NUMBER_TO_CHECK",Blockly.PERL.ORDER_MODULUS)||"0",c=a.getFieldValue("PROPERTY"),d;if("PRIME"==c)return[Blockly.PERL.provideFunction_("math_isPrime",["sub "+Blockly.PERL.FUNCTION_NAME_PLACEHOLDER_+" {","  # https://en.wikipedia.org/wiki/Primality_test#Naive_methods","  my $n = shift;","  if ($n == 2 || $n == 3) {","    return true;","  }","  # False if n is NaN, negative, or not whole.","  # And false if n is divisible by 2 or 3.",
"  # use Scalar::Util qw(looks_like_number);","  # We are consciously considering 1 to be a prime !!!","  if (!looks_like_number($n) || $_n< 1 || $n % 1 != 0 || $n % 2 == 0 || $n % 3 == 0) {","    return 0;","  }","  # Check all the numbers of form 6k +/- 1, up to sqrt(n).","  for (my $x = 6; $x <= sqrt($n) + 1; $x += 6) {","    if ($n % ($x - 1) == 0 || $n % ($x + 1) == 0) {","      return 0;","    }","  }","  return 1;","}"])+"("+b+")",Blockly.JavaScript.ORDER_FUNCTION_CALL];switch(c){case "EVEN":d=
b+" % 2 == 0";break;case "ODD":d=b+" % 2 == 1";break;case "WHOLE":d="isint("+b+")";break;case "POSITIVE":d=b+" > 0";break;case "NEGATIVE":d=b+" < 0";break;case "DIVISIBLE_BY":a=Blockly.PERL.valueToCode(a,"DIVISOR",Blockly.PERL.ORDER_MODULUS)||"0",d=b+" % "+a+" == 0"}return[d,Blockly.PERL.ORDER_EQUALITY]};
Blockly.PERL.math_change=function(a){var b=Blockly.PERL.valueToCode(a,"DELTA",Blockly.PERL.ORDER_ADDITION)||"0";return Blockly.PERL.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+" += "+b+";\n"};Blockly.PERL.math_round=Blockly.PERL.math_single;Blockly.PERL.math_trig=Blockly.PERL.math_single;
Blockly.PERL.math_on_list=function(a){var b=a.getFieldValue("OP");switch(b){case "SUM":a=Blockly.PERL.valueToCode(a,"LIST",Blockly.PERL.ORDER_FUNCTION_CALL)||"array()";a="eval join ', "+a+"";break;case "MIN":a=Blockly.PERL.valueToCode(a,"LIST",Blockly.PERL.ORDER_FUNCTION_CALL)||"array()";a="min("+a+")";break;case "MAX":a=Blockly.PERL.valueToCode(a,"LIST",Blockly.PERL.ORDER_FUNCTION_CALL)||"array()";a="max("+a+")";break;default:throw"Unknown operator: "+b;}return[a,Blockly.PERL.ORDER_FUNCTION_CALL]};
Blockly.PERL.math_modulo=function(a){var b=Blockly.PERL.valueToCode(a,"DIVIDEND",Blockly.PERL.ORDER_MODULUS)||"0";a=Blockly.PERL.valueToCode(a,"DIVISOR",Blockly.PERL.ORDER_MODULUS)||"0";return[b+" % "+a,Blockly.PERL.ORDER_MODULUS]};
Blockly.PERL.math_constrain=function(a){var b=Blockly.PERL.valueToCode(a,"VALUE",Blockly.PERL.ORDER_COMMA)||"0",c=Blockly.PERL.valueToCode(a,"LOW",Blockly.PERL.ORDER_COMMA)||"0";a=Blockly.PERL.valueToCode(a,"HIGH",Blockly.PERL.ORDER_COMMA)||"inf";return["min(max("+b+", "+c+"), "+a+")",Blockly.PERL.ORDER_FUNCTION_CALL]};
Blockly.PERL.math_random_int=function(a){var b=Blockly.PERL.valueToCode(a,"FROM",Blockly.PERL.ORDER_COMMA)||"0";a=Blockly.PERL.valueToCode(a,"TO",Blockly.PERL.ORDER_COMMA)||"0";return[b+" + int(rand("+a+" - "+b+"))",Blockly.PERL.ORDER_FUNCTION_CALL]};Blockly.PERL.math_random_float=function(a){return["rand()",Blockly.PERL.ORDER_FUNCTION_CALL]};Blockly.PERL.logic={};Blockly.PERL.controls_if=function(a){for(var b=0,c=Blockly.PERL.valueToCode(a,"IF"+b,Blockly.PERL.ORDER_NONE)||0,d=Blockly.PERL.statementToCode(a,"DO"+b),e="if ("+c+") {\n"+d+"}",b=1;b<=a.elseifCount_;b++)c=Blockly.PERL.valueToCode(a,"IF"+b,Blockly.PERL.ORDER_NONE)||0,d=Blockly.PERL.statementToCode(a,"DO"+b),e+=" elsif ("+c+") {\n"+d+"}";a.elseCount_&&(d=Blockly.PERL.statementToCode(a,"ELSE"),e+=" else {\n"+d+"}");return e+"\n"};
Blockly.PERL.logic_compare=function(a){var b={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[a.getFieldValue("OP")],c="=="==b||"!="==b?Blockly.PERL.ORDER_EQUALITY:Blockly.PERL.ORDER_RELATIONAL,d=Blockly.PERL.valueToCode(a,"A",c)||"0";a=Blockly.PERL.valueToCode(a,"B",c)||"0";return[d+" "+b+" "+a,c]};
Blockly.PERL.logic_operation=function(a){var b="AND"==a.getFieldValue("OP")?"&&":"||",c="&&"==b?Blockly.PERL.ORDER_LOGICAL_AND:Blockly.PERL.ORDER_LOGICAL_OR,d=Blockly.PERL.valueToCode(a,"A",c);a=Blockly.PERL.valueToCode(a,"B",c);if(d||a){var e="&&"==b?1:0;d||(d=e);a||(a=e)}else a=d=0;return[d+" "+b+" "+a,c]};Blockly.PERL.logic_negate=function(a){var b=Blockly.PERL.ORDER_LOGICAL_NOT;return["!"+(Blockly.PERL.valueToCode(a,"BOOL",b)||1),b]};
Blockly.PERL.logic_boolean=function(a){return["TRUE"==a.getFieldValue("BOOL")?1:0,Blockly.PERL.ORDER_ATOMIC]};