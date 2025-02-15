# Tenko parser test case

- Path: tests/testcases/arrays/destructuring/rest_with_yield_default_destructible_assignment.md

> :: arrays : destructuring
>
> ::> rest with yield default destructible assignment

## Input

`````js
result = [...{ x = yield }] = y;
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
  loc:{start:{line:1,column:0},end:{line:1,column:32},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:32},source:''},
      expression: {
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:31},source:''},
        left: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:6},source:''},
          name: 'result'
        },
        operator: '=',
        right: {
          type: 'AssignmentExpression',
          loc:{start:{line:1,column:9},end:{line:1,column:31},source:''},
          left: {
            type: 'ArrayPattern',
            loc:{start:{line:1,column:9},end:{line:1,column:27},source:''},
            elements: [
              {
                type: 'RestElement',
                loc:{start:{line:1,column:10},end:{line:1,column:26},source:''},
                argument: {
                  type: 'ObjectPattern',
                  loc:{start:{line:1,column:13},end:{line:1,column:26},source:''},
                  properties: [
                    {
                      type: 'Property',
                      loc:{start:{line:1,column:15},end:{line:1,column:24},source:''},
                      key: {
                        type: 'Identifier',
                        loc:{start:{line:1,column:15},end:{line:1,column:16},source:''},
                        name: 'x'
                      },
                      kind: 'init',
                      method: false,
                      computed: false,
                      value: {
                        type: 'AssignmentPattern',
                        loc:{start:{line:1,column:15},end:{line:1,column:24},source:''},
                        left: {
                          type: 'Identifier',
                          loc:{start:{line:1,column:15},end:{line:1,column:16},source:''},
                          name: 'x'
                        },
                        right: {
                          type: 'Identifier',
                          loc:{start:{line:1,column:19},end:{line:1,column:24},source:''},
                          name: 'yield'
                        }
                      },
                      shorthand: true
                    }
                  ]
                }
              }
            ]
          },
          operator: '=',
          right: {
            type: 'Identifier',
            loc:{start:{line:1,column:30},end:{line:1,column:31},source:''},
            name: 'y'
          }
        }
      }
    }
  ]
}

tokens (14x):
       IDENT PUNC_EQ PUNC_BRACKET_OPEN PUNC_DOT_DOT_DOT
       PUNC_CURLY_OPEN IDENT PUNC_EQ ID_yield PUNC_CURLY_CLOSE
       PUNC_BRACKET_CLOSE PUNC_EQ IDENT PUNC_SEMI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use `yield` outside of generator functions when in strict mode

result = [...{ x = yield }] = y;
                         ^------- error
`````


### Module goal

Parsed with the module goal.

_Output same as strict mode._

### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [sloppy]:

````js
((result = ([...{x = yield}] = y)));
````

Produces same AST
