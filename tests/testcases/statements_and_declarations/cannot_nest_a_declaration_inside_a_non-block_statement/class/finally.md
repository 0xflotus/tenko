# Tenko parser test case

- Path: tests/testcases/statements_and_declarations/cannot_nest_a_declaration_inside_a_non-block_statement/class/finally.md

> :: statements and declarations : cannot nest a declaration inside a non-block statement : class
>
> ::> finally

## Input

`````js
try { } finally { class X {} }
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
  loc:{start:{line:1,column:0},end:{line:1,column:30},source:''},
  body: [
    {
      type: 'TryStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:30},source:''},
      block: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:4},end:{line:1,column:7},source:''},
        body: []
      },
      handler: null,
      finalizer: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:16},end:{line:1,column:30},source:''},
        body: [
          {
            type: 'ClassDeclaration',
            loc:{start:{line:1,column:18},end:{line:1,column:28},source:''},
            id: {
              type: 'Identifier',
              loc:{start:{line:1,column:24},end:{line:1,column:25},source:''},
              name: 'X'
            },
            superClass: null,
            body: {
              type: 'ClassBody',
              loc:{start:{line:1,column:26},end:{line:1,column:28},source:''},
              body: []
            }
          }
        ]
      }
    }
  ]
}

tokens (11x):
       ID_try PUNC_CURLY_OPEN PUNC_CURLY_CLOSE ID_finally
       PUNC_CURLY_OPEN ID_class IDENT PUNC_CURLY_OPEN PUNC_CURLY_CLOSE
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
try {} finally {class X{}}
````

Produces same AST
