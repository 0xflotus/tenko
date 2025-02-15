# Tenko parser test case

- Path: tests/testcases/comma/in_a_group.md

> :: comma
>
> ::> in a group
>
> group with comma can also turn out to be arrow params

## Input

`````js
(a,b)
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
  loc:{start:{line:1,column:0},end:{line:1,column:5},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:5},source:''},
      expression: {
        type: 'SequenceExpression',
        loc:{start:{line:1,column:1},end:{line:1,column:4},source:''},
        expressions: [
          {
            type: 'Identifier',
            loc:{start:{line:1,column:1},end:{line:1,column:2},source:''},
            name: 'a'
          },
          {
            type: 'Identifier',
            loc:{start:{line:1,column:3},end:{line:1,column:4},source:''},
            name: 'b'
          }
        ]
      }
    }
  ]
}

tokens (7x):
       PUNC_PAREN_OPEN IDENT PUNC_COMMA IDENT PUNC_PAREN_CLOSE ASI
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
((a, b));
````

Produces same AST
