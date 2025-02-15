# Tenko parser test case

- Path: tests/testcases/strict_mode/requires_simple_args/sans_args/func_decl.md

> :: strict mode : requires simple args : sans args
>
> ::> func decl

## Input

`````js
function f(){"use strict";}
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
  loc:{start:{line:1,column:0},end:{line:1,column:27},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:27},source:''},
      generator: false,
      async: false,
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:9},end:{line:1,column:10},source:''},
        name: 'f'
      },
      params: [],
      body: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:12},end:{line:1,column:27},source:''},
        body: [
          {
            type: 'ExpressionStatement',
            loc:{start:{line:1,column:13},end:{line:1,column:26},source:''},
            expression: {
              type: 'Literal',
              loc:{start:{line:1,column:13},end:{line:1,column:25},source:''},
              value: 'use strict',
              raw: '"use strict"'
            },
            directive: 'use strict'
          }
        ]
      }
    }
  ]
}

tokens (9x):
       ID_function IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN STRING_DOUBLE PUNC_SEMI PUNC_CURLY_CLOSE
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
function f() {"use strict";}
````

Produces same AST
