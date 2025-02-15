# Tenko parser test case

- Path: tests/testcases/functions/yield_and_await_keyword_cases/global/body/global_x_x003cyield_awaitx003e_x_x003cregular_async_generator_async_genx003e_x_arg-default_x_expr/async_generator_func_expr_yield.md

> :: functions : yield and await keyword cases : global : body : global x x003cyield awaitx003e x x003cregular async generator async genx003e x arg-default x expr
>
> ::> async generator func expr yield
>
> barring exceptions -- for all functions and methods goes:
>
> - name of the func keeps outer scope await/yield state. exception: function expressions clear it.
> - args and body explicitly set it according to the type of this function (so async sets await clears yield, etc)
>
> This means you can use `await` as a function name as long as you are not in strict mode and not already inside an async function and it's okay if the function whose name is being defined is actually async itself.
>
> the cases to test are a cross product of:
>
> - `<global, inside async, inside generator>` 
> - `x` 
> - `<yield, await>`
> - `x` 
> - `<regular, async, generator, async gen>`
> - `x` 
> - `<name, arg-name, arg-default, body>`
> - `x`
> - `<class method, obj method, decl, expr, default>`

## Input

`````js
let f = async function *f() { return yield 100; }
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
  loc:{start:{line:1,column:0},end:{line:1,column:49},source:''},
  body: [
    {
      type: 'VariableDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:49},source:''},
      kind: 'let',
      declarations: [
        {
          type: 'VariableDeclarator',
          loc:{start:{line:1,column:4},end:{line:1,column:49},source:''},
          id: {
            type: 'Identifier',
            loc:{start:{line:1,column:4},end:{line:1,column:5},source:''},
            name: 'f'
          },
          init: {
            type: 'FunctionExpression',
            loc:{start:{line:1,column:8},end:{line:1,column:49},source:''},
            generator: true,
            async: true,
            id: {
              type: 'Identifier',
              loc:{start:{line:1,column:24},end:{line:1,column:25},source:''},
              name: 'f'
            },
            params: [],
            body: {
              type: 'BlockStatement',
              loc:{start:{line:1,column:28},end:{line:1,column:49},source:''},
              body: [
                {
                  type: 'ReturnStatement',
                  loc:{start:{line:1,column:30},end:{line:1,column:47},source:''},
                  argument: {
                    type: 'YieldExpression',
                    loc:{start:{line:1,column:37},end:{line:1,column:46},source:''},
                    delegate: false,
                    argument: {
                      type: 'Literal',
                      loc:{start:{line:1,column:43},end:{line:1,column:46},source:''},
                      value: 100,
                      raw: '100'
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    }
  ]
}

tokens (17x):
       ID_let IDENT PUNC_EQ ID_async ID_function PUNC_STAR IDENT
       PUNC_PAREN_OPEN PUNC_PAREN_CLOSE PUNC_CURLY_OPEN ID_return
       ID_yield NUMBER_DEC PUNC_SEMI PUNC_CURLY_CLOSE ASI
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
let f = async function* f() {return (yield (100));};
````

Produces same AST
