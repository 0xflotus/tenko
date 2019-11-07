# Tenko parser test case

- Path: tests/testcases/objects/destructuring/string/destruct_to_x0060awaitx0060_with_destruct.md

> :: objects : destructuring : string
>
> ::> destruct to x0060awaitx0060 with destruct

## Input

`````js
s = {"foo": await = x} = x
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
  loc:{start:{line:1,column:0},end:{line:1,column:26},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:26},source:''},
      expression: {
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:26},source:''},
        left: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:1},source:''},
          name: 's'
        },
        operator: '=',
        right: {
          type: 'AssignmentExpression',
          loc:{start:{line:1,column:4},end:{line:1,column:26},source:''},
          left: {
            type: 'ObjectPattern',
            loc:{start:{line:1,column:4},end:{line:1,column:22},source:''},
            properties: [
              {
                type: 'Property',
                loc:{start:{line:1,column:5},end:{line:1,column:21},source:''},
                key: {
                  type: 'Literal',
                  loc:{start:{line:1,column:5},end:{line:1,column:10},source:''},
                  value: 'foo',
                  raw: '"foo"'
                },
                kind: 'init',
                method: false,
                computed: false,
                value: {
                  type: 'AssignmentPattern',
                  loc:{start:{line:1,column:12},end:{line:1,column:21},source:''},
                  left: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:12},end:{line:1,column:17},source:''},
                    name: 'await'
                  },
                  right: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:20},end:{line:1,column:21},source:''},
                    name: 'x'
                  }
                },
                shorthand: false
              }
            ]
          },
          operator: '=',
          right: {
            type: 'Identifier',
            loc:{start:{line:1,column:25},end:{line:1,column:26},source:''},
            name: 'x'
          }
        }
      }
    }
  ]
}

tokens (13x):
       IDENT PUNC_EQ PUNC_CURLY_OPEN STRING_DOUBLE PUNC_COLON ID_await
       PUNC_EQ IDENT PUNC_CURLY_CLOSE PUNC_EQ IDENT ASI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

`````
throws: Parser error!
  Cannot use `await` as var when goal=module but found `await` outside an async function

s = {"foo": await = x} = x
                  ^------- error
`````


### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [sloppy]:

````js
((s = ({"foo":await = x} = x)));
````

Produces same AST