# Tenko parser autogenerated test case

- From: tests/testcases/random_stuff/x002318/autogen.md
- Path: tests/testcases/random_stuff/x002318/gen/ax002f_case/async_function_foox0028a_x003d_x0028x0029_x003dx003e_x007b_x0022use_strictx0022_return_evalx0028x0022xx0022x0029_x007dx0029_x007b_var_x_return_ax0028x0029_x007d.md

> :: random stuff : x002318 : gen : ax002f case
>
> ::> async function foox0028a x003d x0028x0029 x003dx003e x007b x0022use strictx0022 return evalx0028x0022xx0022x0029 x007dx0029 x007b var x return ax0028x0029 x007d

## Input


`````js
async function foo(a = () => { "use strict"; return eval("x") }) { var x; return a(); }
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
  loc:{start:{line:1,column:0},end:{line:1,column:87},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:87},source:''},
      generator: false,
      async: true,
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:15},end:{line:1,column:18},source:''},
        name: 'foo'
      },
      params: [
        {
          type: 'AssignmentPattern',
          loc:{start:{line:1,column:19},end:{line:1,column:63},source:''},
          left: {
            type: 'Identifier',
            loc:{start:{line:1,column:19},end:{line:1,column:20},source:''},
            name: 'a'
          },
          right: {
            type: 'ArrowFunctionExpression',
            loc:{start:{line:1,column:23},end:{line:1,column:63},source:''},
            params: [],
            id: null,
            generator: false,
            async: false,
            expression: false,
            body: {
              type: 'BlockStatement',
              loc:{start:{line:1,column:29},end:{line:1,column:63},source:''},
              body: [
                {
                  type: 'ExpressionStatement',
                  loc:{start:{line:1,column:31},end:{line:1,column:44},source:''},
                  expression: {
                    type: 'Literal',
                    loc:{start:{line:1,column:31},end:{line:1,column:43},source:''},
                    value: 'use strict',
                    raw: '"use strict"'
                  },
                  directive: 'use strict'
                },
                {
                  type: 'ReturnStatement',
                  loc:{start:{line:1,column:45},end:{line:1,column:61},source:''},
                  argument: {
                    type: 'CallExpression',
                    loc:{start:{line:1,column:52},end:{line:1,column:61},source:''},
                    callee: {
                      type: 'Identifier',
                      loc:{start:{line:1,column:52},end:{line:1,column:56},source:''},
                      name: 'eval'
                    },
                    arguments: [
                      {
                        type: 'Literal',
                        loc:{start:{line:1,column:57},end:{line:1,column:60},source:''},
                        value: 'x',
                        raw: '"x"'
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      ],
      body: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:65},end:{line:1,column:87},source:''},
        body: [
          {
            type: 'VariableDeclaration',
            loc:{start:{line:1,column:67},end:{line:1,column:73},source:''},
            kind: 'var',
            declarations: [
              {
                type: 'VariableDeclarator',
                loc:{start:{line:1,column:71},end:{line:1,column:72},source:''},
                id: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:71},end:{line:1,column:72},source:''},
                  name: 'x'
                },
                init: null
              }
            ]
          },
          {
            type: 'ReturnStatement',
            loc:{start:{line:1,column:74},end:{line:1,column:85},source:''},
            argument: {
              type: 'CallExpression',
              loc:{start:{line:1,column:81},end:{line:1,column:84},source:''},
              callee: {
                type: 'Identifier',
                loc:{start:{line:1,column:81},end:{line:1,column:82},source:''},
                name: 'a'
              },
              arguments: []
            }
          }
        ]
      }
    }
  ]
}

tokens (31x):
       ID_async ID_function IDENT PUNC_PAREN_OPEN IDENT PUNC_EQ
       PUNC_PAREN_OPEN PUNC_PAREN_CLOSE PUNC_EQ_GT PUNC_CURLY_OPEN
       STRING_DOUBLE PUNC_SEMI ID_return ID_eval PUNC_PAREN_OPEN
       STRING_DOUBLE PUNC_PAREN_CLOSE ASI PUNC_CURLY_CLOSE
       PUNC_PAREN_CLOSE PUNC_CURLY_OPEN ID_var IDENT PUNC_SEMI
       ID_return IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE PUNC_SEMI
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
async function foo(a = () => {"use strict";
return (eval)("x");}) {var x;
return (a)();}
````

Produces same AST
