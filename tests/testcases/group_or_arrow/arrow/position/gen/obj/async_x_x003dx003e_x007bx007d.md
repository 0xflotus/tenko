# Tenko parser autogenerated test case

- From: tests/testcases/group_or_arrow/arrow/position/autogen.md
- Path: tests/testcases/group_or_arrow/arrow/position/gen/obj/async_x_x003dx003e_x007bx007d.md

> :: group or arrow : arrow : position : gen : obj
>
> ::> async x x003dx003e x007bx007d

## Input


`````js
x = {arrow: async x => {}}
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
          name: 'x'
        },
        operator: '=',
        right: {
          type: 'ObjectExpression',
          loc:{start:{line:1,column:4},end:{line:1,column:26},source:''},
          properties: [
            {
              type: 'Property',
              loc:{start:{line:1,column:5},end:{line:1,column:25},source:''},
              key: {
                type: 'Identifier',
                loc:{start:{line:1,column:5},end:{line:1,column:10},source:''},
                name: 'arrow'
              },
              kind: 'init',
              method: false,
              computed: false,
              value: {
                type: 'ArrowFunctionExpression',
                loc:{start:{line:1,column:12},end:{line:1,column:25},source:''},
                params: [
                  {
                    type: 'Identifier',
                    loc:{start:{line:1,column:18},end:{line:1,column:19},source:''},
                    name: 'x'
                  }
                ],
                id: null,
                generator: false,
                async: true,
                expression: false,
                body: {
                  type: 'BlockStatement',
                  loc:{start:{line:1,column:23},end:{line:1,column:25},source:''},
                  body: []
                }
              },
              shorthand: false
            }
          ]
        }
      }
    }
  ]
}

tokens (13x):
       IDENT PUNC_EQ PUNC_CURLY_OPEN IDENT PUNC_COLON ID_async IDENT
       PUNC_EQ_GT PUNC_CURLY_OPEN PUNC_CURLY_CLOSE PUNC_CURLY_CLOSE
       ASI
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
((x = {arrow:async x => {}}));
````

Produces same AST