# Tenko parser test case

- Path: tests/testcases/var_statement/binding_generic/in_a_for-header/destructuring/for-in/array/two_vars_with_and_without_initializer.md

> :: var statement : binding generic : in a for-header : destructuring : for-in : array
>
> ::> two vars with and without initializer

## Input

`````js
for (var [foo=a, bar] in arr);
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
  loc:{start:{line:1,column:0},end:{line:1,column:30},source:''},
  body: [
    {
      type: 'ForInStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:30},source:''},
      left: {
        type: 'VariableDeclaration',
        loc:{start:{line:1,column:5},end:{line:1,column:21},source:''},
        kind: 'var',
        declarations: [
          {
            type: 'VariableDeclarator',
            loc:{start:{line:1,column:9},end:{line:1,column:21},source:''},
            id: {
              type: 'ArrayPattern',
              loc:{start:{line:1,column:9},end:{line:1,column:21},source:''},
              elements: [
                {
                  type: 'AssignmentPattern',
                  loc:{start:{line:1,column:10},end:{line:1,column:15},source:''},
                  left: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:10},end:{line:1,column:13},source:''},
                    name: 'foo'
                  },
                  right: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:14},end:{line:1,column:15},source:''},
                    name: 'a'
                  }
                },
                {
                  type: 'Identifier',
                  loc:{start:{line:1,column:17},end:{line:1,column:20},source:''},
                  name: 'bar'
                }
              ]
            },
            init: null
          }
        ]
      },
      right: {
        type: 'Identifier',
        loc:{start:{line:1,column:25},end:{line:1,column:28},source:''},
        name: 'arr'
      },
      body: {
        type: 'EmptyStatement',
        loc:{start:{line:1,column:29},end:{line:1,column:30},source:''}
      }
    }
  ]
}

tokens (15x):
       ID_for PUNC_PAREN_OPEN ID_var PUNC_BRACKET_OPEN IDENT PUNC_EQ
       IDENT PUNC_COMMA IDENT PUNC_BRACKET_CLOSE ID_in IDENT
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
for (var [foo = a, bar,] in arr) ;
````

Produces same AST
