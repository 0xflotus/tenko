# Tenko parser test case

- Path: tests/testcases/super_keyword/property/dynamic/in_arrows/allowed_in_arg_of_method_of_objlit.md

> :: super keyword : property : dynamic : in arrows
>
> ::> allowed in arg of method of objlit

## Input

`````js
x={ dsda(){ return (a=super[bar]) => a; }}
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
  loc:{start:{line:1,column:0},end:{line:1,column:42},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:42},source:''},
      expression: {
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:42},source:''},
        left: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:1},source:''},
          name: 'x'
        },
        operator: '=',
        right: {
          type: 'ObjectExpression',
          loc:{start:{line:1,column:2},end:{line:1,column:42},source:''},
          properties: [
            {
              type: 'Property',
              loc:{start:{line:1,column:4},end:{line:1,column:41},source:''},
              key: {
                type: 'Identifier',
                loc:{start:{line:1,column:4},end:{line:1,column:8},source:''},
                name: 'dsda'
              },
              kind: 'init',
              method: true,
              computed: false,
              value: {
                type: 'FunctionExpression',
                loc:{start:{line:1,column:4},end:{line:1,column:41},source:''},
                generator: false,
                async: false,
                id: null,
                params: [],
                body: {
                  type: 'BlockStatement',
                  loc:{start:{line:1,column:10},end:{line:1,column:41},source:''},
                  body: [
                    {
                      type: 'ReturnStatement',
                      loc:{start:{line:1,column:12},end:{line:1,column:39},source:''},
                      argument: {
                        type: 'ArrowFunctionExpression',
                        loc:{start:{line:1,column:19},end:{line:1,column:38},source:''},
                        params: [
                          {
                            type: 'AssignmentPattern',
                            loc:{start:{line:1,column:20},end:{line:1,column:32},source:''},
                            left: {
                              type: 'Identifier',
                              loc:{start:{line:1,column:20},end:{line:1,column:21},source:''},
                              name: 'a'
                            },
                            right: {
                              type: 'MemberExpression',
                              loc:{start:{line:1,column:22},end:{line:1,column:32},source:''},
                              object: {
                                type: 'Super',
                                loc:{start:{line:1,column:22},end:{line:1,column:27},source:''}
                              },
                              property: {
                                type: 'Identifier',
                                loc:{start:{line:1,column:28},end:{line:1,column:31},source:''},
                                name: 'bar'
                              },
                              computed: true
                            }
                          }
                        ],
                        id: null,
                        generator: false,
                        async: false,
                        expression: true,
                        body: {
                          type: 'Identifier',
                          loc:{start:{line:1,column:37},end:{line:1,column:38},source:''},
                          name: 'a'
                        }
                      }
                    }
                  ]
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

tokens (23x):
       IDENT PUNC_EQ PUNC_CURLY_OPEN IDENT PUNC_PAREN_OPEN
       PUNC_PAREN_CLOSE PUNC_CURLY_OPEN ID_return PUNC_PAREN_OPEN
       IDENT PUNC_EQ ID_super PUNC_BRACKET_OPEN IDENT
       PUNC_BRACKET_CLOSE PUNC_PAREN_CLOSE PUNC_EQ_GT IDENT PUNC_SEMI
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
((x = {dsda(){return (a = super[bar]) => (a);}}));
````

Produces same AST