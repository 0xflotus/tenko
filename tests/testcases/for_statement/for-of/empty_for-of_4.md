# Tenko parser test case

- Path: tests/testcases/for_statement/for-of/empty_for-of_4.md

> :: for statement : for-of
>
> ::> empty for-of 4

## Input

`````js
for (const a of b);
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
  loc:{start:{line:1,column:0},end:{line:1,column:19},source:''},
  body: [
    {
      type: 'ForOfStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:19},source:''},
      left: {
        type: 'VariableDeclaration',
        loc:{start:{line:1,column:5},end:{line:1,column:12},source:''},
        kind: 'const',
        declarations: [
          {
            type: 'VariableDeclarator',
            loc:{start:{line:1,column:11},end:{line:1,column:12},source:''},
            id: {
              type: 'Identifier',
              loc:{start:{line:1,column:11},end:{line:1,column:12},source:''},
              name: 'a'
            },
            init: null
          }
        ]
      },
      right: {
        type: 'Identifier',
        loc:{start:{line:1,column:16},end:{line:1,column:17},source:''},
        name: 'b'
      },
      await: false,
      body: {
        type: 'EmptyStatement',
        loc:{start:{line:1,column:18},end:{line:1,column:19},source:''}
      }
    }
  ]
}

tokens (9x):
       ID_for PUNC_PAREN_OPEN ID_const IDENT ID_of IDENT
       PUNC_PAREN_CLOSE PUNC_SEMI
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
for (const a of b) ;
````

Produces same AST
