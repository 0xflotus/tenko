# Tenko parser test case

- Path: tests/testcases/break_statement/break_at_eof_x0028with_label_without_semix0029.md

> :: break statement
>
> ::> break at eof x0028with label without semix0029

## Input

`````js
foo: break foo
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
  loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
  body: [
    {
      type: 'LabeledStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
      label: {
        type: 'Identifier',
        loc:{start:{line:1,column:0},end:{line:1,column:3},source:''},
        name: 'foo'
      },
      body: {
        type: 'BreakStatement',
        loc:{start:{line:1,column:5},end:{line:1,column:14},source:''},
        label: {
          type: 'Identifier',
          loc:{start:{line:1,column:11},end:{line:1,column:14},source:''},
          name: 'foo'
        }
      }
    }
  ]
}

tokens (6x):
       IDENT PUNC_COLON ID_break IDENT ASI
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
foo: break foo;
````

Produces same AST