# Tenko parser test case

- Path: tests/testcases/strict_mode/with_directive/in_function/templates_dont_count.md

> :: strict mode : with directive : in function
>
> ::> templates dont count

## Input

`````js
function f(){ `use strict`; with (x) y; }
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
  loc:{start:{line:1,column:0},end:{line:1,column:41},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:41},source:''},
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
        loc:{start:{line:1,column:12},end:{line:1,column:41},source:''},
        body: [
          {
            type: 'ExpressionStatement',
            loc:{start:{line:1,column:14},end:{line:1,column:27},source:''},
            expression: {
              type: 'TemplateLiteral',
              loc:{start:{line:1,column:14},end:{line:1,column:26},source:''},
              expressions: [],
              quasis: [
                {
                  type: 'TemplateElement',
                  loc:{start:{line:1,column:15},end:{line:1,column:25},source:''},
                  tail: true,
                  value: { raw: 'use strict', cooked: 'use strict' }
                }
              ]
            }
          },
          {
            type: 'WithStatement',
            loc:{start:{line:1,column:28},end:{line:1,column:39},source:''},
            object: {
              type: 'Identifier',
              loc:{start:{line:1,column:34},end:{line:1,column:35},source:''},
              name: 'x'
            },
            body: {
              type: 'ExpressionStatement',
              loc:{start:{line:1,column:37},end:{line:1,column:39},source:''},
              expression: {
                type: 'Identifier',
                loc:{start:{line:1,column:37},end:{line:1,column:38},source:''},
                name: 'y'
              }
            }
          }
        ]
      }
    }
  ]
}

tokens (15x):
       ID_function IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN TICK_PURE PUNC_SEMI ID_with PUNC_PAREN_OPEN
       IDENT PUNC_PAREN_CLOSE IDENT PUNC_SEMI PUNC_CURLY_CLOSE
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  The `with` statement is not allowed in strict mode

function f(){ `use strict`; with (x) y; }
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
function f() {`use strict`;
with (x) (y);}
````

Produces same AST
