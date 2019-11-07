# Tenko parser test case

- Path: tests/testcases/break_statement/in_a_loop/break_with_label_inside_a_while.md

> :: break statement : in a loop
>
> ::> break with label inside a while

## Input

`````js
foo: while (x) break foo
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
  loc:{start:{line:1,column:0},end:{line:1,column:24},source:''},
  body: [
    {
      type: 'LabeledStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:24},source:''},
      label: {
        type: 'Identifier',
        loc:{start:{line:1,column:0},end:{line:1,column:3},source:''},
        name: 'foo'
      },
      body: {
        type: 'WhileStatement',
        loc:{start:{line:1,column:5},end:{line:1,column:24},source:''},
        test: {
          type: 'Identifier',
          loc:{start:{line:1,column:12},end:{line:1,column:13},source:''},
          name: 'x'
        },
        body: {
          type: 'BreakStatement',
          loc:{start:{line:1,column:15},end:{line:1,column:24},source:''},
          label: {
            type: 'Identifier',
            loc:{start:{line:1,column:21},end:{line:1,column:24},source:''},
            name: 'foo'
          }
        }
      }
    }
  ]
}

tokens (10x):
       IDENT PUNC_COLON ID_while PUNC_PAREN_OPEN IDENT
       PUNC_PAREN_CLOSE ID_break IDENT ASI
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
foo: while (x) break foo;
````

Produces same AST