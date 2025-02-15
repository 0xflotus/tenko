# Tenko parser test case

- Path: tests/testcases/return_statement/switch_with_a_simple_case_and_default.md

> :: return statement
>
> ::> switch with a simple case and default

## Input

`````js
switch (A) {case B: C; default: D;}
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
  loc:{start:{line:1,column:0},end:{line:1,column:35},source:''},
  body: [
    {
      type: 'SwitchStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:35},source:''},
      discriminant: {
        type: 'Identifier',
        loc:{start:{line:1,column:8},end:{line:1,column:9},source:''},
        name: 'A'
      },
      cases: [
        {
          type: 'SwitchCase',
          loc:{start:{line:1,column:12},end:{line:1,column:22},source:''},
          test: {
            type: 'Identifier',
            loc:{start:{line:1,column:17},end:{line:1,column:18},source:''},
            name: 'B'
          },
          consequent: [
            {
              type: 'ExpressionStatement',
              loc:{start:{line:1,column:20},end:{line:1,column:22},source:''},
              expression: {
                type: 'Identifier',
                loc:{start:{line:1,column:20},end:{line:1,column:21},source:''},
                name: 'C'
              }
            }
          ]
        },
        {
          type: 'SwitchCase',
          loc:{start:{line:1,column:23},end:{line:1,column:34},source:''},
          test: null,
          consequent: [
            {
              type: 'ExpressionStatement',
              loc:{start:{line:1,column:32},end:{line:1,column:34},source:''},
              expression: {
                type: 'Identifier',
                loc:{start:{line:1,column:32},end:{line:1,column:33},source:''},
                name: 'D'
              }
            }
          ]
        }
      ]
    }
  ]
}

tokens (16x):
       ID_switch PUNC_PAREN_OPEN IDENT PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN ID_case IDENT PUNC_COLON IDENT PUNC_SEMI
       ID_default PUNC_COLON IDENT PUNC_SEMI PUNC_CURLY_CLOSE
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

_Output same as sloppy mode._

### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [sloppy]:

````js
switch (A) {case B:
(C);
default:
(D);}
````

Produces same AST
