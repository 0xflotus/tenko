# Tenko parser test case

- Path: tests/testcases/export_declaration/export_the_same_symbol_twice_under_different_names.md

> :: export declaration
>
> ::> export the same symbol twice under different names

## Input

`````js
var x; export { x as a }; export { x as b };
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

var x; export { x as a }; export { x as b };
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
  loc:{start:{line:1,column:0},end:{line:1,column:44},source:''},
  body: [
    {
      type: 'VariableDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:6},source:''},
      kind: 'var',
      declarations: [
        {
          type: 'VariableDeclarator',
          loc:{start:{line:1,column:4},end:{line:1,column:5},source:''},
          id: {
            type: 'Identifier',
            loc:{start:{line:1,column:4},end:{line:1,column:5},source:''},
            name: 'x'
          },
          init: null
        }
      ]
    },
    {
      type: 'ExportNamedDeclaration',
      loc:{start:{line:1,column:7},end:{line:1,column:25},source:''},
      specifiers: [
        {
          type: 'ExportSpecifier',
          loc:{start:{line:1,column:16},end:{line:1,column:22},source:''},
          local: {
            type: 'Identifier',
            loc:{start:{line:1,column:16},end:{line:1,column:17},source:''},
            name: 'x'
          },
          exported: {
            type: 'Identifier',
            loc:{start:{line:1,column:21},end:{line:1,column:22},source:''},
            name: 'a'
          }
        }
      ],
      declaration: null,
      source: null
    },
    {
      type: 'ExportNamedDeclaration',
      loc:{start:{line:1,column:26},end:{line:1,column:44},source:''},
      specifiers: [
        {
          type: 'ExportSpecifier',
          loc:{start:{line:1,column:35},end:{line:1,column:41},source:''},
          local: {
            type: 'Identifier',
            loc:{start:{line:1,column:35},end:{line:1,column:36},source:''},
            name: 'x'
          },
          exported: {
            type: 'Identifier',
            loc:{start:{line:1,column:40},end:{line:1,column:41},source:''},
            name: 'b'
          }
        }
      ],
      declaration: null,
      source: null
    }
  ]
}

tokens (18x):
       ID_var IDENT PUNC_SEMI ID_export PUNC_CURLY_OPEN IDENT ID_as
       IDENT PUNC_CURLY_CLOSE PUNC_SEMI ID_export PUNC_CURLY_OPEN
       IDENT ID_as IDENT PUNC_CURLY_CLOSE PUNC_SEMI
`````


### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [module]:

````js
var x;
export {x as a}
export {x as b}
````

Produces same AST