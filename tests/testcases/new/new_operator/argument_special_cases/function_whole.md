# Tenko parser test case

- Path: tests/testcases/new/new_operator/argument_special_cases/function_whole.md

> :: new : new operator : argument special cases
>
> ::> function whole

## Input

`````js
new function(){}
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
  loc:{start:{line:1,column:0},end:{line:1,column:16},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:16},source:''},
      expression: {
        type: 'NewExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:16},source:''},
        arguments: [],
        callee: {
          type: 'FunctionExpression',
          loc:{start:{line:1,column:4},end:{line:1,column:16},source:''},
          generator: false,
          async: false,
          id: null,
          params: [],
          body: {
            type: 'BlockStatement',
            loc:{start:{line:1,column:14},end:{line:1,column:16},source:''},
            body: []
          }
        }
      }
    }
  ]
}

tokens (8x):
       ID_new ID_function PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN PUNC_CURLY_CLOSE ASI
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
new (function() {})();
````

Produces same AST
