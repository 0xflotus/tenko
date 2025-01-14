# Tenko parser test case

- Path: tests/testcases/tests_related_to_bindings/block/annex_b_function_statement_exception/func_and_var.md

> :: tests related to bindings : block : annex b function statement exception
>
> ::> func and var
>
> This is a special case only relevant to web compat mode as the function statement is not even allowed as the sole child of an `if` or related..
>
> https://tc39.es/ecma262/#sec-functiondeclarations-in-ifstatement-statement-clauses
>
> > Code matching this production is processed as if each matching occurrence of FunctionDeclaration was the sole StatementListItem of a BlockStatement occupying that position in the source code. 
>
> So `if (x) function f(){}` should be interpreted in web compat mode as `if (x) { function f(){} }`, including all semantics that belong to it.
>
> As a result, the name of the function does not leak to its parent level and is contained. There is no clash with the upper level var, either.

## Input

`````js
function f(){ var f = 123; if (true) function f(){} }
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  A function declaration can only be the child of an `if`/`else` in sloppy web compat mode

function f(){ var f = 123; if (true) function f(){} }
                                              ^------- error
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

_Output same as sloppy mode._

### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

`````
ast: {
  type: 'Program',
  loc:{start:{line:1,column:0},end:{line:1,column:53},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:53},source:''},
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
        loc:{start:{line:1,column:12},end:{line:1,column:53},source:''},
        body: [
          {
            type: 'VariableDeclaration',
            loc:{start:{line:1,column:14},end:{line:1,column:26},source:''},
            kind: 'var',
            declarations: [
              {
                type: 'VariableDeclarator',
                loc:{start:{line:1,column:18},end:{line:1,column:25},source:''},
                id: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:18},end:{line:1,column:19},source:''},
                  name: 'f'
                },
                init: {
                  type: 'Literal',
                  loc:{start:{line:1,column:22},end:{line:1,column:25},source:''},
                  value: 123,
                  raw: '123'
                }
              }
            ]
          },
          {
            type: 'IfStatement',
            loc:{start:{line:1,column:27},end:{line:1,column:51},source:''},
            test: {
              type: 'Literal',
              loc:{start:{line:1,column:31},end:{line:1,column:35},source:''},
              value: true,
              raw: 'true'
            },
            consequent: {
              type: 'FunctionDeclaration',
              loc:{start:{line:1,column:37},end:{line:1,column:51},source:''},
              generator: false,
              async: false,
              id: {
                type: 'Identifier',
                loc:{start:{line:1,column:46},end:{line:1,column:47},source:''},
                name: 'f'
              },
              params: [],
              body: {
                type: 'BlockStatement',
                loc:{start:{line:1,column:49},end:{line:1,column:51},source:''},
                body: []
              }
            },
            alternate: null
          }
        ]
      }
    }
  ]
}

tokens (22x):
       ID_function IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN ID_var IDENT PUNC_EQ NUMBER_DEC PUNC_SEMI ID_if
       PUNC_PAREN_OPEN ID_true PUNC_PAREN_CLOSE ID_function IDENT
       PUNC_PAREN_OPEN PUNC_PAREN_CLOSE PUNC_CURLY_OPEN
       PUNC_CURLY_CLOSE PUNC_CURLY_CLOSE
`````


## AST Printer

Printer output different from input [web]:

````js
function f() {var f = 123;
if (true) function f() {}}
````

Produces same AST
