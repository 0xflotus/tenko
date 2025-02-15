# Tenko parser autogenerated test case

- From: tests/testcases/regexes/regular_expression_disambiguation/keyword_asi_div/autogen.md
- Path: tests/testcases/regexes/regular_expression_disambiguation/keyword_asi_div/keyword_asi_div/let.md

> :: regexes : regular expression disambiguation : keyword asi div : keyword asi div
>
> ::> let
>
> Let is a flaky case. I'm pretty certain this is a hard fail regardless.

## Input

`````js
let
/x
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
  loc:{start:{line:1,column:0},end:{line:2,column:2},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:2,column:2},source:''},
      expression: {
        type: 'BinaryExpression',
        loc:{start:{line:1,column:0},end:{line:2,column:2},source:''},
        left: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:3},source:''},
          name: 'let'
        },
        operator: '/',
        right: {
          type: 'Identifier',
          loc:{start:{line:2,column:1},end:{line:2,column:2},source:''},
          name: 'x'
        }
      }
    }
  ]
}

tokens (5x):
       ID_let PUNC_DIV IDENT ASI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Let declaration missing binding names and `let` cannot be a regular var or label name in strict mode

let
/x
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
(((let) / (x)));
````

Produces same AST
