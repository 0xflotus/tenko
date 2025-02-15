# Tenko parser test case

- Path: tests/testcases/var_statement/binding_generic/in_a_for-header/destructuring/for-of/object/single_destruct_with_init.md

> :: var statement : binding generic : in a for-header : destructuring : for-of : object
>
> ::> single destruct with init

## Input

`````js
for (var {x = y} of obj);
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
      type: 'ForOfStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:25},source:''},
      left: {
        type: 'VariableDeclaration',
        loc:{start:{line:1,column:5},end:{line:1,column:16},source:''},
        kind: 'var',
        declarations: [
          {
            type: 'VariableDeclarator',
            loc:{start:{line:1,column:9},end:{line:1,column:16},source:''},
            id: {
              type: 'ObjectPattern',
              loc:{start:{line:1,column:9},end:{line:1,column:16},source:''},
              properties: [
                {
                  type: 'Property',
                  loc:{start:{line:1,column:10},end:{line:1,column:15},source:''},
                  key: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:10},end:{line:1,column:11},source:''},
                    name: 'x'
                  },
                  kind: 'init',
                  method: false,
                  computed: false,
                  value: {
                    type: 'AssignmentPattern',
                    loc:{start:{line:1,column:10},end:{line:1,column:15},source:''},
                    left: {
                      type: 'Identifier',
                      loc:{start:{line:1,column:10},end:{line:1,column:11},source:''},
                      name: 'x'
                    },
                    right: {
                      type: 'Identifier',
                      loc:{start:{line:1,column:14},end:{line:1,column:15},source:''},
                      name: 'y'
                    }
                  },
                  shorthand: true
                }
              ]
            },
            init: null
          }
        ]
      },
      right: {
        type: 'Identifier',
        loc:{start:{line:1,column:20},end:{line:1,column:23},source:''},
        name: 'obj'
      },
      await: false,
      body: {
        type: 'EmptyStatement',
        loc:{start:{line:1,column:24},end:{line:1,column:25},source:''}
      }
    }
  ]
}

tokens (13x):
       ID_for PUNC_PAREN_OPEN ID_var PUNC_CURLY_OPEN IDENT PUNC_EQ
       IDENT PUNC_CURLY_CLOSE ID_of IDENT PUNC_PAREN_CLOSE PUNC_SEMI
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
for (var {x = y} of obj) ;
````

Produces same AST
