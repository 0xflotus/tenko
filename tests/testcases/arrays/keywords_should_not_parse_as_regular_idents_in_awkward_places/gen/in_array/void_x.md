# Tenko parser autogenerated test case

- From: tests/testcases/arrays/keywords_should_not_parse_as_regular_idents_in_awkward_places/autogen.md
- Path: tests/testcases/arrays/keywords_should_not_parse_as_regular_idents_in_awkward_places/gen/in_array/void_x.md

> :: arrays : keywords should not parse as regular idents in awkward places : gen : in array
>
> ::> void x

## Input


`````js
[ void x ]
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
  loc:{start:{line:1,column:0},end:{line:1,column:10},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:10},source:''},
      expression: {
        type: 'ArrayExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:10},source:''},
        elements: [
          {
            type: 'UnaryExpression',
            loc:{start:{line:1,column:2},end:{line:1,column:8},source:''},
            operator: 'void',
            prefix: true,
            argument: {
              type: 'Identifier',
              loc:{start:{line:1,column:7},end:{line:1,column:8},source:''},
              name: 'x'
            }
          }
        ]
      }
    }
  ]
}

tokens (6x):
       PUNC_BRACKET_OPEN ID_void IDENT PUNC_BRACKET_CLOSE ASI
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
([void (x),]);
````

Produces same AST
