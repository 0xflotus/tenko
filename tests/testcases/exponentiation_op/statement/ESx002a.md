# Tenko parser test case

- Path: tests/testcases/exponentiation_op/statement/ESx002a.md

> :: exponentiation op : statement
>
> ::> ESx002a

## Input

- `es = Infinity`

`````js
2 ** 4
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
  loc:{start:{line:1,column:0},end:{line:1,column:6},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:6},source:''},
      expression: {
        type: 'BinaryExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:6},source:''},
        left: {
          type: 'Literal',
          loc:{start:{line:1,column:0},end:{line:1,column:1},source:''},
          value: 2,
          raw: '2'
        },
        operator: '**',
        right: {
          type: 'Literal',
          loc:{start:{line:1,column:5},end:{line:1,column:6},source:''},
          value: 4,
          raw: '4'
        }
      }
    }
  ]
}

tokens (5x):
       NUMBER_DEC PUNC_STAR_STAR NUMBER_DEC ASI
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
(((2) ** (4)));
````

Produces same AST
