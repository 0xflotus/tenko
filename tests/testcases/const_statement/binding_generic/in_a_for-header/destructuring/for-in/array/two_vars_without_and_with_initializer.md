# Tenko parser test case

- Path: tests/testcases/const_statement/binding_generic/in_a_for-header/destructuring/for-in/array/two_vars_without_and_with_initializer.md

> :: const statement : binding generic : in a for-header : destructuring : for-in : array
>
> ::> two vars without and with initializer

## Input

`````js
for (const [foo, bar=b] in arr);
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
  loc:{start:{line:1,column:0},end:{line:1,column:32},source:''},
  body: [
    {
      type: 'ForInStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:32},source:''},
      left: {
        type: 'VariableDeclaration',
        loc:{start:{line:1,column:5},end:{line:1,column:23},source:''},
        kind: 'const',
        declarations: [
          {
            type: 'VariableDeclarator',
            loc:{start:{line:1,column:11},end:{line:1,column:23},source:''},
            id: {
              type: 'ArrayPattern',
              loc:{start:{line:1,column:11},end:{line:1,column:23},source:''},
              elements: [
                {
                  type: 'Identifier',
                  loc:{start:{line:1,column:12},end:{line:1,column:15},source:''},
                  name: 'foo'
                },
                {
                  type: 'AssignmentPattern',
                  loc:{start:{line:1,column:17},end:{line:1,column:22},source:''},
                  left: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:17},end:{line:1,column:20},source:''},
                    name: 'bar'
                  },
                  right: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:21},end:{line:1,column:22},source:''},
                    name: 'b'
                  }
                }
              ]
            },
            init: null
          }
        ]
      },
      right: {
        type: 'Identifier',
        loc:{start:{line:1,column:27},end:{line:1,column:30},source:''},
        name: 'arr'
      },
      body: {
        type: 'EmptyStatement',
        loc:{start:{line:1,column:31},end:{line:1,column:32},source:''}
      }
    }
  ]
}

tokens (15x):
       ID_for PUNC_PAREN_OPEN ID_const PUNC_BRACKET_OPEN IDENT
       PUNC_COMMA IDENT PUNC_EQ IDENT PUNC_BRACKET_CLOSE ID_in IDENT
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
for (const [foo, bar = b,] in arr) ;
````

Produces same AST
