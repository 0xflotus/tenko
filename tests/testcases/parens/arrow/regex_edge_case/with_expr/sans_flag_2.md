# Tenko parser test case

- Path: tests/testcases/parens/arrow/regex_edge_case/with_expr/sans_flag_2.md

> :: parens : arrow : regex edge case : with expr
>
> ::> sans flag 2
>
> the expression becomes a division which is fine ((_/foo)/g) (make sure tree is correct)

## Input

`````js
_ => _
/foo/g
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
  loc:{start:{line:1,column:0},end:{line:2,column:6},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:2,column:6},source:''},
      expression: {
        type: 'ArrowFunctionExpression',
        loc:{start:{line:1,column:0},end:{line:2,column:6},source:''},
        params: [
          {
            type: 'Identifier',
            loc:{start:{line:1,column:0},end:{line:1,column:1},source:''},
            name: '_'
          }
        ],
        id: null,
        generator: false,
        async: false,
        expression: true,
        body: {
          type: 'BinaryExpression',
          loc:{start:{line:1,column:5},end:{line:2,column:6},source:''},
          left: {
            type: 'BinaryExpression',
            loc:{start:{line:1,column:5},end:{line:2,column:4},source:''},
            left: {
              type: 'Identifier',
              loc:{start:{line:1,column:5},end:{line:1,column:6},source:''},
              name: '_'
            },
            operator: '/',
            right: {
              type: 'Identifier',
              loc:{start:{line:2,column:1},end:{line:2,column:4},source:''},
              name: 'foo'
            }
          },
          operator: '/',
          right: {
            type: 'Identifier',
            loc:{start:{line:2,column:5},end:{line:2,column:6},source:''},
            name: 'g'
          }
        }
      }
    }
  ]
}

tokens (9x):
       IDENT PUNC_EQ_GT IDENT PUNC_DIV IDENT PUNC_DIV IDENT ASI
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
_ => (((((_) / (foo))) / (g)));
````

Produces same AST