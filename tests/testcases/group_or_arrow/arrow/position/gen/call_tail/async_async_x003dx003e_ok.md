# Tenko parser autogenerated test case

- From: tests/testcases/group_or_arrow/arrow/position/autogen.md
- Path: tests/testcases/group_or_arrow/arrow/position/gen/call_tail/async_async_x003dx003e_ok.md

> :: group or arrow : arrow : position : gen : call tail
>
> ::> async async x003dx003e ok

## Input


`````js
foo(async async => ok).bar
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
        type: 'MemberExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:26},source:''},
        object: {
          type: 'CallExpression',
          loc:{start:{line:1,column:0},end:{line:1,column:22},source:''},
          callee: {
            type: 'Identifier',
            loc:{start:{line:1,column:0},end:{line:1,column:3},source:''},
            name: 'foo'
          },
          arguments: [
            {
              type: 'ArrowFunctionExpression',
              loc:{start:{line:1,column:4},end:{line:1,column:21},source:''},
              params: [
                {
                  type: 'Identifier',
                  loc:{start:{line:1,column:10},end:{line:1,column:15},source:''},
                  name: 'async'
                }
              ],
              id: null,
              generator: false,
              async: true,
              expression: true,
              body: {
                type: 'Identifier',
                loc:{start:{line:1,column:19},end:{line:1,column:21},source:''},
                name: 'ok'
              }
            }
          ]
        },
        property: {
          type: 'Identifier',
          loc:{start:{line:1,column:23},end:{line:1,column:26},source:''},
          name: 'bar'
        },
        computed: false
      }
    }
  ]
}

tokens (11x):
       IDENT PUNC_PAREN_OPEN ID_async ID_async PUNC_EQ_GT IDENT
       PUNC_PAREN_CLOSE PUNC_DOT IDENT ASI
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
(((foo)(async async => (ok))).bar);
````

Produces same AST
