# Tenko parser test case

- Path: tests/testcases/delete/single_ident_cases/grouped_asi_check.md

> :: delete : single ident cases
>
> ::> grouped asi check

## Input

`````js
delete x
foo
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
  loc:{start:{line:1,column:0},end:{line:2,column:3},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:8},source:''},
      expression: {
        type: 'UnaryExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:8},source:''},
        operator: 'delete',
        prefix: true,
        argument: {
          type: 'Identifier',
          loc:{start:{line:1,column:7},end:{line:1,column:8},source:''},
          name: 'x'
        }
      }
    },
    {
      type: 'ExpressionStatement',
      loc:{start:{line:2,column:0},end:{line:2,column:3},source:''},
      expression: {
        type: 'Identifier',
        loc:{start:{line:2,column:0},end:{line:2,column:3},source:''},
        name: 'foo'
      }
    }
  ]
}

tokens (6x):
       ID_delete IDENT ASI IDENT ASI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot delete an identifier without tail, in strict mode

delete x
foo
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
(delete (x));
(foo);
````

Produces same AST
