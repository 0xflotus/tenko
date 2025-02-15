# Tenko parser autogenerated test case

- From: tests/testcases/regexes/regular_expression_disambiguation/keyword_asi_div/autogen.md
- Path: tests/testcases/regexes/regular_expression_disambiguation/keyword_asi_div/keyword_asi_regex_no_flag/delete.md

> :: regexes : regular expression disambiguation : keyword asi div : keyword asi regex no flag
>
> ::> delete
>
> The `/` is parsed as a regex arg to `delete`

## PASS

## Input

`````js
delete
/x/
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
  loc:{start:{line:1,column:0},end:{line:2,column:3},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:2,column:3},source:''},
      expression: {
        type: 'UnaryExpression',
        loc:{start:{line:1,column:0},end:{line:2,column:3},source:''},
        operator: 'delete',
        prefix: true,
        argument: {
          type: 'Literal',
          loc:{start:{line:2,column:0},end:{line:2,column:3},source:''},
          value: null,
          regex: { pattern: 'x', flags: '' },
          raw: '/x/'
        }
      }
    }
  ]
}

tokens (4x):
       ID_delete REGEXN ASI
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
(delete (/x/));
````

Produces same AST
