# Tenko parser test case

- Path: tests/testcases/parens/group/group_of_some_two_assignments_3.md

> :: parens : group
>
> ::> group of some two assignments 3

## Input

`````js
(a = 1, b = 2);
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
  loc:{start:{line:1,column:0},end:{line:1,column:15},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:15},source:''},
      expression: {
        type: 'SequenceExpression',
        loc:{start:{line:1,column:1},end:{line:1,column:13},source:''},
        expressions: [
          {
            type: 'AssignmentExpression',
            loc:{start:{line:1,column:1},end:{line:1,column:6},source:''},
            left: {
              type: 'Identifier',
              loc:{start:{line:1,column:1},end:{line:1,column:2},source:''},
              name: 'a'
            },
            operator: '=',
            right: {
              type: 'Literal',
              loc:{start:{line:1,column:5},end:{line:1,column:6},source:''},
              value: 1,
              raw: '1'
            }
          },
          {
            type: 'AssignmentExpression',
            loc:{start:{line:1,column:8},end:{line:1,column:13},source:''},
            left: {
              type: 'Identifier',
              loc:{start:{line:1,column:8},end:{line:1,column:9},source:''},
              name: 'b'
            },
            operator: '=',
            right: {
              type: 'Literal',
              loc:{start:{line:1,column:12},end:{line:1,column:13},source:''},
              value: 2,
              raw: '2'
            }
          }
        ]
      }
    }
  ]
}

tokens (11x):
       PUNC_PAREN_OPEN IDENT PUNC_EQ NUMBER_DEC PUNC_COMMA IDENT
       PUNC_EQ NUMBER_DEC PUNC_PAREN_CLOSE PUNC_SEMI
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
(((a = 1), (b = 2)));
````

Produces same AST
