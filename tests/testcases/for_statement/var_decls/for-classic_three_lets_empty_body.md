# Tenko parser test case

- Path: tests/testcases/for_statement/var_decls/for-classic_three_lets_empty_body.md

> :: for statement : var decls
>
> ::> for-classic three lets empty body

## Input

`````js
for (let a,b,c;;);
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
  loc:{start:{line:1,column:0},end:{line:1,column:18},source:''},
  body: [
    {
      type: 'ForStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:18},source:''},
      init: {
        type: 'VariableDeclaration',
        loc:{start:{line:1,column:5},end:{line:1,column:14},source:''},
        kind: 'let',
        declarations: [
          {
            type: 'VariableDeclarator',
            loc:{start:{line:1,column:9},end:{line:1,column:10},source:''},
            id: {
              type: 'Identifier',
              loc:{start:{line:1,column:9},end:{line:1,column:10},source:''},
              name: 'a'
            },
            init: null
          },
          {
            type: 'VariableDeclarator',
            loc:{start:{line:1,column:11},end:{line:1,column:12},source:''},
            id: {
              type: 'Identifier',
              loc:{start:{line:1,column:11},end:{line:1,column:12},source:''},
              name: 'b'
            },
            init: null
          },
          {
            type: 'VariableDeclarator',
            loc:{start:{line:1,column:13},end:{line:1,column:14},source:''},
            id: {
              type: 'Identifier',
              loc:{start:{line:1,column:13},end:{line:1,column:14},source:''},
              name: 'c'
            },
            init: null
          }
        ]
      },
      test: null,
      update: null,
      body: {
        type: 'EmptyStatement',
        loc:{start:{line:1,column:17},end:{line:1,column:18},source:''}
      }
    }
  ]
}

tokens (13x):
       ID_for PUNC_PAREN_OPEN ID_let IDENT PUNC_COMMA IDENT PUNC_COMMA
       IDENT PUNC_SEMI PUNC_SEMI PUNC_PAREN_CLOSE PUNC_SEMI
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
for (let a, b, c;;) ;
````

Produces same AST
