# Tenko parser test case

- Path: tests/testcases/async_keyword/async_call_in_generator_with_nested_yield.md

> :: async keyword
>
> ::> async call in generator with nested yield

## Input

`````js
function *f(){ async(await); }
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
  loc:{start:{line:1,column:0},end:{line:1,column:30},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:30},source:''},
      generator: true,
      async: false,
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:10},end:{line:1,column:11},source:''},
        name: 'f'
      },
      params: [],
      body: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:13},end:{line:1,column:30},source:''},
        body: [
          {
            type: 'ExpressionStatement',
            loc:{start:{line:1,column:15},end:{line:1,column:28},source:''},
            expression: {
              type: 'CallExpression',
              loc:{start:{line:1,column:15},end:{line:1,column:27},source:''},
              callee: {
                type: 'Identifier',
                loc:{start:{line:1,column:15},end:{line:1,column:20},source:''},
                name: 'async'
              },
              arguments: [
                {
                  type: 'Identifier',
                  loc:{start:{line:1,column:21},end:{line:1,column:26},source:''},
                  name: 'await'
                }
              ]
            }
          }
        ]
      }
    }
  ]
}

tokens (13x):
       ID_function PUNC_STAR IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN ID_async PUNC_PAREN_OPEN ID_await
       PUNC_PAREN_CLOSE PUNC_SEMI PUNC_CURLY_CLOSE
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

`````
throws: Parser error!
  Cannot use `await` as var when goal=module but found `await` outside an async function

function *f(){ async(await); }
                          ^------- error
`````


### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [sloppy]:

````js
function* f() {(async(await));}
````

Produces same AST
