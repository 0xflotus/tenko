# Tenko parser autogenerated test case

- From: tests/testcases/operator_precedent/autogen.md
- Path: tests/testcases/operator_precedent/gen/typeof_arg/a_x002b_b_x002f_c.md

> :: operator precedent : gen : typeof arg
>
> ::> a x002b b x002f c

## Input


`````js
typeof a + b / c
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
  loc:{start:{line:1,column:0},end:{line:1,column:16},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:16},source:''},
      expression: {
        type: 'BinaryExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:16},source:''},
        left: {
          type: 'UnaryExpression',
          loc:{start:{line:1,column:0},end:{line:1,column:8},source:''},
          operator: 'typeof',
          prefix: true,
          argument: {
            type: 'Identifier',
            loc:{start:{line:1,column:7},end:{line:1,column:8},source:''},
            name: 'a'
          }
        },
        operator: '+',
        right: {
          type: 'BinaryExpression',
          loc:{start:{line:1,column:11},end:{line:1,column:16},source:''},
          left: {
            type: 'Identifier',
            loc:{start:{line:1,column:11},end:{line:1,column:12},source:''},
            name: 'b'
          },
          operator: '/',
          right: {
            type: 'Identifier',
            loc:{start:{line:1,column:15},end:{line:1,column:16},source:''},
            name: 'c'
          }
        }
      }
    }
  ]
}

tokens (8x):
       ID_typeof IDENT PUNC_PLUS IDENT PUNC_DIV IDENT ASI
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
(((typeof (a)) + (((b) / (c)))));
````

Produces same AST