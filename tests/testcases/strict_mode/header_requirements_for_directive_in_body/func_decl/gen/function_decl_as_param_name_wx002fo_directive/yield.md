# Tenko parser autogenerated test case

- From: tests/testcases/strict_mode/header_requirements_for_directive_in_body/func_decl/autogen.md
- Path: tests/testcases/strict_mode/header_requirements_for_directive_in_body/func_decl/gen/function_decl_as_param_name_wx002fo_directive/yield.md

> :: strict mode : header requirements for directive in body : func decl : gen : function decl as param name wx002fo directive
>
> ::> yield

## Input


`````js
function c(yield){ }
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
        name: 'c'
      },
      params: [
        {
          type: 'Identifier',
          loc:{start:{line:1,column:11},end:{line:1,column:16},source:''},
          name: 'yield'
        }
      ],
      body: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:17},end:{line:1,column:20},source:''},
        body: []
      }
    }
  ]
}

tokens (8x):
       ID_function IDENT PUNC_PAREN_OPEN ID_yield PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN PUNC_CURLY_CLOSE
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use this name (yield) as a variable name because: Cannot use this reserved word as a variable name in strict mode

function c(yield){ }
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
function c(yield) {}
````

Produces same AST
