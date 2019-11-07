# Tenko parser test case

- Path: tests/testcases/functions/expression/regex_edge_case/with_async/expression/with_flag.md

> :: functions : expression : regex edge case : with async : expression
>
> ::> with flag
>
> note: an expression statement requires a semi so ASI is attempted and will fail because it will not apply when the next line starts with a forward slash so it is a division

## Input

`````js
typeof async function f(){}
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
        type: 'BinaryExpression',
        loc:{start:{line:1,column:0},end:{line:2,column:6},source:''},
        left: {
          type: 'BinaryExpression',
          loc:{start:{line:1,column:0},end:{line:2,column:4},source:''},
          left: {
            type: 'UnaryExpression',
            loc:{start:{line:1,column:0},end:{line:1,column:27},source:''},
            operator: 'typeof',
            prefix: true,
            argument: {
              type: 'FunctionExpression',
              loc:{start:{line:1,column:7},end:{line:1,column:27},source:''},
              generator: false,
              async: true,
              id: {
                type: 'Identifier',
                loc:{start:{line:1,column:22},end:{line:1,column:23},source:''},
                name: 'f'
              },
              params: [],
              body: {
                type: 'BlockStatement',
                loc:{start:{line:1,column:25},end:{line:1,column:27},source:''},
                body: []
              }
            }
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
  ]
}

tokens (14x):
       ID_typeof ID_async ID_function IDENT PUNC_PAREN_OPEN
       PUNC_PAREN_CLOSE PUNC_CURLY_OPEN PUNC_CURLY_CLOSE PUNC_DIV
       IDENT PUNC_DIV IDENT ASI
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
(((((typeof (async function f() {})) / (foo))) / (g)));
````

Produces same AST