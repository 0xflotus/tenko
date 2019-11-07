# Tenko parser test case

- Path: tests/testcases/strict_mode/with_directive/mixed_cases/sibling_does_not_taint_global_scope.md

> :: strict mode : with directive : mixed cases
>
> ::> sibling does not taint global scope

## Input

`````js
function f(){ "use strict"; foo; } function g() { with (x) y; }
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
  loc:{start:{line:1,column:0},end:{line:1,column:63},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:34},source:''},
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
        loc:{start:{line:1,column:12},end:{line:1,column:34},source:''},
        body: [
          {
            type: 'ExpressionStatement',
            loc:{start:{line:1,column:14},end:{line:1,column:27},source:''},
            expression: {
              type: 'Literal',
              loc:{start:{line:1,column:14},end:{line:1,column:26},source:''},
              value: 'use strict',
              raw: '"use strict"'
            },
            directive: 'use strict'
          },
          {
            type: 'ExpressionStatement',
            loc:{start:{line:1,column:28},end:{line:1,column:32},source:''},
            expression: {
              type: 'Identifier',
              loc:{start:{line:1,column:28},end:{line:1,column:31},source:''},
              name: 'foo'
            }
          }
        ]
      }
    },
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:35},end:{line:1,column:63},source:''},
      generator: false,
      async: false,
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:44},end:{line:1,column:45},source:''},
        name: 'g'
      },
      params: [],
      body: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:48},end:{line:1,column:63},source:''},
        body: [
          {
            type: 'WithStatement',
            loc:{start:{line:1,column:50},end:{line:1,column:61},source:''},
            object: {
              type: 'Identifier',
              loc:{start:{line:1,column:56},end:{line:1,column:57},source:''},
              name: 'x'
            },
            body: {
              type: 'ExpressionStatement',
              loc:{start:{line:1,column:59},end:{line:1,column:61},source:''},
              expression: {
                type: 'Identifier',
                loc:{start:{line:1,column:59},end:{line:1,column:60},source:''},
                name: 'y'
              }
            }
          }
        ]
      }
    }
  ]
}

tokens (23x):
       ID_function IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN STRING_DOUBLE PUNC_SEMI IDENT PUNC_SEMI
       PUNC_CURLY_CLOSE ID_function IDENT PUNC_PAREN_OPEN
       PUNC_PAREN_CLOSE PUNC_CURLY_OPEN ID_with PUNC_PAREN_OPEN IDENT
       PUNC_PAREN_CLOSE IDENT PUNC_SEMI PUNC_CURLY_CLOSE
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  The `with` statement is not allowed in strict mode

function f(){ "use strict"; foo; } function g() { with (x) y; }
                                                  ^------- error
`````


### Module goal

Parsed with the module goal.

_Output same as strict mode._

### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [sloppy]:

````js
function f() {"use strict";
(foo);}
function g() {with (x) (y);}
````

Produces same AST