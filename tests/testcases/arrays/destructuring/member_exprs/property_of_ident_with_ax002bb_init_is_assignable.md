# Tenko parser test case

- Path: tests/testcases/arrays/destructuring/member_exprs/property_of_ident_with_ax002bb_init_is_assignable.md

> :: arrays : destructuring : member exprs
>
> ::> property of ident with ax002bb init is assignable

## Input

`````js
[x.y = a + b] = z
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
  loc:{start:{line:1,column:0},end:{line:1,column:17},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:17},source:''},
      expression: {
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:17},source:''},
        left: {
          type: 'ArrayPattern',
          loc:{start:{line:1,column:0},end:{line:1,column:13},source:''},
          elements: [
            {
              type: 'AssignmentPattern',
              loc:{start:{line:1,column:1},end:{line:1,column:12},source:''},
              left: {
                type: 'MemberExpression',
                loc:{start:{line:1,column:1},end:{line:1,column:4},source:''},
                object: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:1},end:{line:1,column:2},source:''},
                  name: 'x'
                },
                property: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:3},end:{line:1,column:4},source:''},
                  name: 'y'
                },
                computed: false
              },
              right: {
                type: 'BinaryExpression',
                loc:{start:{line:1,column:7},end:{line:1,column:12},source:''},
                left: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:7},end:{line:1,column:8},source:''},
                  name: 'a'
                },
                operator: '+',
                right: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:11},end:{line:1,column:12},source:''},
                  name: 'b'
                }
              }
            }
          ]
        },
        operator: '=',
        right: {
          type: 'Identifier',
          loc:{start:{line:1,column:16},end:{line:1,column:17},source:''},
          name: 'z'
        }
      }
    }
  ]
}

tokens (13x):
       PUNC_BRACKET_OPEN IDENT PUNC_DOT IDENT PUNC_EQ IDENT PUNC_PLUS
       IDENT PUNC_BRACKET_CLOSE PUNC_EQ IDENT ASI
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
(([(x).y = ((a) + (b)),] = z));
````

Produces same AST
