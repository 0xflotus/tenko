# Tenko parser test case

- Path: tests/testcases/objects/literals/async_method/object_with_an_async_method_and_an_ident_method_1.md

> :: objects : literals : async method
>
> ::> object with an async method and an ident method 1

## Input

`````js
wrap({async foo(){}, bar(){}});
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
  loc:{start:{line:1,column:0},end:{line:1,column:31},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:31},source:''},
      expression: {
        type: 'CallExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:30},source:''},
        callee: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:4},source:''},
          name: 'wrap'
        },
        arguments: [
          {
            type: 'ObjectExpression',
            loc:{start:{line:1,column:5},end:{line:1,column:29},source:''},
            properties: [
              {
                type: 'Property',
                loc:{start:{line:1,column:6},end:{line:1,column:19},source:''},
                key: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:12},end:{line:1,column:15},source:''},
                  name: 'foo'
                },
                kind: 'init',
                method: true,
                computed: false,
                value: {
                  type: 'FunctionExpression',
                  loc:{start:{line:1,column:6},end:{line:1,column:19},source:''},
                  generator: false,
                  async: true,
                  id: null,
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    loc:{start:{line:1,column:17},end:{line:1,column:19},source:''},
                    body: []
                  }
                },
                shorthand: false
              },
              {
                type: 'Property',
                loc:{start:{line:1,column:21},end:{line:1,column:28},source:''},
                key: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:21},end:{line:1,column:24},source:''},
                  name: 'bar'
                },
                kind: 'init',
                method: true,
                computed: false,
                value: {
                  type: 'FunctionExpression',
                  loc:{start:{line:1,column:21},end:{line:1,column:28},source:''},
                  generator: false,
                  async: false,
                  id: null,
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    loc:{start:{line:1,column:26},end:{line:1,column:28},source:''},
                    body: []
                  }
                },
                shorthand: false
              }
            ]
          }
        ]
      }
    }
  ]
}

tokens (19x):
       IDENT PUNC_PAREN_OPEN PUNC_CURLY_OPEN ID_async IDENT
       PUNC_PAREN_OPEN PUNC_PAREN_CLOSE PUNC_CURLY_OPEN
       PUNC_CURLY_CLOSE PUNC_COMMA IDENT PUNC_PAREN_OPEN
       PUNC_PAREN_CLOSE PUNC_CURLY_OPEN PUNC_CURLY_CLOSE
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
((wrap)({async foo(){}, bar(){}}));
````

Produces same AST
