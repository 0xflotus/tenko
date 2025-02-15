# Tenko parser test case

- Path: tests/testcases/await/await_in_a_body_of_an_async_arrow.md

> :: await
>
> ::> await in a body of an async arrow

## Input

`````js
let y = async x => { await x; }
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
  loc:{start:{line:1,column:0},end:{line:1,column:31},source:''},
  body: [
    {
      type: 'VariableDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:31},source:''},
      kind: 'let',
      declarations: [
        {
          type: 'VariableDeclarator',
          loc:{start:{line:1,column:4},end:{line:1,column:31},source:''},
          id: {
            type: 'Identifier',
            loc:{start:{line:1,column:4},end:{line:1,column:5},source:''},
            name: 'y'
          },
          init: {
            type: 'ArrowFunctionExpression',
            loc:{start:{line:1,column:8},end:{line:1,column:31},source:''},
            params: [
              {
                type: 'Identifier',
                loc:{start:{line:1,column:14},end:{line:1,column:15},source:''},
                name: 'x'
              }
            ],
            id: null,
            generator: false,
            async: true,
            expression: false,
            body: {
              type: 'BlockStatement',
              loc:{start:{line:1,column:19},end:{line:1,column:31},source:''},
              body: [
                {
                  type: 'ExpressionStatement',
                  loc:{start:{line:1,column:21},end:{line:1,column:29},source:''},
                  expression: {
                    type: 'AwaitExpression',
                    loc:{start:{line:1,column:21},end:{line:1,column:28},source:''},
                    argument: {
                      type: 'Identifier',
                      loc:{start:{line:1,column:27},end:{line:1,column:28},source:''},
                      name: 'x'
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    }
  ]
}

tokens (13x):
       ID_let IDENT PUNC_EQ ID_async IDENT PUNC_EQ_GT PUNC_CURLY_OPEN
       ID_await IDENT PUNC_SEMI PUNC_CURLY_CLOSE ASI
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
let y = async x => {await (x);};
````

Produces same AST
