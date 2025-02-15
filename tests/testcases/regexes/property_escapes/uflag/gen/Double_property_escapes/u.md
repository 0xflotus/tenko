# Tenko parser autogenerated test case

- From: tests/testcases/regexes/property_escapes/uflag/autogen.md
- Path: tests/testcases/regexes/property_escapes/uflag/gen/Double_property_escapes/u.md

> :: regexes : property escapes : uflag : gen : Double property escapes
>
> ::> u

## Input


`````js
/\P{Hex}\P{Hex}/u
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
  loc:{start:{line:1,column:0},end:{line:1,column:17},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:17},source:''},
      expression: {
        type: 'Literal',
        loc:{start:{line:1,column:0},end:{line:1,column:17},source:''},
        value: null,
        regex: { pattern: '\\P{Hex}\\P{Hex}', flags: 'u' },
        raw: '/\\P{Hex}\\P{Hex}/u'
      }
    }
  ]
}

tokens (3x):
       REGEXU ASI
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
/\P{Hex}\P{Hex}/u;
````

Produces same AST
