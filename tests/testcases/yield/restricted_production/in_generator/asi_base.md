# Tenko parser test case

- Path: tests/testcases/yield/restricted_production/in_generator/asi_base.md

> :: yield : restricted production : in generator
>
> ::> asi base
>
> `yield` with arg may not have a newline before the arg


## Input

`````js
function *f() {
  yield
    x
}
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
  loc:{start:{line:1,column:0},end:{line:4,column:1},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:4,column:1},source:''},
      generator: true,
      async: false,
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:10},end:{line:1,column:11},source:''},
        name: 'f'
      },
      params: [],
      body: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:14},end:{line:4,column:1},source:''},
        body: [
          {
            type: 'ExpressionStatement',
            loc:{start:{line:2,column:2},end:{line:2,column:7},source:''},
            expression: {
              type: 'YieldExpression',
              loc:{start:{line:2,column:2},end:{line:2,column:7},source:''},
              delegate: false,
              argument: null
            }
          },
          {
            type: 'ExpressionStatement',
            loc:{start:{line:3,column:4},end:{line:3,column:5},source:''},
            expression: {
              type: 'Identifier',
              loc:{start:{line:3,column:4},end:{line:3,column:5},source:''},
              name: 'x'
            }
          }
        ]
      }
    }
  ]
}

tokens (12x):
       ID_function PUNC_STAR IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN ID_yield ASI IDENT ASI PUNC_CURLY_CLOSE
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
function* f() {(yield);
(x);}
````

Produces same AST
