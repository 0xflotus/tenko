# Tenko parser autogenerated test case

- From: tests/testcases/group_or_arrow/arrow/position/autogen.md
- Path: tests/testcases/group_or_arrow/arrow/position/gen/dynamic_property/async_x_x003dx003e_ok.md

> :: group or arrow : arrow : position : gen : dynamic property
>
> ::> async x x003dx003e ok

## Input


`````js
async x => ok[foo]
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
  loc:{start:{line:1,column:0},end:{line:1,column:18},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:18},source:''},
      expression: {
        type: 'ArrowFunctionExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:18},source:''},
        params: [
          {
            type: 'Identifier',
            loc:{start:{line:1,column:6},end:{line:1,column:7},source:''},
            name: 'x'
          }
        ],
        id: null,
        generator: false,
        async: true,
        expression: true,
        body: {
          type: 'MemberExpression',
          loc:{start:{line:1,column:11},end:{line:1,column:18},source:''},
          object: {
            type: 'Identifier',
            loc:{start:{line:1,column:11},end:{line:1,column:13},source:''},
            name: 'ok'
          },
          property: {
            type: 'Identifier',
            loc:{start:{line:1,column:14},end:{line:1,column:17},source:''},
            name: 'foo'
          },
          computed: true
        }
      }
    }
  ]
}

tokens (9x):
       ID_async IDENT PUNC_EQ_GT IDENT PUNC_BRACKET_OPEN IDENT
       PUNC_BRACKET_CLOSE ASI
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
async x => ((ok)[foo]);
````

Produces same AST