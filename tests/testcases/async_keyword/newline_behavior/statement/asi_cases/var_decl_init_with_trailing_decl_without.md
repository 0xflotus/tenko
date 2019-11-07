# Tenko parser test case

- Path: tests/testcases/async_keyword/newline_behavior/statement/asi_cases/var_decl_init_with_trailing_decl_without.md

> :: async keyword : newline behavior : statement : asi cases
>
> ::> var decl init with trailing decl without
>
> here it is not an error because the comma is part of the var decl

## Input

`````js
var x = async () => x, y
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
  loc:{start:{line:1,column:0},end:{line:1,column:24},source:''},
  body: [
    {
      type: 'VariableDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:24},source:''},
      kind: 'var',
      declarations: [
        {
          type: 'VariableDeclarator',
          loc:{start:{line:1,column:4},end:{line:1,column:21},source:''},
          id: {
            type: 'Identifier',
            loc:{start:{line:1,column:4},end:{line:1,column:5},source:''},
            name: 'x'
          },
          init: {
            type: 'ArrowFunctionExpression',
            loc:{start:{line:1,column:8},end:{line:1,column:21},source:''},
            params: [],
            id: null,
            generator: false,
            async: true,
            expression: true,
            body: {
              type: 'Identifier',
              loc:{start:{line:1,column:20},end:{line:1,column:21},source:''},
              name: 'x'
            }
          }
        },
        {
          type: 'VariableDeclarator',
          loc:{start:{line:1,column:23},end:{line:1,column:24},source:''},
          id: {
            type: 'Identifier',
            loc:{start:{line:1,column:23},end:{line:1,column:24},source:''},
            name: 'y'
          },
          init: null
        }
      ]
    }
  ]
}

tokens (12x):
       ID_var IDENT PUNC_EQ ID_async PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_EQ_GT IDENT PUNC_COMMA IDENT ASI
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
var x = async () => (x), y;
````

Produces same AST