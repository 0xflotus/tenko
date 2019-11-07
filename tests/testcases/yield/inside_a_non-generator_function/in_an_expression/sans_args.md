# Tenko parser test case

- Path: tests/testcases/yield/inside_a_non-generator_function/in_an_expression/sans_args.md

> :: yield : inside a non-generator function : in an expression
>
> ::> sans args

## Input

`````js
function f(){ 5 + yield }
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
  loc:{start:{line:1,column:0},end:{line:1,column:25},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:25},source:''},
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
        loc:{start:{line:1,column:12},end:{line:1,column:25},source:''},
        body: [
          {
            type: 'ExpressionStatement',
            loc:{start:{line:1,column:14},end:{line:1,column:23},source:''},
            expression: {
              type: 'BinaryExpression',
              loc:{start:{line:1,column:14},end:{line:1,column:23},source:''},
              left: {
                type: 'Literal',
                loc:{start:{line:1,column:14},end:{line:1,column:15},source:''},
                value: 5,
                raw: '5'
              },
              operator: '+',
              right: {
                type: 'Identifier',
                loc:{start:{line:1,column:18},end:{line:1,column:23},source:''},
                name: 'yield'
              }
            }
          }
        ]
      }
    }
  ]
}

tokens (11x):
       ID_function IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN NUMBER_DEC PUNC_PLUS ID_yield ASI
       PUNC_CURLY_CLOSE
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use `yield` outside of generator functions when in strict mode

function f(){ 5 + yield }
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
function f() {(((5) + (yield)));}
````

Produces same AST