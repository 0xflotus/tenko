# Tenko parser test case

- Path: tests/testcases/export_declaration/export_let_declaration_two_vars_with_init.md

> :: export declaration
>
> ::> export let declaration two vars with init

## Input

`````js
export let x = 10, y = 20
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  The `export` keyword can only be used with the module goal

export let x = 10, y = 20
^------- error
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

`````
ast: {
  type: 'Program',
  loc:{start:{line:1,column:0},end:{line:1,column:25},source:''},
  body: [
    {
      type: 'ExportNamedDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:25},source:''},
      specifiers: [],
      declaration: {
        type: 'VariableDeclaration',
        loc:{start:{line:1,column:7},end:{line:1,column:25},source:''},
        kind: 'let',
        declarations: [
          {
            type: 'VariableDeclarator',
            loc:{start:{line:1,column:11},end:{line:1,column:17},source:''},
            id: {
              type: 'Identifier',
              loc:{start:{line:1,column:11},end:{line:1,column:12},source:''},
              name: 'x'
            },
            init: {
              type: 'Literal',
              loc:{start:{line:1,column:15},end:{line:1,column:17},source:''},
              value: 10,
              raw: '10'
            }
          },
          {
            type: 'VariableDeclarator',
            loc:{start:{line:1,column:19},end:{line:1,column:25},source:''},
            id: {
              type: 'Identifier',
              loc:{start:{line:1,column:19},end:{line:1,column:20},source:''},
              name: 'y'
            },
            init: {
              type: 'Literal',
              loc:{start:{line:1,column:23},end:{line:1,column:25},source:''},
              value: 20,
              raw: '20'
            }
          }
        ]
      },
      source: null
    }
  ]
}

tokens (11x):
       ID_export ID_let IDENT PUNC_EQ NUMBER_DEC PUNC_COMMA IDENT
       PUNC_EQ NUMBER_DEC ASI
`````


### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [module]:

````js
export let x = 10, y = 20;
````

Produces same AST
