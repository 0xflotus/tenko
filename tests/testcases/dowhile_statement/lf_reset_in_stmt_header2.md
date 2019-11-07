# Tenko parser test case

- Path: tests/testcases/dowhile_statement/lf_reset_in_stmt_header2.md

> :: dowhile statement
>
> ::> lf reset in stmt header2
>
> 


## Input

`````js
do if(x=>{});else n
while(y)
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
  loc:{start:{line:1,column:0},end:{line:2,column:8},source:''},
  body: [
    {
      type: 'DoWhileStatement',
      loc:{start:{line:1,column:0},end:{line:2,column:8},source:''},
      body: {
        type: 'IfStatement',
        loc:{start:{line:1,column:3},end:{line:1,column:19},source:''},
        test: {
          type: 'ArrowFunctionExpression',
          loc:{start:{line:1,column:6},end:{line:1,column:11},source:''},
          params: [
            {
              type: 'Identifier',
              loc:{start:{line:1,column:6},end:{line:1,column:7},source:''},
              name: 'x'
            }
          ],
          id: null,
          generator: false,
          async: false,
          expression: false,
          body: {
            type: 'BlockStatement',
            loc:{start:{line:1,column:9},end:{line:1,column:11},source:''},
            body: []
          }
        },
        consequent: {
          type: 'EmptyStatement',
          loc:{start:{line:1,column:12},end:{line:1,column:13},source:''}
        },
        alternate: {
          type: 'ExpressionStatement',
          loc:{start:{line:1,column:18},end:{line:1,column:19},source:''},
          expression: {
            type: 'Identifier',
            loc:{start:{line:1,column:18},end:{line:1,column:19},source:''},
            name: 'n'
          }
        }
      },
      test: {
        type: 'Identifier',
        loc:{start:{line:2,column:6},end:{line:2,column:7},source:''},
        name: 'y'
      }
    }
  ]
}

tokens (18x):
       ID_do ID_if PUNC_PAREN_OPEN IDENT PUNC_EQ_GT PUNC_CURLY_OPEN
       PUNC_CURLY_CLOSE PUNC_PAREN_CLOSE PUNC_SEMI ID_else IDENT ASI
       ID_while PUNC_PAREN_OPEN IDENT PUNC_PAREN_CLOSE ASI
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
do if (x => {}) ; else (n); while (y);
````

Produces same AST