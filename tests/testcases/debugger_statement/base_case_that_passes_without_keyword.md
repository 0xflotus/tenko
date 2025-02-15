# Tenko parser test case

- Path: tests/testcases/debugger_statement/base_case_that_passes_without_keyword.md

> :: debugger statement
>
> ::> base case that passes without keyword

## Input

`````js
foo: x;
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
  loc:{start:{line:1,column:0},end:{line:1,column:7},source:''},
  body: [
    {
      type: 'LabeledStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:7},source:''},
      label: {
        type: 'Identifier',
        loc:{start:{line:1,column:0},end:{line:1,column:3},source:''},
        name: 'foo'
      },
      body: {
        type: 'ExpressionStatement',
        loc:{start:{line:1,column:5},end:{line:1,column:7},source:''},
        expression: {
          type: 'Identifier',
          loc:{start:{line:1,column:5},end:{line:1,column:6},source:''},
          name: 'x'
        }
      }
    }
  ]
}

tokens (5x):
       IDENT PUNC_COLON IDENT PUNC_SEMI
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
foo: (x);
````

Produces same AST
