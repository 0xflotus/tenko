# Tenko parser test case

- Path: tests/testcases/delete/single_ident_cases/keywords/true.md

> :: delete : single ident cases : keywords
>
> ::> true
>
> This tests the "can not delete an identifier without tail in strict mode" rule, which does not apply to keywords

## PASS

## Input

`````js
delete true;
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
  loc:{start:{line:1,column:0},end:{line:1,column:12},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:12},source:''},
      expression: {
        type: 'UnaryExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:11},source:''},
        operator: 'delete',
        prefix: true,
        argument: {
          type: 'Literal',
          loc:{start:{line:1,column:7},end:{line:1,column:11},source:''},
          value: true,
          raw: 'true'
        }
      }
    }
  ]
}

tokens (4x):
       ID_delete ID_true PUNC_SEMI
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
(delete (true));
````

Produces same AST
