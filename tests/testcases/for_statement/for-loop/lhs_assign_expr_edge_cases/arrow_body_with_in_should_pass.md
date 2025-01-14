# Tenko parser test case

- Path: tests/testcases/for_statement/for-loop/lhs_assign_expr_edge_cases/arrow_body_with_in_should_pass.md

> :: for statement : for-loop : lhs assign expr edge cases
>
> ::> arrow body with in should pass
>
> counter test to arrow_body_with_in_should_pass.md (`for (x=>x in y;;);`)

## PASS

## Input

`````js
for (x=>{x in y};;);
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
  loc:{start:{line:1,column:0},end:{line:1,column:20},source:''},
  body: [
    {
      type: 'ForStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:20},source:''},
      init: {
        type: 'ArrowFunctionExpression',
        loc:{start:{line:1,column:5},end:{line:1,column:16},source:''},
        params: [
          {
            type: 'Identifier',
            loc:{start:{line:1,column:5},end:{line:1,column:6},source:''},
            name: 'x'
          }
        ],
        id: null,
        generator: false,
        async: false,
        expression: false,
        body: {
          type: 'BlockStatement',
          loc:{start:{line:1,column:8},end:{line:1,column:16},source:''},
          body: [
            {
              type: 'ExpressionStatement',
              loc:{start:{line:1,column:9},end:{line:1,column:15},source:''},
              expression: {
                type: 'BinaryExpression',
                loc:{start:{line:1,column:9},end:{line:1,column:15},source:''},
                left: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:9},end:{line:1,column:10},source:''},
                  name: 'x'
                },
                operator: 'in',
                right: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:14},end:{line:1,column:15},source:''},
                  name: 'y'
                }
              }
            }
          ]
        }
      },
      test: null,
      update: null,
      body: {
        type: 'EmptyStatement',
        loc:{start:{line:1,column:19},end:{line:1,column:20},source:''}
      }
    }
  ]
}

tokens (15x):
       ID_for PUNC_PAREN_OPEN IDENT PUNC_EQ_GT PUNC_CURLY_OPEN IDENT
       ID_in IDENT ASI PUNC_CURLY_CLOSE PUNC_SEMI PUNC_SEMI
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
for ((x => {(((x) in (y)));});;) ;
````

Produces same AST
