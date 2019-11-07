# Tenko parser test case

- Path: tests/testcases/objects/spread/spread_after_shorthand.md

> :: objects : spread
>
> ::> spread after shorthand
>
> spread after shorthand


## Input

`````js
({obj, ...a})
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
  loc:{start:{line:1,column:0},end:{line:1,column:13},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:13},source:''},
      expression: {
        type: 'ObjectExpression',
        loc:{start:{line:1,column:1},end:{line:1,column:12},source:''},
        properties: [
          {
            type: 'Property',
            loc:{start:{line:1,column:2},end:{line:1,column:5},source:''},
            key: {
              type: 'Identifier',
              loc:{start:{line:1,column:2},end:{line:1,column:5},source:''},
              name: 'obj'
            },
            kind: 'init',
            method: false,
            computed: false,
            value: {
              type: 'Identifier',
              loc:{start:{line:1,column:2},end:{line:1,column:5},source:''},
              name: 'obj'
            },
            shorthand: true
          },
          {
            type: 'SpreadElement',
            loc:{start:{line:1,column:7},end:{line:1,column:11},source:''},
            argument: {
              type: 'Identifier',
              loc:{start:{line:1,column:10},end:{line:1,column:11},source:''},
              name: 'a'
            }
          }
        ]
      }
    }
  ]
}

tokens (10x):
       PUNC_PAREN_OPEN PUNC_CURLY_OPEN IDENT PUNC_COMMA
       PUNC_DOT_DOT_DOT IDENT PUNC_CURLY_CLOSE PUNC_PAREN_CLOSE ASI
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
({obj, ...a});
````

Produces same AST