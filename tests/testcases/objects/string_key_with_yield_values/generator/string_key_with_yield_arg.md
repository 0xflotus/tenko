# Tenko parser test case

- Path: tests/testcases/objects/string_key_with_yield_values/generator/string_key_with_yield_arg.md

> :: objects : string key with yield values : generator
>
> ::> string key with yield arg

## Input

`````js
function *f(){   s = {"foo": yield /x/}   }
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
  loc:{start:{line:1,column:0},end:{line:1,column:43},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:43},source:''},
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
        loc:{start:{line:1,column:13},end:{line:1,column:43},source:''},
        body: [
          {
            type: 'ExpressionStatement',
            loc:{start:{line:1,column:17},end:{line:1,column:39},source:''},
            expression: {
              type: 'AssignmentExpression',
              loc:{start:{line:1,column:17},end:{line:1,column:39},source:''},
              left: {
                type: 'Identifier',
                loc:{start:{line:1,column:17},end:{line:1,column:18},source:''},
                name: 's'
              },
              operator: '=',
              right: {
                type: 'ObjectExpression',
                loc:{start:{line:1,column:21},end:{line:1,column:39},source:''},
                properties: [
                  {
                    type: 'Property',
                    loc:{start:{line:1,column:22},end:{line:1,column:38},source:''},
                    key: {
                      type: 'Literal',
                      loc:{start:{line:1,column:22},end:{line:1,column:27},source:''},
                      value: 'foo',
                      raw: '"foo"'
                    },
                    kind: 'init',
                    method: false,
                    computed: false,
                    value: {
                      type: 'YieldExpression',
                      loc:{start:{line:1,column:29},end:{line:1,column:38},source:''},
                      delegate: false,
                      argument: {
                        type: 'Literal',
                        loc:{start:{line:1,column:35},end:{line:1,column:38},source:''},
                        value: null,
                        regex: { pattern: 'x', flags: '' },
                        raw: '/x/'
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
    }
  ]
}

tokens (17x):
       ID_function PUNC_STAR IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN IDENT PUNC_EQ PUNC_CURLY_OPEN STRING_DOUBLE
       PUNC_COLON ID_yield REGEXN PUNC_CURLY_CLOSE ASI
       PUNC_CURLY_CLOSE
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
function* f() {((s = {"foo":(yield (/x/))}));}
````

Produces same AST