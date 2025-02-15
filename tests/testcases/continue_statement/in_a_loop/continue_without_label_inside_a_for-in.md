# Tenko parser test case

- Path: tests/testcases/continue_statement/in_a_loop/continue_without_label_inside_a_for-in.md

> :: continue statement : in a loop
>
> ::> continue without label inside a for-in

## Input

`````js
for (x in y) continue
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
      type: 'ForInStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:21},source:''},
      left: {
        type: 'Identifier',
        loc:{start:{line:1,column:5},end:{line:1,column:6},source:''},
        name: 'x'
      },
      right: {
        type: 'Identifier',
        loc:{start:{line:1,column:10},end:{line:1,column:11},source:''},
        name: 'y'
      },
      body: {
        type: 'ContinueStatement',
        loc:{start:{line:1,column:13},end:{line:1,column:21},source:''},
        label: null
      }
    }
  ]
}

tokens (9x):
       ID_for PUNC_PAREN_OPEN IDENT ID_in IDENT PUNC_PAREN_CLOSE
       ID_continue ASI
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
for ((x) in y) continue;
````

Produces same AST
