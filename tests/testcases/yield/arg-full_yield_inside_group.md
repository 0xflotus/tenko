# Tenko parser test case

- Path: tests/testcases/yield/arg-full_yield_inside_group.md

> :: yield
>
> ::> arg-full yield inside group

## Input

`````js
({ *g1() {   (yield 1)  }})
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
  loc:{start:{line:1,column:0},end:{line:1,column:27},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:27},source:''},
      expression: {
        type: 'ObjectExpression',
        loc:{start:{line:1,column:1},end:{line:1,column:26},source:''},
        properties: [
          {
            type: 'Property',
            loc:{start:{line:1,column:3},end:{line:1,column:25},source:''},
            key: {
              type: 'Identifier',
              loc:{start:{line:1,column:4},end:{line:1,column:6},source:''},
              name: 'g1'
            },
            kind: 'init',
            method: true,
            computed: false,
            value: {
              type: 'FunctionExpression',
              loc:{start:{line:1,column:3},end:{line:1,column:25},source:''},
              generator: true,
              async: false,
              id: null,
              params: [],
              body: {
                type: 'BlockStatement',
                loc:{start:{line:1,column:9},end:{line:1,column:25},source:''},
                body: [
                  {
                    type: 'ExpressionStatement',
                    loc:{start:{line:1,column:13},end:{line:1,column:22},source:''},
                    expression: {
                      type: 'YieldExpression',
                      loc:{start:{line:1,column:14},end:{line:1,column:21},source:''},
                      delegate: false,
                      argument: {
                        type: 'Literal',
                        loc:{start:{line:1,column:20},end:{line:1,column:21},source:''},
                        value: 1,
                        raw: '1'
                      }
                    }
                  }
                ]
              }
            },
            shorthand: false
          }
        ]
      }
    }
  ]
}

tokens (17x):
       PUNC_PAREN_OPEN PUNC_CURLY_OPEN PUNC_STAR IDENT PUNC_PAREN_OPEN
       PUNC_PAREN_CLOSE PUNC_CURLY_OPEN PUNC_PAREN_OPEN ID_yield
       NUMBER_DEC PUNC_PAREN_CLOSE ASI PUNC_CURLY_CLOSE
       PUNC_CURLY_CLOSE PUNC_PAREN_CLOSE ASI
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
({* g1(){(yield (1));}});
````

Produces same AST