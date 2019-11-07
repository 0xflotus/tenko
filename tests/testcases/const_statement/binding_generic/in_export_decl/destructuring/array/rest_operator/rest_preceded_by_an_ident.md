# Tenko parser test case

- Path: tests/testcases/const_statement/binding_generic/in_export_decl/destructuring/array/rest_operator/rest_preceded_by_an_ident.md

> :: const statement : binding generic : in export decl : destructuring : array : rest operator
>
> ::> rest preceded by an ident

## Input

`````js
export const [foo, ...bar] = obj;
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

export const [foo, ...bar] = obj;
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
  loc:{start:{line:1,column:0},end:{line:1,column:33},source:''},
  body: [
    {
      type: 'ExportNamedDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:33},source:''},
      specifiers: [],
      declaration: {
        type: 'VariableDeclaration',
        loc:{start:{line:1,column:7},end:{line:1,column:33},source:''},
        kind: 'const',
        declarations: [
          {
            type: 'VariableDeclarator',
            loc:{start:{line:1,column:13},end:{line:1,column:32},source:''},
            id: {
              type: 'ArrayPattern',
              loc:{start:{line:1,column:13},end:{line:1,column:26},source:''},
              elements: [
                {
                  type: 'Identifier',
                  loc:{start:{line:1,column:14},end:{line:1,column:17},source:''},
                  name: 'foo'
                },
                {
                  type: 'RestElement',
                  loc:{start:{line:1,column:19},end:{line:1,column:25},source:''},
                  argument: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:22},end:{line:1,column:25},source:''},
                    name: 'bar'
                  }
                }
              ]
            },
            init: {
              type: 'Identifier',
              loc:{start:{line:1,column:29},end:{line:1,column:32},source:''},
              name: 'obj'
            }
          }
        ]
      },
      source: null
    }
  ]
}

tokens (12x):
       ID_export ID_const PUNC_BRACKET_OPEN IDENT PUNC_COMMA
       PUNC_DOT_DOT_DOT IDENT PUNC_BRACKET_CLOSE PUNC_EQ IDENT
       PUNC_SEMI
`````


### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output was same as input [module]