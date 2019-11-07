# Tenko parser test case

- Path: tests/testcases/break_statement/nesting/for/global/block.md

> :: break statement : nesting : for : global
>
> ::> block

## Input

`````js
for (;;)    { break }
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
      type: 'ForStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:21},source:''},
      init: null,
      test: null,
      update: null,
      body: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:12},end:{line:1,column:21},source:''},
        body: [
          {
            type: 'BreakStatement',
            loc:{start:{line:1,column:14},end:{line:1,column:19},source:''},
            label: null
          }
        ]
      }
    }
  ]
}

tokens (10x):
       ID_for PUNC_PAREN_OPEN PUNC_SEMI PUNC_SEMI PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN ID_break ASI PUNC_CURLY_CLOSE
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
for (;;) {break;}
````

Produces same AST