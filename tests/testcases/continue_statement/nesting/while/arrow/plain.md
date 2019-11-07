# Tenko parser test case

- Path: tests/testcases/continue_statement/nesting/while/arrow/plain.md

> :: continue statement : nesting : while : arrow
>
> ::> plain

## Input

`````js
() => { while (true)       continue    }
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
  loc:{start:{line:1,column:0},end:{line:1,column:40},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:40},source:''},
      expression: {
        type: 'ArrowFunctionExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:40},source:''},
        params: [],
        id: null,
        generator: false,
        async: false,
        expression: false,
        body: {
          type: 'BlockStatement',
          loc:{start:{line:1,column:6},end:{line:1,column:40},source:''},
          body: [
            {
              type: 'WhileStatement',
              loc:{start:{line:1,column:8},end:{line:1,column:35},source:''},
              test: {
                type: 'Literal',
                loc:{start:{line:1,column:15},end:{line:1,column:19},source:''},
                value: true,
                raw: 'true'
              },
              body: {
                type: 'ContinueStatement',
                loc:{start:{line:1,column:27},end:{line:1,column:35},source:''},
                label: null
              }
            }
          ]
        }
      }
    }
  ]
}

tokens (13x):
       PUNC_PAREN_OPEN PUNC_PAREN_CLOSE PUNC_EQ_GT PUNC_CURLY_OPEN
       ID_while PUNC_PAREN_OPEN ID_true PUNC_PAREN_CLOSE ID_continue
       ASI PUNC_CURLY_CLOSE ASI
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
() => {while (true) continue;};
````

Produces same AST