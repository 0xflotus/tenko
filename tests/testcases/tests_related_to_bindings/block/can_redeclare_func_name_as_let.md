# Tenko parser test case

- Path: tests/testcases/tests_related_to_bindings/block/can_redeclare_func_name_as_let.md

> :: tests related to bindings : block
>
> ::> can redeclare func name as let
> 
> https://tc39.github.io/ecma262/#sec-block-duplicates-allowed-static-semantics
> 
> duplicate function decl names do not cause an error in BlockStatement and SwitchStatement

## Input

`````js
function f() {let f}
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
  loc:{start:{line:1,column:0},end:{line:1,column:20},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:20},source:''},
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
        loc:{start:{line:1,column:13},end:{line:1,column:20},source:''},
        body: [
          {
            type: 'VariableDeclaration',
            loc:{start:{line:1,column:14},end:{line:1,column:19},source:''},
            kind: 'let',
            declarations: [
              {
                type: 'VariableDeclarator',
                loc:{start:{line:1,column:18},end:{line:1,column:19},source:''},
                id: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:18},end:{line:1,column:19},source:''},
                  name: 'f'
                },
                init: null
              }
            ]
          }
        ]
      }
    }
  ]
}

tokens (10x):
       ID_function IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN ID_let IDENT ASI PUNC_CURLY_CLOSE
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
function f() {let f;}
````

Produces same AST