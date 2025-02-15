# Tenko parser test case

- Path: tests/testcases/yield/arguments_checks/async_arrow_func_args/in_weird_group.md

> :: yield : arguments checks : async arrow func args
>
> ::> in weird group

## Input

`````js
function *g() { async (x = yield); }
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
  loc:{start:{line:1,column:0},end:{line:1,column:36},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:36},source:''},
      generator: true,
      async: false,
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:10},end:{line:1,column:11},source:''},
        name: 'g'
      },
      params: [],
      body: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:14},end:{line:1,column:36},source:''},
        body: [
          {
            type: 'ExpressionStatement',
            loc:{start:{line:1,column:16},end:{line:1,column:34},source:''},
            expression: {
              type: 'CallExpression',
              loc:{start:{line:1,column:16},end:{line:1,column:33},source:''},
              callee: {
                type: 'Identifier',
                loc:{start:{line:1,column:16},end:{line:1,column:21},source:''},
                name: 'async'
              },
              arguments: [
                {
                  type: 'AssignmentExpression',
                  loc:{start:{line:1,column:23},end:{line:1,column:32},source:''},
                  left: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:23},end:{line:1,column:24},source:''},
                    name: 'x'
                  },
                  operator: '=',
                  right: {
                    type: 'YieldExpression',
                    loc:{start:{line:1,column:27},end:{line:1,column:32},source:''},
                    delegate: false,
                    argument: null
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
}

tokens (15x):
       ID_function PUNC_STAR IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN ID_async PUNC_PAREN_OPEN IDENT PUNC_EQ ID_yield
       PUNC_PAREN_CLOSE PUNC_SEMI PUNC_CURLY_CLOSE
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
function* g() {(async((x = (yield))));}
````

Produces same AST
