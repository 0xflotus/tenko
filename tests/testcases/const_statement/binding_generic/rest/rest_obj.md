# Tenko parser test case

- Path: tests/testcases/const_statement/binding_generic/rest/rest_obj.md

> :: const statement : binding generic : rest
>
> ::> rest obj

## Input

`````js
const {...x} = y
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
  loc:{start:{line:1,column:0},end:{line:1,column:16},source:''},
  body: [
    {
      type: 'VariableDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:16},source:''},
      kind: 'const',
      declarations: [
        {
          type: 'VariableDeclarator',
          loc:{start:{line:1,column:6},end:{line:1,column:16},source:''},
          id: {
            type: 'ObjectPattern',
            loc:{start:{line:1,column:6},end:{line:1,column:12},source:''},
            properties: [
              {
                type: 'RestElement',
                loc:{start:{line:1,column:7},end:{line:1,column:11},source:''},
                argument: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:10},end:{line:1,column:11},source:''},
                  name: 'x'
                }
              }
            ]
          },
          init: {
            type: 'Identifier',
            loc:{start:{line:1,column:15},end:{line:1,column:16},source:''},
            name: 'y'
          }
        }
      ]
    }
  ]
}

tokens (9x):
       ID_const PUNC_CURLY_OPEN PUNC_DOT_DOT_DOT IDENT
       PUNC_CURLY_CLOSE PUNC_EQ IDENT ASI
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
const {...x} = y;
````

Produces same AST
