# Tenko parser test case

- Path: tests/testcases/dowhile_statement/asi_is_weird/if.md

> :: dowhile statement : asi is weird
>
> ::> if
>
> The ASI for `do-while` does not require a newline since ES6

## PASS

## Input

`````js
do if (x) {} while(x) x
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
  loc:{start:{line:1,column:0},end:{line:1,column:23},source:''},
  body: [
    {
      type: 'DoWhileStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:21},source:''},
      body: {
        type: 'IfStatement',
        loc:{start:{line:1,column:3},end:{line:1,column:12},source:''},
        test: {
          type: 'Identifier',
          loc:{start:{line:1,column:7},end:{line:1,column:8},source:''},
          name: 'x'
        },
        consequent: {
          type: 'BlockStatement',
          loc:{start:{line:1,column:10},end:{line:1,column:12},source:''},
          body: []
        },
        alternate: null
      },
      test: {
        type: 'Identifier',
        loc:{start:{line:1,column:19},end:{line:1,column:20},source:''},
        name: 'x'
      }
    },
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:22},end:{line:1,column:23},source:''},
      expression: {
        type: 'Identifier',
        loc:{start:{line:1,column:22},end:{line:1,column:23},source:''},
        name: 'x'
      }
    }
  ]
}

tokens (15x):
       ID_do ID_if PUNC_PAREN_OPEN IDENT PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN PUNC_CURLY_CLOSE ID_while PUNC_PAREN_OPEN IDENT
       PUNC_PAREN_CLOSE ASI IDENT ASI
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
do if (x) {} while (x);
(x);
````

Produces same AST