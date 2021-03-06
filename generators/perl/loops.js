

'use strict';

goog.provide('Blockly.PERL.loops');

goog.require('Blockly.PERL');


Blockly.PERL['controls_repeat_ext'] = function(block) {
  // Repeat n times.
  if (block.getField('TIMES')) {
    // Internal number.
    var repeats = String(Number(block.getFieldValue('TIMES')));
  } else {
    // External number.
    var repeats = Blockly.PERL.valueToCode(block, 'TIMES',
        Blockly.PERL.ORDER_ASSIGNMENT) || '0';
  }
  var branch = Blockly.PERL.statementToCode(block, 'DO');
  branch = Blockly.PERL.addLoopTrap(branch, block.id);
  var code = '';
  var loopVar = Blockly.PERL.variableDB_.getDistinctName(
      'count', Blockly.Variables.NAME_TYPE);
  var endVar = repeats;
  if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
    var endVar = Blockly.PERL.variableDB_.getDistinctName(
        'repeat_end', Blockly.Variables.NAME_TYPE);
    code += endVar + ' = ' + repeats + ';\n';
  }
  code += 'for (my ' + loopVar + ' = 0; ' +
      loopVar + ' < ' + endVar + '; ' +
      loopVar + '++) {\n' +
      branch + '}\n';
  return code;
};

Blockly.PERL['controls_repeat'] = Blockly.PERL['controls_repeat_ext'];

Blockly.PERL['controls_whileUntil'] = function(block) {
  // Do while/until loop.
  var until = block.getFieldValue('MODE') == 'UNTIL';
  var argument0 = Blockly.PERL.valueToCode(block, 'BOOL',
      until ? Blockly.PERL.ORDER_LOGICAL_NOT :
      Blockly.PERL.ORDER_NONE) || 'false';
  var branch = Blockly.PERL.statementToCode(block, 'DO');
  branch = Blockly.PERL.addLoopTrap(branch, block.id);
  if (until) {
    argument0 = '!' + argument0;
  }
  return 'while (' + argument0 + ') {\n' + branch + '}\n';
};

Blockly.PERL['controls_for'] = function(block) {
  // For loop.
  var variable0 = Blockly.PERL.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.PERL.valueToCode(block, 'FROM',
      Blockly.PERL.ORDER_ASSIGNMENT) || '0';
  var argument1 = Blockly.PERL.valueToCode(block, 'TO',
      Blockly.PERL.ORDER_ASSIGNMENT) || '0';
  var increment = Blockly.PERL.valueToCode(block, 'BY',
      Blockly.PERL.ORDER_ASSIGNMENT) || '1';
  var branch = Blockly.PERL.statementToCode(block, 'DO');
  branch = Blockly.PERL.addLoopTrap(branch, block.id);
  var code;
  if (Blockly.isNumber(argument0) && Blockly.isNumber(argument1) &&
      Blockly.isNumber(increment)) {
    // All arguments are simple numbers.
    var up = parseFloat(argument0) <= parseFloat(argument1);
    code = 'for (' + variable0 + ' = ' + argument0 + '; ' +
        variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' +
        variable0;
    var step = Math.abs(parseFloat(increment));
    if (step == 1) {
      code += up ? '++' : '--';
    } else {
      code += (up ? ' += ' : ' -= ') + step;
    }
    code += ') {\n' + branch + '}\n';
  } else {
    code = '';
    // Cache non-trivial values to variables to prevent repeated look-ups.
    var startVar = argument0;
    if (!argument0.match(/^\w+$/) && !Blockly.isNumber(argument0)) {
      startVar = Blockly.PERL.variableDB_.getDistinctName(
          variable0 + '_start', Blockly.Variables.NAME_TYPE);
      code += startVar + ' = ' + argument0 + ';\n';
    }
    var endVar = argument1;
    if (!argument1.match(/^\w+$/) && !Blockly.isNumber(argument1)) {
      var endVar = Blockly.PERL.variableDB_.getDistinctName(
          variable0 + '_end', Blockly.Variables.NAME_TYPE);
      code += endVar + ' = ' + argument1 + ';\n';
    }
    // Determine loop direction at start, in case one of the bounds
    // changes during loop execution.
    var incVar = Blockly.PERL.variableDB_.getDistinctName(
        variable0 + '_inc', Blockly.Variables.NAME_TYPE);
    code += incVar + ' = ';
    if (Blockly.isNumber(increment)) {
      code += Math.abs(increment) + ';\n';
    } else {
      code += 'abs(' + increment + ');\n';
    }
    code += 'if (' + startVar + ' > ' + endVar + ') {\n';
    code += Blockly.PERL.INDENT + incVar + ' = -' + incVar + ';\n';
    code += '}\n';
    code += 'for (' + variable0 + ' = ' + startVar + ';\n' +
        '     ' + incVar + ' >= 0 ? ' +
        variable0 + ' <= ' + endVar + ' : ' +
        variable0 + ' >= ' + endVar + ';\n' +
        '     ' + variable0 + ' += ' + incVar + ') {\n' +
        branch + '}\n';
  }
  return code;
};

Blockly.PERL['controls_forEach'] = function(block) {
  // For each loop.
  var variable0 = Blockly.PERL.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.PERL.valueToCode(block, 'LIST',
      Blockly.PERL.ORDER_ASSIGNMENT) || '';
  var branch = Blockly.PERL.statementToCode(block, 'DO');
  branch = Blockly.PERL.addLoopTrap(branch, block.id);
  var code = '';
  code += 'foreach ' + variable0 + ' (' + argument0 + ') {\n' + branch + '}\n';
  return code;
};

Blockly.PERL['controls_flow_statements'] = function(block) {
  // Flow statements: break, continue.
  switch (block.getFieldValue('FLOW')) {
    case 'BREAK':
      return 'last;\n';
    case 'CONTINUE':
      return 'next;\n';
  }
  throw 'Unknown flow statement.';
};
