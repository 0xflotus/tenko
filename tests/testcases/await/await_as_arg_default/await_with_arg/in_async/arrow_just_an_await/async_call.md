# Tenko parser test case

- Path: tests/testcases/await/await_as_arg_default/await_with_arg/in_async/arrow_just_an_await/async_call.md

> :: await : await as arg default : await with arg : in async : arrow just an await
>
> ::> async call

## Input

`````js
async function a(){     async (foo = await bar);     }
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
  loc:{start:{line:1,column:0},end:{line:1,column:54},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:54},source:''},
      generator: false,
      async: true,
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:15},end:{line:1,column:16},source:''},
        name: 'a'
      },
      params: [],
      body: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:18},end:{line:1,column:54},source:''},
        body: [
          {
            type: 'ExpressionStatement',
            loc:{start:{line:1,column:24},end:{line:1,column:48},source:''},
            expression: {
              type: 'CallExpression',
              loc:{start:{line:1,column:24},end:{line:1,column:47},source:''},
              callee: {
                type: 'Identifier',
                loc:{start:{line:1,column:24},end:{line:1,column:29},source:''},
                name: 'async'
              },
              arguments: [
                {
                  type: 'AssignmentExpression',
                  loc:{start:{line:1,column:31},end:{line:1,column:46},source:''},
                  left: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:31},end:{line:1,column:34},source:''},
                    name: 'foo'
                  },
                  operator: '=',
                  right: {
                    type: 'AwaitExpression',
                    loc:{start:{line:1,column:37},end:{line:1,column:46},source:''},
                    argument: {
                      type: 'Identifier',
                      loc:{start:{line:1,column:43},end:{line:1,column:46},source:''},
                      name: 'bar'
                    }
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

tokens (16x):
       ID_async ID_function IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN ID_async PUNC_PAREN_OPEN IDENT PUNC_EQ ID_await
       IDENT PUNC_PAREN_CLOSE PUNC_SEMI PUNC_CURLY_CLOSE
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
async function a() {(async((foo = await (bar))));}
````

Produces same AST