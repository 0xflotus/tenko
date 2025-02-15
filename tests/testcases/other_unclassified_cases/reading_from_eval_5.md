# Tenko parser test case

- Path: tests/testcases/other_unclassified_cases/reading_from_eval_5.md

> :: other unclassified cases
>
> ::> reading from eval 5

## Input

`````js
eval.foo = bar
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
  loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
      expression: {
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
        left: {
          type: 'MemberExpression',
          loc:{start:{line:1,column:0},end:{line:1,column:8},source:''},
          object: {
            type: 'Identifier',
            loc:{start:{line:1,column:0},end:{line:1,column:4},source:''},
            name: 'eval'
          },
          property: {
            type: 'Identifier',
            loc:{start:{line:1,column:5},end:{line:1,column:8},source:''},
            name: 'foo'
          },
          computed: false
        },
        operator: '=',
        right: {
          type: 'Identifier',
          loc:{start:{line:1,column:11},end:{line:1,column:14},source:''},
          name: 'bar'
        }
      }
    }
  ]
}

tokens (7x):
       ID_eval PUNC_DOT IDENT PUNC_EQ IDENT ASI
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
(((eval).foo = bar));
````

Produces same AST
