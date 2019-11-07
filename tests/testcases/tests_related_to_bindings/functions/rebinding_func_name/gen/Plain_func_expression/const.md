# Tenko parser autogenerated test case

- From: tests/testcases/tests_related_to_bindings/functions/rebinding_func_name/autogen.md
- Path: tests/testcases/tests_related_to_bindings/functions/rebinding_func_name/gen/Plain_func_expression/const.md

> :: tests related to bindings : functions : rebinding func name : gen : Plain func expression
>
> ::> const

## Input


`````js
x = function f(){ const f = 1 }
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
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:31},source:''},
        left: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:1},source:''},
          name: 'x'
        },
        operator: '=',
        right: {
          type: 'FunctionExpression',
          loc:{start:{line:1,column:4},end:{line:1,column:31},source:''},
          generator: false,
          async: false,
          id: {
            type: 'Identifier',
            loc:{start:{line:1,column:13},end:{line:1,column:14},source:''},
            name: 'f'
          },
          params: [],
          body: {
            type: 'BlockStatement',
            loc:{start:{line:1,column:16},end:{line:1,column:31},source:''},
            body: [
              {
                type: 'VariableDeclaration',
                loc:{start:{line:1,column:18},end:{line:1,column:29},source:''},
                kind: 'const',
                declarations: [
                  {
                    type: 'VariableDeclarator',
                    loc:{start:{line:1,column:24},end:{line:1,column:29},source:''},
                    id: {
                      type: 'Identifier',
                      loc:{start:{line:1,column:24},end:{line:1,column:25},source:''},
                      name: 'f'
                    },
                    init: {
                      type: 'Literal',
                      loc:{start:{line:1,column:28},end:{line:1,column:29},source:''},
                      value: 1,
                      raw: '1'
                    }
                  }
                ]
              }
            ]
          }
        }
      }
    }
  ]
}

tokens (15x):
       IDENT PUNC_EQ ID_function IDENT PUNC_PAREN_OPEN
       PUNC_PAREN_CLOSE PUNC_CURLY_OPEN ID_const IDENT PUNC_EQ
       NUMBER_DEC ASI PUNC_CURLY_CLOSE ASI
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
((x = function f() {const f = 1;}));
````

Produces same AST