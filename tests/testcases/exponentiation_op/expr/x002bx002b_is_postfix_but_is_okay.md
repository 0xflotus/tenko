# Tenko parser test case

- Path: tests/testcases/exponentiation_op/expr/x002bx002b_is_postfix_but_is_okay.md

> :: exponentiation op : expr
>
> ::> x002bx002b is postfix but is okay
>
> the ++ is a unary operator so that is not a valid way to confirm lhs

## Input

`````js
(x++ ** a)
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
  loc:{start:{line:1,column:0},end:{line:1,column:10},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:10},source:''},
      expression: {
        type: 'BinaryExpression',
        loc:{start:{line:1,column:1},end:{line:1,column:9},source:''},
        left: {
          type: 'UpdateExpression',
          loc:{start:{line:1,column:1},end:{line:1,column:4},source:''},
          argument: {
            type: 'Identifier',
            loc:{start:{line:1,column:1},end:{line:1,column:2},source:''},
            name: 'x'
          },
          operator: '++',
          prefix: false
        },
        operator: '**',
        right: {
          type: 'Identifier',
          loc:{start:{line:1,column:8},end:{line:1,column:9},source:''},
          name: 'a'
        }
      }
    }
  ]
}

tokens (8x):
       PUNC_PAREN_OPEN IDENT PUNC_PLUS_PLUS PUNC_STAR_STAR IDENT
       PUNC_PAREN_CLOSE ASI
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
(((x++) ** (a)));
````

Produces same AST
