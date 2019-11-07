# Tenko parser test case

- Path: tests/testcases/for_statement/for-await/lhs_edge_cases/func_dynprop_in.md

> :: for statement : for-await : lhs edge cases
>
> ::> func dynprop in
>
> The for-in flag should be reset inside the dynamic property

## PASS

## Input

`````js
async function f(){
  for await (function(){ }[x in y] of x);
}  
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
  loc:{start:{line:1,column:0},end:{line:3,column:3},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:3,column:1},source:''},
      generator: false,
      async: true,
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:15},end:{line:1,column:16},source:''},
        name: 'f'
      },
      params: [],
      body: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:18},end:{line:3,column:1},source:''},
        body: [
          {
            type: 'ForOfStatement',
            loc:{start:{line:2,column:2},end:{line:2,column:41},source:''},
            left: {
              type: 'MemberExpression',
              loc:{start:{line:2,column:13},end:{line:2,column:34},source:''},
              object: {
                type: 'FunctionExpression',
                loc:{start:{line:2,column:13},end:{line:2,column:26},source:''},
                generator: false,
                async: false,
                id: null,
                params: [],
                body: {
                  type: 'BlockStatement',
                  loc:{start:{line:2,column:23},end:{line:2,column:26},source:''},
                  body: []
                }
              },
              property: {
                type: 'BinaryExpression',
                loc:{start:{line:2,column:27},end:{line:2,column:33},source:''},
                left: {
                  type: 'Identifier',
                  loc:{start:{line:2,column:27},end:{line:2,column:28},source:''},
                  name: 'x'
                },
                operator: 'in',
                right: {
                  type: 'Identifier',
                  loc:{start:{line:2,column:32},end:{line:2,column:33},source:''},
                  name: 'y'
                }
              },
              computed: true
            },
            right: {
              type: 'Identifier',
              loc:{start:{line:2,column:38},end:{line:2,column:39},source:''},
              name: 'x'
            },
            await: true,
            body: {
              type: 'EmptyStatement',
              loc:{start:{line:2,column:40},end:{line:2,column:41},source:''}
            }
          }
        ]
      }
    }
  ]
}

tokens (25x):
       ID_async ID_function IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN ID_for ID_await PUNC_PAREN_OPEN ID_function
       PUNC_PAREN_OPEN PUNC_PAREN_CLOSE PUNC_CURLY_OPEN
       PUNC_CURLY_CLOSE PUNC_BRACKET_OPEN IDENT ID_in IDENT
       PUNC_BRACKET_CLOSE ID_of IDENT PUNC_PAREN_CLOSE PUNC_SEMI
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
async function f() {for await (((function() {})[((x) in (y))]) of x) ;}
````

Produces same AST