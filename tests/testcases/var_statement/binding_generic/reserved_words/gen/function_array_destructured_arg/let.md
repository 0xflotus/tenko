# Tenko parser autogenerated test case

- From: tests/testcases/var_statement/binding_generic/reserved_words/autogen.md
- Path: tests/testcases/var_statement/binding_generic/reserved_words/gen/function_array_destructured_arg/let.md

> :: var statement : binding generic : reserved words : gen : function array destructured arg
>
> ::> let

## Input


`````js
function f([let]) {}
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
      params: [
        {
          type: 'ArrayPattern',
          loc:{start:{line:1,column:11},end:{line:1,column:16},source:''},
          elements: [
            {
              type: 'Identifier',
              loc:{start:{line:1,column:12},end:{line:1,column:15},source:''},
              name: 'let'
            }
          ]
        }
      ],
      body: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:18},end:{line:1,column:20},source:''},
        body: []
      }
    }
  ]
}

tokens (10x):
       ID_function IDENT PUNC_PAREN_OPEN PUNC_BRACKET_OPEN ID_let
       PUNC_BRACKET_CLOSE PUNC_PAREN_CLOSE PUNC_CURLY_OPEN
       PUNC_CURLY_CLOSE
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Can not use `let` as variable name in strict mode

function f([let]) {}
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
function f([let,]) {}
````

Produces same AST
