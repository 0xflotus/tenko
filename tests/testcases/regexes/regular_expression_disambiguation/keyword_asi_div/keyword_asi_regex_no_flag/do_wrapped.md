# Tenko parser autogenerated test case

- From: tests/testcases/regexes/regular_expression_disambiguation/keyword_asi_div/autogen.md
- Path: tests/testcases/regexes/regular_expression_disambiguation/keyword_asi_div/keyword_asi_regex_no_flag/do_wrapped.md

> :: regexes : regular expression disambiguation : keyword asi div : keyword asi regex no flag
>
> ::> do wrapped
>
> Should be fine

## PASS

## Input

`````js
do
/x/; while (x)
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
  loc:{start:{line:1,column:0},end:{line:2,column:14},source:''},
  body: [
    {
      type: 'DoWhileStatement',
      loc:{start:{line:1,column:0},end:{line:2,column:14},source:''},
      body: {
        type: 'ExpressionStatement',
        loc:{start:{line:2,column:0},end:{line:2,column:4},source:''},
        expression: {
          type: 'Literal',
          loc:{start:{line:2,column:0},end:{line:2,column:3},source:''},
          value: null,
          regex: { pattern: 'x', flags: '' },
          raw: '/x/'
        }
      },
      test: {
        type: 'Identifier',
        loc:{start:{line:2,column:12},end:{line:2,column:13},source:''},
        name: 'x'
      }
    }
  ]
}

tokens (9x):
       ID_do REGEXN PUNC_SEMI ID_while PUNC_PAREN_OPEN IDENT
       PUNC_PAREN_CLOSE ASI
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
do /x/; while (x);
````

Produces same AST
