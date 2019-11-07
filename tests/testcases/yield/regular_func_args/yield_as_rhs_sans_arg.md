# Tenko parser test case

- Path: tests/testcases/yield/regular_func_args/yield_as_rhs_sans_arg.md

> :: yield : regular func args
>
> ::> yield as rhs sans arg
>
> yield inside generator is never a var but this state is determined by the function whose args are being parsed, not any outer function

## Input

`````js
function *g() { function f(x = x + yield) {}; }
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
  loc:{start:{line:1,column:0},end:{line:1,column:47},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:47},source:''},
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
        loc:{start:{line:1,column:14},end:{line:1,column:47},source:''},
        body: [
          {
            type: 'FunctionDeclaration',
            loc:{start:{line:1,column:16},end:{line:1,column:44},source:''},
            generator: false,
            async: false,
            id: {
              type: 'Identifier',
              loc:{start:{line:1,column:25},end:{line:1,column:26},source:''},
              name: 'f'
            },
            params: [
              {
                type: 'AssignmentPattern',
                loc:{start:{line:1,column:27},end:{line:1,column:40},source:''},
                left: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:27},end:{line:1,column:28},source:''},
                  name: 'x'
                },
                right: {
                  type: 'BinaryExpression',
                  loc:{start:{line:1,column:31},end:{line:1,column:40},source:''},
                  left: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:31},end:{line:1,column:32},source:''},
                    name: 'x'
                  },
                  operator: '+',
                  right: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:35},end:{line:1,column:40},source:''},
                    name: 'yield'
                  }
                }
              }
            ],
            body: {
              type: 'BlockStatement',
              loc:{start:{line:1,column:42},end:{line:1,column:44},source:''},
              body: []
            }
          },
          {
            type: 'EmptyStatement',
            loc:{start:{line:1,column:44},end:{line:1,column:45},source:''}
          }
        ]
      }
    }
  ]
}

tokens (20x):
       ID_function PUNC_STAR IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN ID_function IDENT PUNC_PAREN_OPEN IDENT PUNC_EQ
       IDENT PUNC_PLUS ID_yield PUNC_PAREN_CLOSE PUNC_CURLY_OPEN
       PUNC_CURLY_CLOSE PUNC_SEMI PUNC_CURLY_CLOSE
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use `yield` outside of generator functions when in strict mode

function *g() { function f(x = x + yield) {}; }
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
function* g() {function f(x = ((x) + (yield))) {}
;}
````

Produces same AST