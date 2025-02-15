# Tenko parser autogenerated test case

- From: tests/testcases/operator_precedent/autogen.md
- Path: tests/testcases/operator_precedent/gen/in_array/a_instanceof_b_x003e_c.md

> :: operator precedent : gen : in array
>
> ::> a instanceof b x003e c

## Input


`````js
[ a instanceof b > c ]
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
  loc:{start:{line:1,column:0},end:{line:1,column:22},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:22},source:''},
      expression: {
        type: 'ArrayExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:22},source:''},
        elements: [
          {
            type: 'BinaryExpression',
            loc:{start:{line:1,column:2},end:{line:1,column:20},source:''},
            left: {
              type: 'BinaryExpression',
              loc:{start:{line:1,column:2},end:{line:1,column:16},source:''},
              left: {
                type: 'Identifier',
                loc:{start:{line:1,column:2},end:{line:1,column:3},source:''},
                name: 'a'
              },
              operator: 'instanceof',
              right: {
                type: 'Identifier',
                loc:{start:{line:1,column:15},end:{line:1,column:16},source:''},
                name: 'b'
              }
            },
            operator: '>',
            right: {
              type: 'Identifier',
              loc:{start:{line:1,column:19},end:{line:1,column:20},source:''},
              name: 'c'
            }
          }
        ]
      }
    }
  ]
}

tokens (9x):
       PUNC_BRACKET_OPEN IDENT ID_instanceof IDENT PUNC_GT IDENT
       PUNC_BRACKET_CLOSE ASI
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
([((((a) instanceof (b))) > (c)),]);
````

Produces same AST
