# Tenko parser test case

- Path: tests/testcases/new/newx002etarget/scoping/in_an_arrow_in_another_function.md

> :: new : newx002etarget : scoping
>
> ::> in an arrow in another function
>
> refers to the surrounding function (okay, sure)

## Input

`````js
function f(){ return _ => new.target }
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
  loc:{start:{line:1,column:0},end:{line:1,column:38},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:38},source:''},
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
        loc:{start:{line:1,column:12},end:{line:1,column:38},source:''},
        body: [
          {
            type: 'ReturnStatement',
            loc:{start:{line:1,column:14},end:{line:1,column:36},source:''},
            argument: {
              type: 'ArrowFunctionExpression',
              loc:{start:{line:1,column:21},end:{line:1,column:36},source:''},
              params: [
                {
                  type: 'Identifier',
                  loc:{start:{line:1,column:21},end:{line:1,column:22},source:''},
                  name: '_'
                }
              ],
              id: null,
              generator: false,
              async: false,
              expression: true,
              body: {
                type: 'MetaProperty',
                loc:{start:{line:1,column:26},end:{line:1,column:36},source:''},
                meta: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:26},end:{line:1,column:29},source:''},
                  name: 'new'
                },
                property: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:30},end:{line:1,column:36},source:''},
                  name: 'target'
                }
              }
            }
          }
        ]
      }
    }
  ]
}

tokens (14x):
       ID_function IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN ID_return IDENT PUNC_EQ_GT ID_new PUNC_DOT
       ID_target ASI PUNC_CURLY_CLOSE
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
function f() {return _ => (new.target);}
````

Produces same AST