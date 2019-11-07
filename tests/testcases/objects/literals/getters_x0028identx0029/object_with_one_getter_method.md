# Tenko parser test case

- Path: tests/testcases/objects/literals/getters_x0028identx0029/object_with_one_getter_method.md

> :: objects : literals : getters x0028identx0029
>
> ::> object with one getter method

## Input

`````js
wrap({get foo(){}});
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
  loc:{start:{line:1,column:0},end:{line:1,column:20},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:20},source:''},
      expression: {
        type: 'CallExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:19},source:''},
        callee: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:4},source:''},
          name: 'wrap'
        },
        arguments: [
          {
            type: 'ObjectExpression',
            loc:{start:{line:1,column:5},end:{line:1,column:18},source:''},
            properties: [
              {
                type: 'Property',
                loc:{start:{line:1,column:6},end:{line:1,column:17},source:''},
                key: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:10},end:{line:1,column:13},source:''},
                  name: 'foo'
                },
                kind: 'get',
                method: false,
                computed: false,
                value: {
                  type: 'FunctionExpression',
                  loc:{start:{line:1,column:6},end:{line:1,column:17},source:''},
                  generator: false,
                  async: false,
                  id: null,
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    loc:{start:{line:1,column:15},end:{line:1,column:17},source:''},
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

tokens (13x):
       IDENT PUNC_PAREN_OPEN PUNC_CURLY_OPEN ID_get IDENT
       PUNC_PAREN_OPEN PUNC_PAREN_CLOSE PUNC_CURLY_OPEN
       PUNC_CURLY_CLOSE PUNC_CURLY_CLOSE PUNC_PAREN_CLOSE PUNC_SEMI
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
((wrap)({get foo(){}}));
````

Produces same AST