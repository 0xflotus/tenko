# Tenko parser autogenerated test case

- From: tests/testcases/delete/single_ident_cases/keywords/autogen.md
- Path: tests/testcases/delete/single_ident_cases/keywords/gen/ungrouped_property/arguments.md

> :: delete : single ident cases : keywords : gen : ungrouped property
>
> ::> arguments

## Input


`````js
delete arguments.prop
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
  loc:{start:{line:1,column:0},end:{line:1,column:21},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:21},source:''},
      expression: {
        type: 'UnaryExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:21},source:''},
        operator: 'delete',
        prefix: true,
        argument: {
          type: 'MemberExpression',
          loc:{start:{line:1,column:7},end:{line:1,column:21},source:''},
          object: {
            type: 'Identifier',
            loc:{start:{line:1,column:7},end:{line:1,column:16},source:''},
            name: 'arguments'
          },
          property: {
            type: 'Identifier',
            loc:{start:{line:1,column:17},end:{line:1,column:21},source:''},
            name: 'prop'
          },
          computed: false
        }
      }
    }
  ]
}

tokens (6x):
       ID_delete ID_arguments PUNC_DOT IDENT ASI
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
(delete ((arguments).prop));
````

Produces same AST
