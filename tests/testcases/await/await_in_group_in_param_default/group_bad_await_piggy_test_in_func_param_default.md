# Tenko parser test case

- Path: tests/testcases/await/await_in_group_in_param_default/group_bad_await_piggy_test_in_func_param_default.md

> :: await : await in group in param default
>
> ::> group bad await piggy test in func param default

## Input

`````js
async function f(){    function g(x=(await)=y){}   }
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
  loc:{start:{line:1,column:0},end:{line:1,column:52},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:52},source:''},
      generator: false,
      async: true,
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:15},end:{line:1,column:16},source:''},
        name: 'f'
      },
      params: [],
      body: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:18},end:{line:1,column:52},source:''},
        body: [
          {
            type: 'FunctionDeclaration',
            loc:{start:{line:1,column:23},end:{line:1,column:48},source:''},
            generator: false,
            async: false,
            id: {
              type: 'Identifier',
              loc:{start:{line:1,column:32},end:{line:1,column:33},source:''},
              name: 'g'
            },
            params: [
              {
                type: 'AssignmentPattern',
                loc:{start:{line:1,column:34},end:{line:1,column:45},source:''},
                left: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:34},end:{line:1,column:35},source:''},
                  name: 'x'
                },
                right: {
                  type: 'AssignmentExpression',
                  loc:{start:{line:1,column:36},end:{line:1,column:45},source:''},
                  left: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:37},end:{line:1,column:42},source:''},
                    name: 'await'
                  },
                  operator: '=',
                  right: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:44},end:{line:1,column:45},source:''},
                    name: 'y'
                  }
                }
              }
            ],
            body: {
              type: 'BlockStatement',
              loc:{start:{line:1,column:46},end:{line:1,column:48},source:''},
              body: []
            }
          }
        ]
      }
    }
  ]
}

tokens (21x):
       ID_async ID_function IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN ID_function IDENT PUNC_PAREN_OPEN IDENT PUNC_EQ
       PUNC_PAREN_OPEN ID_await PUNC_PAREN_CLOSE PUNC_EQ IDENT
       PUNC_PAREN_CLOSE PUNC_CURLY_OPEN PUNC_CURLY_CLOSE
       PUNC_CURLY_CLOSE
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

`````
throws: Parser error!
  Cannot use `await` as var when goal=module but found `await` outside an async function

async function f(){    function g(x=(await)=y){}   }
                                          ^------- error
`````


### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [sloppy]:

````js
async function f() {function g(x = (await = y)) {}}
````

Produces same AST