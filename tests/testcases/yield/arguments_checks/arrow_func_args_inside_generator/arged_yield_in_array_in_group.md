# Tenko parser test case

- Path: tests/testcases/yield/arguments_checks/arrow_func_args_inside_generator/arged_yield_in_array_in_group.md

> :: yield : arguments checks : arrow func args inside generator
>
> ::> arged yield in array in group

## Input

`````js
function *g(){ (x = [yield y]) }
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
  loc:{start:{line:1,column:0},end:{line:1,column:32},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:32},source:''},
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
        loc:{start:{line:1,column:13},end:{line:1,column:32},source:''},
        body: [
          {
            type: 'ExpressionStatement',
            loc:{start:{line:1,column:15},end:{line:1,column:30},source:''},
            expression: {
              type: 'AssignmentExpression',
              loc:{start:{line:1,column:16},end:{line:1,column:29},source:''},
              left: {
                type: 'Identifier',
                loc:{start:{line:1,column:16},end:{line:1,column:17},source:''},
                name: 'x'
              },
              operator: '=',
              right: {
                type: 'ArrayExpression',
                loc:{start:{line:1,column:20},end:{line:1,column:29},source:''},
                elements: [
                  {
                    type: 'YieldExpression',
                    loc:{start:{line:1,column:21},end:{line:1,column:28},source:''},
                    delegate: false,
                    argument: {
                      type: 'Identifier',
                      loc:{start:{line:1,column:27},end:{line:1,column:28},source:''},
                      name: 'y'
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    }
  ]
}

tokens (17x):
       ID_function PUNC_STAR IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN PUNC_PAREN_OPEN IDENT PUNC_EQ PUNC_BRACKET_OPEN
       ID_yield IDENT PUNC_BRACKET_CLOSE PUNC_PAREN_CLOSE ASI
       PUNC_CURLY_CLOSE
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
function* g() {((x = [(yield (y)),]));}
````

Produces same AST
