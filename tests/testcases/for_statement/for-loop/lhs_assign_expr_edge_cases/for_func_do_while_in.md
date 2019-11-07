# Tenko parser test case

- Path: tests/testcases/for_statement/for-loop/lhs_assign_expr_edge_cases/for_func_do_while_in.md

> :: for statement : for-loop : lhs assign expr edge cases
>
> ::> for func do while in
>
> By fuzzer, zeparser only
>
> Error: Parser error! Next ord should be 41 (`)`) but was 105 (curc: `i`, token: `in`)

## Input

`````js
for(function(){do;while(x in t)};;)x
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
      type: 'ForStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:36},source:''},
      init: {
        type: 'FunctionExpression',
        loc:{start:{line:1,column:4},end:{line:1,column:32},source:''},
        generator: false,
        async: false,
        id: null,
        params: [],
        body: {
          type: 'BlockStatement',
          loc:{start:{line:1,column:14},end:{line:1,column:32},source:''},
          body: [
            {
              type: 'DoWhileStatement',
              loc:{start:{line:1,column:15},end:{line:1,column:31},source:''},
              body: {
                type: 'EmptyStatement',
                loc:{start:{line:1,column:17},end:{line:1,column:18},source:''}
              },
              test: {
                type: 'BinaryExpression',
                loc:{start:{line:1,column:24},end:{line:1,column:30},source:''},
                left: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:24},end:{line:1,column:25},source:''},
                  name: 'x'
                },
                operator: 'in',
                right: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:29},end:{line:1,column:30},source:''},
                  name: 't'
                }
              }
            }
          ]
        }
      },
      test: null,
      update: null,
      body: {
        type: 'ExpressionStatement',
        loc:{start:{line:1,column:35},end:{line:1,column:36},source:''},
        expression: {
          type: 'Identifier',
          loc:{start:{line:1,column:35},end:{line:1,column:36},source:''},
          name: 'x'
        }
      }
    }
  ]
}

tokens (22x):
       ID_for PUNC_PAREN_OPEN ID_function PUNC_PAREN_OPEN
       PUNC_PAREN_CLOSE PUNC_CURLY_OPEN ID_do PUNC_SEMI ID_while
       PUNC_PAREN_OPEN IDENT ID_in IDENT PUNC_PAREN_CLOSE ASI
       PUNC_CURLY_CLOSE PUNC_SEMI PUNC_SEMI PUNC_PAREN_CLOSE IDENT ASI
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
for ((function() {do ; while (((x) in (t)));});;) (x);
````

Produces same AST