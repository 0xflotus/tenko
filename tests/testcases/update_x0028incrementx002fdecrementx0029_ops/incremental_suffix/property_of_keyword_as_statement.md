# Tenko parser test case

- Path: tests/testcases/update_x0028incrementx002fdecrementx0029_ops/incremental_suffix/property_of_keyword_as_statement.md

> :: update x0028incrementx002fdecrementx0029 ops : incremental suffix
>
> ::> property of keyword as statement

## Input

`````js
this.x++
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
  loc:{start:{line:1,column:0},end:{line:1,column:8},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:8},source:''},
      expression: {
        type: 'UpdateExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:8},source:''},
        argument: {
          type: 'MemberExpression',
          loc:{start:{line:1,column:0},end:{line:1,column:6},source:''},
          object: {
            type: 'ThisExpression',
            loc:{start:{line:1,column:0},end:{line:1,column:4},source:''}
          },
          property: {
            type: 'Identifier',
            loc:{start:{line:1,column:5},end:{line:1,column:6},source:''},
            name: 'x'
          },
          computed: false
        },
        operator: '++',
        prefix: false
      }
    }
  ]
}

tokens (6x):
       ID_this PUNC_DOT IDENT PUNC_PLUS_PLUS ASI
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
this.x++;
````

Produces same AST