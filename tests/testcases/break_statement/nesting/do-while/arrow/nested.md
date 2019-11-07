# Tenko parser test case

- Path: tests/testcases/break_statement/nesting/do-while/arrow/nested.md

> :: break statement : nesting : do-while : arrow
>
> ::> nested

## Input

`````js
() => { do        if (x) break   ; while(true);}
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
  loc:{start:{line:1,column:0},end:{line:1,column:48},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:48},source:''},
      expression: {
        type: 'ArrowFunctionExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:48},source:''},
        params: [],
        id: null,
        generator: false,
        async: false,
        expression: false,
        body: {
          type: 'BlockStatement',
          loc:{start:{line:1,column:6},end:{line:1,column:48},source:''},
          body: [
            {
              type: 'DoWhileStatement',
              loc:{start:{line:1,column:8},end:{line:1,column:47},source:''},
              body: {
                type: 'IfStatement',
                loc:{start:{line:1,column:18},end:{line:1,column:34},source:''},
                test: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:22},end:{line:1,column:23},source:''},
                  name: 'x'
                },
                consequent: {
                  type: 'BreakStatement',
                  loc:{start:{line:1,column:25},end:{line:1,column:34},source:''},
                  label: null
                },
                alternate: null
              },
              test: {
                type: 'Literal',
                loc:{start:{line:1,column:41},end:{line:1,column:45},source:''},
                value: true,
                raw: 'true'
              }
            }
          ]
        }
      }
    }
  ]
}

tokens (19x):
       PUNC_PAREN_OPEN PUNC_PAREN_CLOSE PUNC_EQ_GT PUNC_CURLY_OPEN
       ID_do ID_if PUNC_PAREN_OPEN IDENT PUNC_PAREN_CLOSE ID_break
       PUNC_SEMI ID_while PUNC_PAREN_OPEN ID_true PUNC_PAREN_CLOSE
       PUNC_SEMI PUNC_CURLY_CLOSE ASI
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
() => {do if (x) break; while (true);};
````

Produces same AST