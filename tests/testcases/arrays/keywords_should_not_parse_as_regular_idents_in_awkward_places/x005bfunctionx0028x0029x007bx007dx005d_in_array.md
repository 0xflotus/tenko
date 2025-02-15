# Tenko parser test case

- Path: tests/testcases/arrays/keywords_should_not_parse_as_regular_idents_in_awkward_places/x005bfunctionx0028x0029x007bx007dx005d_in_array.md

> :: arrays : keywords should not parse as regular idents in awkward places
>
> ::> x005bfunctionx0028x0029x007bx007dx005d in array

## Input

`````js
[function(){}]
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
  loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
      expression: {
        type: 'ArrayExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
        elements: [
          {
            type: 'FunctionExpression',
            loc:{start:{line:1,column:1},end:{line:1,column:13},source:''},
            generator: false,
            async: false,
            id: null,
            params: [],
            body: {
              type: 'BlockStatement',
              loc:{start:{line:1,column:11},end:{line:1,column:13},source:''},
              body: []
            }
          }
        ]
      }
    }
  ]
}

tokens (9x):
       PUNC_BRACKET_OPEN ID_function PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN PUNC_CURLY_CLOSE PUNC_BRACKET_CLOSE ASI
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
([function() {},]);
````

Produces same AST
