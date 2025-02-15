# Tenko parser test case

- Path: tests/testcases/operator_precedent/sanity_canaries/plus_eq_or_pow_div_xor_lor_land_lt_and_urhs.two.md

> :: operator precedent : sanity canaries
>
> ::> plus eq or pow div xor lor land lt and urhs.two
>
> Random ops to test for precedence

## Input

`````js
x0 + x1 == x2 | x3 ** x4 / x5 ^ x6 || x7 && x8 < x9 & x10 >>> x
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
  loc:{start:{line:1,column:0},end:{line:1,column:63},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:63},source:''},
      expression: {
        type: 'LogicalExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:63},source:''},
        left: {
          type: 'BinaryExpression',
          loc:{start:{line:1,column:0},end:{line:1,column:34},source:''},
          left: {
            type: 'BinaryExpression',
            loc:{start:{line:1,column:0},end:{line:1,column:13},source:''},
            left: {
              type: 'BinaryExpression',
              loc:{start:{line:1,column:0},end:{line:1,column:7},source:''},
              left: {
                type: 'Identifier',
                loc:{start:{line:1,column:0},end:{line:1,column:2},source:''},
                name: 'x0'
              },
              operator: '+',
              right: {
                type: 'Identifier',
                loc:{start:{line:1,column:5},end:{line:1,column:7},source:''},
                name: 'x1'
              }
            },
            operator: '==',
            right: {
              type: 'Identifier',
              loc:{start:{line:1,column:11},end:{line:1,column:13},source:''},
              name: 'x2'
            }
          },
          operator: '|',
          right: {
            type: 'BinaryExpression',
            loc:{start:{line:1,column:16},end:{line:1,column:34},source:''},
            left: {
              type: 'BinaryExpression',
              loc:{start:{line:1,column:16},end:{line:1,column:29},source:''},
              left: {
                type: 'BinaryExpression',
                loc:{start:{line:1,column:16},end:{line:1,column:24},source:''},
                left: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:16},end:{line:1,column:18},source:''},
                  name: 'x3'
                },
                operator: '**',
                right: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:22},end:{line:1,column:24},source:''},
                  name: 'x4'
                }
              },
              operator: '/',
              right: {
                type: 'Identifier',
                loc:{start:{line:1,column:27},end:{line:1,column:29},source:''},
                name: 'x5'
              }
            },
            operator: '^',
            right: {
              type: 'Identifier',
              loc:{start:{line:1,column:32},end:{line:1,column:34},source:''},
              name: 'x6'
            }
          }
        },
        operator: '||',
        right: {
          type: 'LogicalExpression',
          loc:{start:{line:1,column:38},end:{line:1,column:63},source:''},
          left: {
            type: 'Identifier',
            loc:{start:{line:1,column:38},end:{line:1,column:40},source:''},
            name: 'x7'
          },
          operator: '&&',
          right: {
            type: 'BinaryExpression',
            loc:{start:{line:1,column:44},end:{line:1,column:63},source:''},
            left: {
              type: 'BinaryExpression',
              loc:{start:{line:1,column:44},end:{line:1,column:51},source:''},
              left: {
                type: 'Identifier',
                loc:{start:{line:1,column:44},end:{line:1,column:46},source:''},
                name: 'x8'
              },
              operator: '<',
              right: {
                type: 'Identifier',
                loc:{start:{line:1,column:49},end:{line:1,column:51},source:''},
                name: 'x9'
              }
            },
            operator: '&',
            right: {
              type: 'BinaryExpression',
              loc:{start:{line:1,column:54},end:{line:1,column:63},source:''},
              left: {
                type: 'Identifier',
                loc:{start:{line:1,column:54},end:{line:1,column:57},source:''},
                name: 'x10'
              },
              operator: '>>>',
              right: {
                type: 'Identifier',
                loc:{start:{line:1,column:62},end:{line:1,column:63},source:''},
                name: 'x'
              }
            }
          }
        }
      }
    }
  ]
}

tokens (25x):
       IDENT PUNC_PLUS IDENT PUNC_EQ_EQ IDENT PUNC_OR IDENT
       PUNC_STAR_STAR IDENT PUNC_DIV IDENT PUNC_CARET IDENT PUNC_OR_OR
       IDENT PUNC_AND_AND IDENT PUNC_LT IDENT PUNC_AND IDENT
       PUNC_GT_GT_GT IDENT ASI
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
((((((((x0) + (x1))) == (x2))) | (((((((x3) ** (x4))) / (x5))) ^ (x6))))) || (((x7) && (((((x8) < (x9))) & (((x10) >>> (x))))))));
````

Produces same AST
