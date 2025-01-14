# Tenko parser test case

- Path: tests/testcases/let_declaration/binding_generic/in_export_decl/regular_vars/let_on_next_line_does_not_trigger_asi.md

> :: let declaration : binding generic : in export decl : regular vars
>
> ::> let on next line does not trigger asi

## Input

`````js
export
let foo
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

export
^------- error

let foo
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

`````
ast: {
  type: 'Program',
  loc:{start:{line:1,column:0},end:{line:2,column:7},source:''},
  body: [
    {
      type: 'ExportNamedDeclaration',
      loc:{start:{line:1,column:0},end:{line:2,column:7},source:''},
      specifiers: [],
      declaration: {
        type: 'VariableDeclaration',
        loc:{start:{line:2,column:0},end:{line:2,column:7},source:''},
        kind: 'let',
        declarations: [
          {
            type: 'VariableDeclarator',
            loc:{start:{line:2,column:4},end:{line:2,column:7},source:''},
            id: {
              type: 'Identifier',
              loc:{start:{line:2,column:4},end:{line:2,column:7},source:''},
              name: 'foo'
            },
            init: null
          }
        ]
      },
      source: null
    }
  ]
}

tokens (5x):
       ID_export ID_let IDENT ASI
`````


### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [module]:

````js
export let foo;
````

Produces same AST
