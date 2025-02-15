# Tenko parser test case

- Path: tests/testcases/super_keyword/property/dot/in_arrows/in_method_of_objlit.md

> :: super keyword : property : dot : in arrows
>
> ::> in method of objlit

## Input

`````js
x={ fo(){ return () => super.foo; }}
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
  loc:{start:{line:1,column:0},end:{line:1,column:36},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:36},source:''},
      expression: {
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:36},source:''},
        left: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:1},source:''},
          name: 'x'
        },
        operator: '=',
        right: {
          type: 'ObjectExpression',
          loc:{start:{line:1,column:2},end:{line:1,column:36},source:''},
          properties: [
            {
              type: 'Property',
              loc:{start:{line:1,column:4},end:{line:1,column:35},source:''},
              key: {
                type: 'Identifier',
                loc:{start:{line:1,column:4},end:{line:1,column:6},source:''},
                name: 'fo'
              },
              kind: 'init',
              method: true,
              computed: false,
              value: {
                type: 'FunctionExpression',
                loc:{start:{line:1,column:4},end:{line:1,column:35},source:''},
                generator: false,
                async: false,
                id: null,
                params: [],
                body: {
                  type: 'BlockStatement',
                  loc:{start:{line:1,column:8},end:{line:1,column:35},source:''},
                  body: [
                    {
                      type: 'ReturnStatement',
                      loc:{start:{line:1,column:10},end:{line:1,column:33},source:''},
                      argument: {
                        type: 'ArrowFunctionExpression',
                        loc:{start:{line:1,column:17},end:{line:1,column:32},source:''},
                        params: [],
                        id: null,
                        generator: false,
                        async: false,
                        expression: true,
                        body: {
                          type: 'MemberExpression',
                          loc:{start:{line:1,column:23},end:{line:1,column:32},source:''},
                          object: {
                            type: 'Super',
                            loc:{start:{line:1,column:23},end:{line:1,column:28},source:''}
                          },
                          property: {
                            type: 'Identifier',
                            loc:{start:{line:1,column:29},end:{line:1,column:32},source:''},
                            name: 'foo'
                          },
                          computed: false
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

tokens (19x):
       IDENT PUNC_EQ PUNC_CURLY_OPEN IDENT PUNC_PAREN_OPEN
       PUNC_PAREN_CLOSE PUNC_CURLY_OPEN ID_return PUNC_PAREN_OPEN
       PUNC_PAREN_CLOSE PUNC_EQ_GT ID_super PUNC_DOT IDENT PUNC_SEMI
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
((x = {fo(){return () => (super.foo);}}));
````

Produces same AST
