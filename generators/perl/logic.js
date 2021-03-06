

'use strict';

goog.provide('Blockly.PERL.logic');

goog.require('Blockly.PERL');


Blockly.PERL['controls_if'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var argument = Blockly.PERL.valueToCode(block, 'IF' + n,
      Blockly.PERL.ORDER_NONE) || 0 ;
  var branch = Blockly.PERL.statementToCode(block, 'DO' + n);
  var code = 'if (' + argument + ') {\n' + branch + '}';
  for (n = 1; n <= block.elseifCount_; n++) {
    argument = Blockly.PERL.valueToCode(block, 'IF' + n,
        Blockly.PERL.ORDER_NONE) || 0 ;
    branch = Blockly.PERL.statementToCode(block, 'DO' + n);
    code += ' elsif (' + argument + ') {\n' + branch + '}';
  }
  if (block.elseCount_) {
    branch = Blockly.PERL.statementToCode(block, 'ELSE');
    code += ' else {\n' + branch + '}';
  }
  return code + '\n';
};

Blockly.PERL['logic_compare'] = function(block) {
  // Comparison operator.
  var OPERATORS = {
    'EQ': '==',
    'NEQ': '!=',
    'LT': '<',
    'LTE': '<=',
    'GT': '>',
    'GTE': '>='
  };
  var operator = OPERATORS[block.getFieldValue('OP')];
  var order = (operator == '==' || operator == '!=') ?
      Blockly.PERL.ORDER_EQUALITY : Blockly.PERL.ORDER_RELATIONAL;
  var argument0 = Blockly.PERL.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.PERL.valueToCode(block, 'B', order) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.PERL['logic_operation'] = function(block) {
  // Operations 'and', 'or'.
  var operator = (block.getFieldValue('OP') == 'AND') ? '&&' : '||';
  var order = (operator == '&&') ? Blockly.PERL.ORDER_LOGICAL_AND :
      Blockly.PERL.ORDER_LOGICAL_OR;
  var argument0 = Blockly.PERL.valueToCode(block, 'A', order);
  var argument1 = Blockly.PERL.valueToCode(block, 'B', order);
  if (!argument0 && !argument1) {
    // If there are no arguments, then the return value is false.
    argument0 = 0;
    argument1 = 0;
  } else {
    // Single missing arguments have no effect on the return value.
    var defaultArgument = (operator == '&&') ? 1 : 0;
    if (!argument0) {
      argument0 = defaultArgument;
    }
    if (!argument1) {
      argument1 = defaultArgument;
    }
  }
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.PERL['logic_negate'] = function(block) {
  // Negation.
  var order = Blockly.PERL.ORDER_LOGICAL_NOT;
  var argument0 = Blockly.PERL.valueToCode(block, 'BOOL', order) || 1 ;
  var code = '!' + argument0;
  return [code, order];
};

Blockly.PERL['logic_boolean'] = function(block) {
  // Boolean values true and false.
  var code = (block.getFieldValue('BOOL') == 'TRUE') ? 1 : 0 ;
  return [code, Blockly.PERL.ORDER_ATOMIC];
};

