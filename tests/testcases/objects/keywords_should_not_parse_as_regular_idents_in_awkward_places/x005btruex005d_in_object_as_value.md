# Tenko parser test case

- Path: tests/testcases/objects/keywords_should_not_parse_as_regular_idents_in_awkward_places/x005btruex005d_in_object_as_value.md

> :: objects : keywords should not parse as regular idents in awkward places
>
> ::> x005btruex005d in object as value

## Input

`````js
({x: true});
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
  loc:{start:{line:1,column:0},end:{line:1,column:12},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:12},source:''},
      expression: {
        type: 'ObjectExpression',
        loc:{start:{line:1,column:1},end:{line:1,column:10},source:''},
        properties: [
          {
            type: 'Property',
            loc:{start:{line:1,column:2},end:{line:1,column:9},source:''},
            key: {
              type: 'Identifier',
              loc:{start:{line:1,column:2},end:{line:1,column:3},source:''},
              name: 'x'
            },
            kind: 'init',
            method: false,
            computed: false,
            value: {
              type: 'Literal',
              loc:{start:{line:1,column:5},end:{line:1,column:9},source:''},
              value: true,
              raw: 'true'
            },
            shorthand: false
          }
        ]
      }
    }
  ]
}

tokens (9x):
       PUNC_PAREN_OPEN PUNC_CURLY_OPEN IDENT PUNC_COLON ID_true
       PUNC_CURLY_CLOSE PUNC_PAREN_CLOSE PUNC_SEMI
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
({x:true});
````

Produces same AST