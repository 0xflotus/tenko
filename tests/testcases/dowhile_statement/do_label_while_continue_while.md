# Tenko parser test case

- Path: tests/testcases/dowhile_statement/do_label_while_continue_while.md

> :: dowhile statement
>
> ::> do label while continue while
>
> Curious case of while disambiguation

## PASS

## Input

`````js
do wow: while (x) continue wow; while (x)
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
  loc:{start:{line:1,column:0},end:{line:1,column:41},source:''},
  body: [
    {
      type: 'DoWhileStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:41},source:''},
      body: {
        type: 'LabeledStatement',
        loc:{start:{line:1,column:3},end:{line:1,column:31},source:''},
        label: {
          type: 'Identifier',
          loc:{start:{line:1,column:3},end:{line:1,column:6},source:''},
          name: 'wow'
        },
        body: {
          type: 'WhileStatement',
          loc:{start:{line:1,column:8},end:{line:1,column:31},source:''},
          test: {
            type: 'Identifier',
            loc:{start:{line:1,column:15},end:{line:1,column:16},source:''},
            name: 'x'
          },
          body: {
            type: 'ContinueStatement',
            loc:{start:{line:1,column:18},end:{line:1,column:31},source:''},
            label: {
              type: 'Identifier',
              loc:{start:{line:1,column:27},end:{line:1,column:30},source:''},
              name: 'wow'
            }
          }
        }
      },
      test: {
        type: 'Identifier',
        loc:{start:{line:1,column:39},end:{line:1,column:40},source:''},
        name: 'x'
      }
    }
  ]
}

tokens (16x):
       ID_do IDENT PUNC_COLON ID_while PUNC_PAREN_OPEN IDENT
       PUNC_PAREN_CLOSE ID_continue IDENT PUNC_SEMI ID_while
       PUNC_PAREN_OPEN IDENT PUNC_PAREN_CLOSE ASI
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
do wow: while (x) continue wow; while (x);
````

Produces same AST