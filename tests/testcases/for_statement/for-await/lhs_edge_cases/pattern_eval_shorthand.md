# Tenko parser test case

- Path: tests/testcases/for_statement/for-await/lhs_edge_cases/pattern_eval_shorthand.md

> :: for statement : for-await : lhs edge cases
>
> ::> pattern eval shorthand
>
> Regression with `eval` as a shorthand in the lhs of a `for`.
>
> The `eval` would be a read and write and a write to `eval` is illegal in strict mode.

## Input

`````js
async function f() {
  for await ({ eval = 0 } of [{}]) ;
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
  loc:{start:{line:1,column:0},end:{line:3,column:1},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:3,column:1},source:''},
      generator: false,
      async: true,
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:15},end:{line:1,column:16},source:''},
        name: 'f'
      },
      params: [],
      body: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:19},end:{line:3,column:1},source:''},
        body: [
          {
            type: 'ForOfStatement',
            loc:{start:{line:2,column:2},end:{line:2,column:36},source:''},
            left: {
              type: 'ObjectPattern',
              loc:{start:{line:2,column:13},end:{line:2,column:25},source:''},
              properties: [
                {
                  type: 'Property',
                  loc:{start:{line:2,column:15},end:{line:2,column:23},source:''},
                  key: {
                    type: 'Identifier',
                    loc:{start:{line:2,column:15},end:{line:2,column:19},source:''},
                    name: 'eval'
                  },
                  kind: 'init',
                  method: false,
                  computed: false,
                  value: {
                    type: 'AssignmentPattern',
                    loc:{start:{line:2,column:15},end:{line:2,column:23},source:''},
                    left: {
                      type: 'Identifier',
                      loc:{start:{line:2,column:15},end:{line:2,column:19},source:''},
                      name: 'eval'
                    },
                    right: {
                      type: 'Literal',
                      loc:{start:{line:2,column:22},end:{line:2,column:23},source:''},
                      value: 0,
                      raw: '0'
                    }
                  },
                  shorthand: true
                }
              ]
            },
            right: {
              type: 'ArrayExpression',
              loc:{start:{line:2,column:29},end:{line:2,column:33},source:''},
              elements: [
                {
                  type: 'ObjectExpression',
                  loc:{start:{line:2,column:30},end:{line:2,column:32},source:''},
                  properties: []
                }
              ]
            },
            await: true,
            body: {
              type: 'EmptyStatement',
              loc:{start:{line:2,column:35},end:{line:2,column:36},source:''}
            }
          }
        ]
      }
    }
  ]
}

tokens (23x):
       ID_async ID_function IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN ID_for ID_await PUNC_PAREN_OPEN PUNC_CURLY_OPEN
       ID_eval PUNC_EQ NUMBER_DEC PUNC_CURLY_CLOSE ID_of
       PUNC_BRACKET_OPEN PUNC_CURLY_OPEN PUNC_CURLY_CLOSE
       PUNC_BRACKET_CLOSE PUNC_PAREN_CLOSE PUNC_SEMI PUNC_CURLY_CLOSE
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  The for-header lhs binding pattern is not destructible

async function f() {
  for await ({ eval = 0 } of [{}]) ;
                          ^------- error

}
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
async function f() {for await ({eval = 0} of [{},]) ;}
````

Produces same AST
