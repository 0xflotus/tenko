# Tenko parser test case

- Path: tests/testcases/zeprinter/second_arg.md

> :: zeprinter
>
> ::> second arg
>
> I forgot that array map callback has three params by default :p

## Input

`````js
;var e=D;s()
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
  loc:{start:{line:1,column:0},end:{line:1,column:12},source:''},
  body: [
    {
      type: 'EmptyStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:1},source:''}
    },
    {
      type: 'VariableDeclaration',
      loc:{start:{line:1,column:1},end:{line:1,column:9},source:''},
      kind: 'var',
      declarations: [
        {
          type: 'VariableDeclarator',
          loc:{start:{line:1,column:5},end:{line:1,column:8},source:''},
          id: {
            type: 'Identifier',
            loc:{start:{line:1,column:5},end:{line:1,column:6},source:''},
            name: 'e'
          },
          init: {
            type: 'Identifier',
            loc:{start:{line:1,column:7},end:{line:1,column:8},source:''},
            name: 'D'
          }
        }
      ]
    },
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:9},end:{line:1,column:12},source:''},
      expression: {
        type: 'CallExpression',
        loc:{start:{line:1,column:9},end:{line:1,column:12},source:''},
        callee: {
          type: 'Identifier',
          loc:{start:{line:1,column:9},end:{line:1,column:10},source:''},
          name: 's'
        },
        arguments: []
      }
    }
  ]
}

tokens (11x):
       PUNC_SEMI ID_var IDENT PUNC_EQ IDENT PUNC_SEMI IDENT
       PUNC_PAREN_OPEN PUNC_PAREN_CLOSE ASI
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
;
var e = D;
((s)());
````

Produces same AST
