# Tenko parser test case

- Path: tests/testcases/new/new_operator/argument_special_cases/new_on_the_result_of_new_can_be_made_valid_x00281x0029.md

> :: new : new operator : argument special cases
>
> ::> new on the result of new can be made valid x00281x0029

## Input

`````js
new new A().foo
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
        type: 'NewExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:15},source:''},
        arguments: [],
        callee: {
          type: 'MemberExpression',
          loc:{start:{line:1,column:4},end:{line:1,column:15},source:''},
          object: {
            type: 'NewExpression',
            loc:{start:{line:1,column:4},end:{line:1,column:11},source:''},
            arguments: [],
            callee: {
              type: 'Identifier',
              loc:{start:{line:1,column:8},end:{line:1,column:9},source:''},
              name: 'A'
            }
          },
          property: {
            type: 'Identifier',
            loc:{start:{line:1,column:12},end:{line:1,column:15},source:''},
            name: 'foo'
          },
          computed: false
        }
      }
    }
  ]
}

tokens (9x):
       ID_new ID_new IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE PUNC_DOT
       IDENT ASI
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
new (new (A)().foo)();
````

Produces same AST
