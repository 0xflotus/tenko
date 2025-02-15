# Tenko parser test case

- Path: tests/testcases/classes/lexerflag_and_extendsx002fcomputed_key/yield_in_class_computed_key/gen_nested_yield_expr_in_computed_expression_of_key.md

> :: classes : lexerflag and extendsx002fcomputed key : yield in class computed key
>
> ::> gen nested yield expr in computed expression of key

## Input

`````js
function *f(){  class x{[yield](a){}}  }
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
  loc:{start:{line:1,column:0},end:{line:1,column:40},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:40},source:''},
      generator: true,
      async: false,
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:10},end:{line:1,column:11},source:''},
        name: 'f'
      },
      params: [],
      body: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:13},end:{line:1,column:40},source:''},
        body: [
          {
            type: 'ClassDeclaration',
            loc:{start:{line:1,column:16},end:{line:1,column:37},source:''},
            id: {
              type: 'Identifier',
              loc:{start:{line:1,column:22},end:{line:1,column:23},source:''},
              name: 'x'
            },
            superClass: null,
            body: {
              type: 'ClassBody',
              loc:{start:{line:1,column:23},end:{line:1,column:37},source:''},
              body: [
                {
                  type: 'MethodDefinition',
                  loc:{start:{line:1,column:24},end:{line:1,column:36},source:''},
                  key: {
                    type: 'YieldExpression',
                    loc:{start:{line:1,column:25},end:{line:1,column:30},source:''},
                    delegate: false,
                    argument: null
                  },
                  static: false,
                  computed: true,
                  kind: 'method',
                  value: {
                    type: 'FunctionExpression',
                    loc:{start:{line:1,column:24},end:{line:1,column:36},source:''},
                    generator: false,
                    async: false,
                    id: null,
                    params: [
                      {
                        type: 'Identifier',
                        loc:{start:{line:1,column:32},end:{line:1,column:33},source:''},
                        name: 'a'
                      }
                    ],
                    body: {
                      type: 'BlockStatement',
                      loc:{start:{line:1,column:34},end:{line:1,column:36},source:''},
                      body: []
                    }
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
}

tokens (20x):
       ID_function PUNC_STAR IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN ID_class IDENT PUNC_CURLY_OPEN
       PUNC_BRACKET_OPEN ID_yield PUNC_BRACKET_CLOSE PUNC_PAREN_OPEN
       IDENT PUNC_PAREN_CLOSE PUNC_CURLY_OPEN PUNC_CURLY_CLOSE
       PUNC_CURLY_CLOSE PUNC_CURLY_CLOSE
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
function* f() {class x{[(yield)](a){};}}
````

Produces same AST
