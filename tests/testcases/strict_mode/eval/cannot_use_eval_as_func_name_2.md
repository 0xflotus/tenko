# Tenko parser test case

- Path: tests/testcases/strict_mode/eval/cannot_use_eval_as_func_name_2.md

> :: strict mode : eval
>
> ::> cannot use eval as func name 2

## Input

`````js
var eval = x;
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
ast: {
  type: 'Program',
  loc:{start:{line:1,column:0},end:{line:1,column:13},source:''},
  body: [
    {
      type: 'VariableDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:13},source:''},
      kind: 'var',
      declarations: [
        {
          type: 'VariableDeclarator',
          loc:{start:{line:1,column:4},end:{line:1,column:12},source:''},
          id: {
            type: 'Identifier',
            loc:{start:{line:1,column:4},end:{line:1,column:8},source:''},
            name: 'eval'
          },
          init: {
            type: 'Identifier',
            loc:{start:{line:1,column:11},end:{line:1,column:12},source:''},
            name: 'x'
          }
        }
      ]
    }
  ]
}

tokens (6x):
       ID_var ID_eval PUNC_EQ IDENT PUNC_SEMI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use this name (eval) as a variable name because: Cannot create a binding named `eval` in strict mode

var eval = x;
    ^------- error
`````


### Module goal

Parsed with the module goal.

_Output same as strict mode._

### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output was same as input [sloppy]