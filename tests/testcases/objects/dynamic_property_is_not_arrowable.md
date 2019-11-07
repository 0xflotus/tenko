# Tenko parser test case

- Path: tests/testcases/objects/dynamic_property_is_not_arrowable.md

> :: objects
>
> ::> dynamic property is not arrowable

## Input

`````js
({[foo]: x} = x) => y
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
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:21},source:''},
      expression: {
        type: 'ArrowFunctionExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:21},source:''},
        params: [
          {
            type: 'AssignmentPattern',
            loc:{start:{line:1,column:1},end:{line:1,column:15},source:''},
            left: {
              type: 'ObjectPattern',
              loc:{start:{line:1,column:1},end:{line:1,column:11},source:''},
              properties: [
                {
                  type: 'Property',
                  loc:{start:{line:1,column:2},end:{line:1,column:10},source:''},
                  key: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:3},end:{line:1,column:6},source:''},
                    name: 'foo'
                  },
                  kind: 'init',
                  method: false,
                  computed: true,
                  value: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:9},end:{line:1,column:10},source:''},
                    name: 'x'
                  },
                  shorthand: false
                }
              ]
            },
            right: {
              type: 'Identifier',
              loc:{start:{line:1,column:14},end:{line:1,column:15},source:''},
              name: 'x'
            }
          }
        ],
        id: null,
        generator: false,
        async: false,
        expression: true,
        body: {
          type: 'Identifier',
          loc:{start:{line:1,column:20},end:{line:1,column:21},source:''},
          name: 'y'
        }
      }
    }
  ]
}

tokens (15x):
       PUNC_PAREN_OPEN PUNC_CURLY_OPEN PUNC_BRACKET_OPEN IDENT
       PUNC_BRACKET_CLOSE PUNC_COLON IDENT PUNC_CURLY_CLOSE PUNC_EQ
       IDENT PUNC_PAREN_CLOSE PUNC_EQ_GT IDENT ASI
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
({[foo]:x} = x) => (y);
````

Produces same AST