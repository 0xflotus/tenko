# Tenko parser test case

- Path: tests/testcases/yield/state_resetting_edge_cases/yield_without_arg_could_be_var/nested_non-gen_funcs_inside_a_non-gen/yield_in_args_of_nested_regular_function.md

> :: yield : state resetting edge cases : yield without arg could be var : nested non-gen funcs inside a non-gen
>
> ::> yield in args of nested regular function

## Input

`````js
function f(){  return function(x=yield) {};  }
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
  loc:{start:{line:1,column:0},end:{line:1,column:46},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:46},source:''},
      generator: false,
      async: false,
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:9},end:{line:1,column:10},source:''},
        name: 'f'
      },
      params: [],
      body: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:12},end:{line:1,column:46},source:''},
        body: [
          {
            type: 'ReturnStatement',
            loc:{start:{line:1,column:15},end:{line:1,column:43},source:''},
            argument: {
              type: 'FunctionExpression',
              loc:{start:{line:1,column:22},end:{line:1,column:42},source:''},
              generator: false,
              async: false,
              id: null,
              params: [
                {
                  type: 'AssignmentPattern',
                  loc:{start:{line:1,column:31},end:{line:1,column:38},source:''},
                  left: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:31},end:{line:1,column:32},source:''},
                    name: 'x'
                  },
                  right: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:33},end:{line:1,column:38},source:''},
                    name: 'yield'
                  }
                }
              ],
              body: {
                type: 'BlockStatement',
                loc:{start:{line:1,column:40},end:{line:1,column:42},source:''},
                body: []
              }
            }
          }
        ]
      }
    }
  ]
}

tokens (17x):
       ID_function IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN ID_return ID_function PUNC_PAREN_OPEN IDENT
       PUNC_EQ ID_yield PUNC_PAREN_CLOSE PUNC_CURLY_OPEN
       PUNC_CURLY_CLOSE PUNC_SEMI PUNC_CURLY_CLOSE
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use `yield` outside of generator functions when in strict mode

function f(){  return function(x=yield) {};  }
                                      ^------- error
`````


### Module goal

Parsed with the module goal.

_Output same as strict mode._

### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [sloppy]:

````js
function f() {return function(x = yield) {};}
````

Produces same AST
