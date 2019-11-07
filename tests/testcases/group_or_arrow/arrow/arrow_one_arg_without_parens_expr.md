# Tenko parser test case

- Path: tests/testcases/group_or_arrow/arrow/arrow_one_arg_without_parens_expr.md

> :: group or arrow : arrow
>
> ::> arrow one arg without parens expr

## Input

`````js
x=>x;
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
  loc:{start:{line:1,column:0},end:{line:1,column:5},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:5},source:''},
      expression: {
        type: 'ArrowFunctionExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:4},source:''},
        params: [
          {
            type: 'Identifier',
            loc:{start:{line:1,column:0},end:{line:1,column:1},source:''},
            name: 'x'
          }
        ],
        id: null,
        generator: false,
        async: false,
        expression: true,
        body: {
          type: 'Identifier',
          loc:{start:{line:1,column:3},end:{line:1,column:4},source:''},
          name: 'x'
        }
      }
    }
  ]
}

tokens (5x):
       IDENT PUNC_EQ_GT IDENT PUNC_SEMI
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
x => (x);
````

Produces same AST