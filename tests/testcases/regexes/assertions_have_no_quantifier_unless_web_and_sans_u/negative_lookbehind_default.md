# Tenko parser test case

- Path: tests/testcases/regexes/assertions_have_no_quantifier_unless_web_and_sans_u/negative_lookbehind_default.md

> :: regexes : assertions have no quantifier unless web and sans u
>
> ::> negative lookbehind default

## Input

`````js
/a(?<!x)b/
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
  loc:{start:{line:1,column:0},end:{line:1,column:10},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:10},source:''},
      expression: {
        type: 'Literal',
        loc:{start:{line:1,column:0},end:{line:1,column:10},source:''},
        value: null,
        regex: { pattern: 'a(?<!x)b', flags: '' },
        raw: '/a(?<!x)b/'
      }
    }
  ]
}

tokens (3x):
       REGEXN ASI
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
/a(?<!x)b/;
````

Produces same AST