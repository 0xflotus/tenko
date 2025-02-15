# Tenko parser test case

- Path: tests/testcases/var_statement/binding_generic/reserved_words/strict_mode_keyword3x003dstatic/function_arg.md

> :: var statement : binding generic : reserved words : strict mode keyword3x003dstatic
>
> ::> function arg

## Input

`````js
function f(static) {}
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
  loc:{start:{line:1,column:0},end:{line:1,column:21},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:21},source:''},
      generator: false,
      async: false,
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:9},end:{line:1,column:10},source:''},
        name: 'f'
      },
      params: [
        {
          type: 'Identifier',
          loc:{start:{line:1,column:11},end:{line:1,column:17},source:''},
          name: 'static'
        }
      ],
      body: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:19},end:{line:1,column:21},source:''},
        body: []
      }
    }
  ]
}

tokens (8x):
       ID_function IDENT PUNC_PAREN_OPEN ID_static PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN PUNC_CURLY_CLOSE
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use this name (static) as a variable name because: `static` is a reserved word in strict mode

function f(static) {}
           ^------- error
`````


### Module goal

Parsed with the module goal.

_Output same as strict mode._

### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output was same as input [sloppy]
