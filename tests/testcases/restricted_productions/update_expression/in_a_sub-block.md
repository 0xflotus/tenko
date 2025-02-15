# Tenko parser test case

- Path: tests/testcases/restricted_productions/update_expression/in_a_sub-block.md

> :: restricted productions : update expression
>
> ::> in a sub-block

## Input

`````js
while (true) {b
++c};
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
  loc:{start:{line:1,column:0},end:{line:2,column:5},source:''},
  body: [
    {
      type: 'WhileStatement',
      loc:{start:{line:1,column:0},end:{line:2,column:4},source:''},
      test: {
        type: 'Literal',
        loc:{start:{line:1,column:7},end:{line:1,column:11},source:''},
        value: true,
        raw: 'true'
      },
      body: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:13},end:{line:2,column:4},source:''},
        body: [
          {
            type: 'ExpressionStatement',
            loc:{start:{line:1,column:14},end:{line:1,column:15},source:''},
            expression: {
              type: 'Identifier',
              loc:{start:{line:1,column:14},end:{line:1,column:15},source:''},
              name: 'b'
            }
          },
          {
            type: 'ExpressionStatement',
            loc:{start:{line:2,column:0},end:{line:2,column:3},source:''},
            expression: {
              type: 'UpdateExpression',
              loc:{start:{line:2,column:0},end:{line:2,column:3},source:''},
              argument: {
                type: 'Identifier',
                loc:{start:{line:2,column:2},end:{line:2,column:3},source:''},
                name: 'c'
              },
              operator: '++',
              prefix: true
            }
          }
        ]
      }
    },
    {
      type: 'EmptyStatement',
      loc:{start:{line:2,column:4},end:{line:2,column:5},source:''}
    }
  ]
}

tokens (13x):
       ID_while PUNC_PAREN_OPEN ID_true PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN IDENT ASI PUNC_PLUS_PLUS IDENT ASI
       PUNC_CURLY_CLOSE PUNC_SEMI
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
while (true) {(b);
++c;}
;
````

Produces same AST
