# Tenko parser autogenerated test case

- From: tests/testcases/group_or_arrow/arrow/position/autogen.md
- Path: tests/testcases/group_or_arrow/arrow/position/gen/arg_default/async_x0028x_yx0029_x003dx003e_ok.md

> :: group or arrow : arrow : position : gen : arg default
>
> ::> async x0028x yx0029 x003dx003e ok

## Input


`````js
function f(a = async (x, y) => ok) {}
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
  loc:{start:{line:1,column:0},end:{line:1,column:37},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:37},source:''},
      generator: false,
      async: false,
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:9},end:{line:1,column:10},source:''},
        name: 'f'
      },
      params: [
        {
          type: 'AssignmentPattern',
          loc:{start:{line:1,column:11},end:{line:1,column:33},source:''},
          left: {
            type: 'Identifier',
            loc:{start:{line:1,column:11},end:{line:1,column:12},source:''},
            name: 'a'
          },
          right: {
            type: 'ArrowFunctionExpression',
            loc:{start:{line:1,column:15},end:{line:1,column:33},source:''},
            params: [
              {
                type: 'Identifier',
                loc:{start:{line:1,column:22},end:{line:1,column:23},source:''},
                name: 'x'
              },
              {
                type: 'Identifier',
                loc:{start:{line:1,column:25},end:{line:1,column:26},source:''},
                name: 'y'
              }
            ],
            id: null,
            generator: false,
            async: true,
            expression: true,
            body: {
              type: 'Identifier',
              loc:{start:{line:1,column:31},end:{line:1,column:33},source:''},
              name: 'ok'
            }
          }
        }
      ],
      body: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:35},end:{line:1,column:37},source:''},
        body: []
      }
    }
  ]
}

tokens (17x):
       ID_function IDENT PUNC_PAREN_OPEN IDENT PUNC_EQ ID_async
       PUNC_PAREN_OPEN IDENT PUNC_COMMA IDENT PUNC_PAREN_CLOSE
       PUNC_EQ_GT IDENT PUNC_PAREN_CLOSE PUNC_CURLY_OPEN
       PUNC_CURLY_CLOSE
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
function f(a = async (x, y) => (ok)) {}
````

Produces same AST
