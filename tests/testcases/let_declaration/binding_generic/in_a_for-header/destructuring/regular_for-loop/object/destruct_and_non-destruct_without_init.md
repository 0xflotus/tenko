# Tenko parser test case

- Path: tests/testcases/let_declaration/binding_generic/in_a_for-header/destructuring/regular_for-loop/object/destruct_and_non-destruct_without_init.md

> :: let declaration : binding generic : in a for-header : destructuring : regular for-loop : object
>
> ::> destruct and non-destruct without init

## Input

`````js
for (let {x} = a, obj;;);
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
  loc:{start:{line:1,column:0},end:{line:1,column:25},source:''},
  body: [
    {
      type: 'ForStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:25},source:''},
      init: {
        type: 'VariableDeclaration',
        loc:{start:{line:1,column:5},end:{line:1,column:21},source:''},
        kind: 'let',
        declarations: [
          {
            type: 'VariableDeclarator',
            loc:{start:{line:1,column:9},end:{line:1,column:16},source:''},
            id: {
              type: 'ObjectPattern',
              loc:{start:{line:1,column:9},end:{line:1,column:12},source:''},
              properties: [
                {
                  type: 'Property',
                  loc:{start:{line:1,column:10},end:{line:1,column:11},source:''},
                  key: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:10},end:{line:1,column:11},source:''},
                    name: 'x'
                  },
                  kind: 'init',
                  method: false,
                  computed: false,
                  value: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:10},end:{line:1,column:11},source:''},
                    name: 'x'
                  },
                  shorthand: true
                }
              ]
            },
            init: {
              type: 'Identifier',
              loc:{start:{line:1,column:15},end:{line:1,column:16},source:''},
              name: 'a'
            }
          },
          {
            type: 'VariableDeclarator',
            loc:{start:{line:1,column:18},end:{line:1,column:21},source:''},
            id: {
              type: 'Identifier',
              loc:{start:{line:1,column:18},end:{line:1,column:21},source:''},
              name: 'obj'
            },
            init: null
          }
        ]
      },
      test: null,
      update: null,
      body: {
        type: 'EmptyStatement',
        loc:{start:{line:1,column:24},end:{line:1,column:25},source:''}
      }
    }
  ]
}

tokens (15x):
       ID_for PUNC_PAREN_OPEN ID_let PUNC_CURLY_OPEN IDENT
       PUNC_CURLY_CLOSE PUNC_EQ IDENT PUNC_COMMA IDENT PUNC_SEMI
       PUNC_SEMI PUNC_PAREN_CLOSE PUNC_SEMI
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
for (let {x} = a, obj;;) ;
````

Produces same AST
