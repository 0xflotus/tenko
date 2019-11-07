# Tenko parser test case

- Path: tests/testcases/objects/destructuring/string_properties/object_value/with_tail/object.md

> :: objects : destructuring : string properties : object value : with tail
>
> ::> object

## Input

`````js
({"x": {a: y + x}.slice(0)})
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
  loc:{start:{line:1,column:0},end:{line:1,column:28},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:28},source:''},
      expression: {
        type: 'ObjectExpression',
        loc:{start:{line:1,column:1},end:{line:1,column:27},source:''},
        properties: [
          {
            type: 'Property',
            loc:{start:{line:1,column:2},end:{line:1,column:26},source:''},
            key: {
              type: 'Literal',
              loc:{start:{line:1,column:2},end:{line:1,column:5},source:''},
              value: 'x',
              raw: '"x"'
            },
            kind: 'init',
            method: false,
            computed: false,
            value: {
              type: 'CallExpression',
              loc:{start:{line:1,column:7},end:{line:1,column:26},source:''},
              callee: {
                type: 'MemberExpression',
                loc:{start:{line:1,column:7},end:{line:1,column:23},source:''},
                object: {
                  type: 'ObjectExpression',
                  loc:{start:{line:1,column:7},end:{line:1,column:17},source:''},
                  properties: [
                    {
                      type: 'Property',
                      loc:{start:{line:1,column:8},end:{line:1,column:16},source:''},
                      key: {
                        type: 'Identifier',
                        loc:{start:{line:1,column:8},end:{line:1,column:9},source:''},
                        name: 'a'
                      },
                      kind: 'init',
                      method: false,
                      computed: false,
                      value: {
                        type: 'BinaryExpression',
                        loc:{start:{line:1,column:11},end:{line:1,column:16},source:''},
                        left: {
                          type: 'Identifier',
                          loc:{start:{line:1,column:11},end:{line:1,column:12},source:''},
                          name: 'y'
                        },
                        operator: '+',
                        right: {
                          type: 'Identifier',
                          loc:{start:{line:1,column:15},end:{line:1,column:16},source:''},
                          name: 'x'
                        }
                      },
                      shorthand: false
                    }
                  ]
                },
                property: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:18},end:{line:1,column:23},source:''},
                  name: 'slice'
                },
                computed: false
              },
              arguments: [
                {
                  type: 'Literal',
                  loc:{start:{line:1,column:24},end:{line:1,column:25},source:''},
                  value: 0,
                  raw: '0'
                }
              ]
            },
            shorthand: false
          }
        ]
      }
    }
  ]
}

tokens (20x):
       PUNC_PAREN_OPEN PUNC_CURLY_OPEN STRING_DOUBLE PUNC_COLON
       PUNC_CURLY_OPEN IDENT PUNC_COLON IDENT PUNC_PLUS IDENT
       PUNC_CURLY_CLOSE PUNC_DOT IDENT PUNC_PAREN_OPEN NUMBER_DEC
       PUNC_PAREN_CLOSE PUNC_CURLY_CLOSE PUNC_PAREN_CLOSE ASI
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
({"x":(({a:((y) + (x))}).slice)(0)});
````

Produces same AST