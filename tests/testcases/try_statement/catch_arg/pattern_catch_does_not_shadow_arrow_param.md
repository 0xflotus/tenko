# Tenko parser test case

- Path: tests/testcases/try_statement/catch_arg/pattern_catch_does_not_shadow_arrow_param.md

> :: try statement : catch arg
>
> ::> pattern catch does not shadow arrow param
>
> By fuzzer, zeparser only
>
> The catch var should not be considered to shadow the arrow param

## Input

`````js
g => {
  try {} 
  catch ([g]) {} 
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
  loc:{start:{line:1,column:0},end:{line:4,column:1},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:4,column:1},source:''},
      expression: {
        type: 'ArrowFunctionExpression',
        loc:{start:{line:1,column:0},end:{line:4,column:1},source:''},
        params: [
          {
            type: 'Identifier',
            loc:{start:{line:1,column:0},end:{line:1,column:1},source:''},
            name: 'g'
          }
        ],
        id: null,
        generator: false,
        async: false,
        expression: false,
        body: {
          type: 'BlockStatement',
          loc:{start:{line:1,column:5},end:{line:4,column:1},source:''},
          body: [
            {
              type: 'TryStatement',
              loc:{start:{line:2,column:2},end:{line:3,column:16},source:''},
              block: {
                type: 'BlockStatement',
                loc:{start:{line:2,column:6},end:{line:2,column:8},source:''},
                body: []
              },
              handler: {
                type: 'CatchClause',
                loc:{start:{line:3,column:2},end:{line:3,column:16},source:''},
                param: {
                  type: 'ArrayPattern',
                  loc:{start:{line:3,column:9},end:{line:3,column:12},source:''},
                  elements: [
                    {
                      type: 'Identifier',
                      loc:{start:{line:3,column:10},end:{line:3,column:11},source:''},
                      name: 'g'
                    }
                  ]
                },
                body: {
                  type: 'BlockStatement',
                  loc:{start:{line:3,column:14},end:{line:3,column:16},source:''},
                  body: []
                }
              },
              finalizer: null
            }
          ]
        }
      }
    }
  ]
}

tokens (17x):
       IDENT PUNC_EQ_GT PUNC_CURLY_OPEN ID_try PUNC_CURLY_OPEN
       PUNC_CURLY_CLOSE ID_catch PUNC_PAREN_OPEN PUNC_BRACKET_OPEN
       IDENT PUNC_BRACKET_CLOSE PUNC_PAREN_CLOSE PUNC_CURLY_OPEN
       PUNC_CURLY_CLOSE PUNC_CURLY_CLOSE ASI
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
g => {try {} catch ([g,]) {}};
````

Produces same AST