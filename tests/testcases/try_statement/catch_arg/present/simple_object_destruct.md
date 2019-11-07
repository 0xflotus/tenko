# Tenko parser test case

- Path: tests/testcases/try_statement/catch_arg/present/simple_object_destruct.md

> :: try statement : catch arg : present
>
> ::> simple object destruct

## Input

`````js
try {} catch({e}){}
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
  loc:{start:{line:1,column:0},end:{line:1,column:19},source:''},
  body: [
    {
      type: 'TryStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:19},source:''},
      block: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:4},end:{line:1,column:6},source:''},
        body: []
      },
      handler: {
        type: 'CatchClause',
        loc:{start:{line:1,column:7},end:{line:1,column:19},source:''},
        param: {
          type: 'ObjectPattern',
          loc:{start:{line:1,column:13},end:{line:1,column:16},source:''},
          properties: [
            {
              type: 'Property',
              loc:{start:{line:1,column:14},end:{line:1,column:15},source:''},
              key: {
                type: 'Identifier',
                loc:{start:{line:1,column:14},end:{line:1,column:15},source:''},
                name: 'e'
              },
              kind: 'init',
              method: false,
              computed: false,
              value: {
                type: 'Identifier',
                loc:{start:{line:1,column:14},end:{line:1,column:15},source:''},
                name: 'e'
              },
              shorthand: true
            }
          ]
        },
        body: {
          type: 'BlockStatement',
          loc:{start:{line:1,column:17},end:{line:1,column:19},source:''},
          body: []
        }
      },
      finalizer: null
    }
  ]
}

tokens (12x):
       ID_try PUNC_CURLY_OPEN PUNC_CURLY_CLOSE ID_catch
       PUNC_PAREN_OPEN PUNC_CURLY_OPEN IDENT PUNC_CURLY_CLOSE
       PUNC_PAREN_CLOSE PUNC_CURLY_OPEN PUNC_CURLY_CLOSE
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
try {} catch ({e}) {}
````

Produces same AST