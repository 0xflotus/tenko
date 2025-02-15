# Tenko parser test case

- Path: tests/testcases/objects/string_key/empty_string.md

> :: objects : string key
>
> ::> empty string
>
> This triggers an assert that wasn't triggered before

## Input

`````js
x = {
  *""() {},
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
  loc:{start:{line:1,column:0},end:{line:3,column:1},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:3,column:1},source:''},
      expression: {
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:0},end:{line:3,column:1},source:''},
        left: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:1},source:''},
          name: 'x'
        },
        operator: '=',
        right: {
          type: 'ObjectExpression',
          loc:{start:{line:1,column:4},end:{line:3,column:1},source:''},
          properties: [
            {
              type: 'Property',
              loc:{start:{line:2,column:2},end:{line:2,column:10},source:''},
              key: {
                type: 'Literal',
                loc:{start:{line:2,column:3},end:{line:2,column:5},source:''},
                value: '',
                raw: '""'
              },
              kind: 'init',
              method: true,
              computed: false,
              value: {
                type: 'FunctionExpression',
                loc:{start:{line:2,column:2},end:{line:2,column:10},source:''},
                generator: true,
                async: false,
                id: null,
                params: [],
                body: {
                  type: 'BlockStatement',
                  loc:{start:{line:2,column:8},end:{line:2,column:10},source:''},
                  body: []
                }
              },
              shorthand: false
            }
          ]
        }
      }
    }
  ]
}

tokens (13x):
       IDENT PUNC_EQ PUNC_CURLY_OPEN PUNC_STAR STRING_DOUBLE
       PUNC_PAREN_OPEN PUNC_PAREN_CLOSE PUNC_CURLY_OPEN
       PUNC_CURLY_CLOSE PUNC_COMMA PUNC_CURLY_CLOSE ASI
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
((x = {* ""(){}}));
````

Produces same AST
