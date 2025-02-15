# Tenko parser autogenerated test case

- From: tests/testcases/var_statement/binding_generic/reserved_words/autogen.md
- Path: tests/testcases/var_statement/binding_generic/reserved_words/gen/var_statement/public.md

> :: var statement : binding generic : reserved words : gen : var statement
>
> ::> public

## Input


`````js
var public = x;
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
  loc:{start:{line:1,column:0},end:{line:1,column:15},source:''},
  body: [
    {
      type: 'VariableDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:15},source:''},
      kind: 'var',
      declarations: [
        {
          type: 'VariableDeclarator',
          loc:{start:{line:1,column:4},end:{line:1,column:14},source:''},
          id: {
            type: 'Identifier',
            loc:{start:{line:1,column:4},end:{line:1,column:10},source:''},
            name: 'public'
          },
          init: {
            type: 'Identifier',
            loc:{start:{line:1,column:13},end:{line:1,column:14},source:''},
            name: 'x'
          }
        }
      ]
    }
  ]
}

tokens (6x):
       ID_var ID_public PUNC_EQ IDENT PUNC_SEMI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use this name (public) as a variable name because: Cannot use this reserved word as a variable name in strict mode

var public = x;
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
