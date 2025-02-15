# Tenko parser test case

- Path: tests/testcases/continue_statement/label_validation/for-loop/label_loop_if_continue.md

> :: continue statement : label validation : for-loop
>
> ::> label loop if continue
>
> The `continue` label much match a label that is a direct parent of a loop node or a direct parent of such label recursively.

## PASS

## Input

`````js
foo: for(;;) if (x) continue foo
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
  loc:{start:{line:1,column:0},end:{line:1,column:32},source:''},
  body: [
    {
      type: 'LabeledStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:32},source:''},
      label: {
        type: 'Identifier',
        loc:{start:{line:1,column:0},end:{line:1,column:3},source:''},
        name: 'foo'
      },
      body: {
        type: 'ForStatement',
        loc:{start:{line:1,column:5},end:{line:1,column:32},source:''},
        init: null,
        test: null,
        update: null,
        body: {
          type: 'IfStatement',
          loc:{start:{line:1,column:13},end:{line:1,column:32},source:''},
          test: {
            type: 'Identifier',
            loc:{start:{line:1,column:17},end:{line:1,column:18},source:''},
            name: 'x'
          },
          consequent: {
            type: 'ContinueStatement',
            loc:{start:{line:1,column:20},end:{line:1,column:32},source:''},
            label: {
              type: 'Identifier',
              loc:{start:{line:1,column:29},end:{line:1,column:32},source:''},
              name: 'foo'
            }
          },
          alternate: null
        }
      }
    }
  ]
}

tokens (15x):
       IDENT PUNC_COLON ID_for PUNC_PAREN_OPEN PUNC_SEMI PUNC_SEMI
       PUNC_PAREN_CLOSE ID_if PUNC_PAREN_OPEN IDENT PUNC_PAREN_CLOSE
       ID_continue IDENT ASI
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
foo: for (;;) if (x) continue foo;
````

Produces same AST
