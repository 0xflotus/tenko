# Tenko parser autogenerated test case

- From: tests/testcases/regexes/property_escapes/ranges/autogen.md
- Path: tests/testcases/regexes/property_escapes/ranges/gen/Left_of_range/g.md

> :: regexes : property escapes : ranges : gen : Left of range
>
> ::> g

## Input


`````js
/[\p{Hex}-z]/g
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Lexer error!
    Regex: The `\p` property escape is only legal with a u-flag, or as a webcompat edge case; Character class escapes `\d \D \s \S \w \W \p \P` are only ok as a range with webcompat, without uflag

/[\p{Hex}-z]/g
^------- error
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

_Output same as sloppy mode._

### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

`````
ast: {
  type: 'Program',
  loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
      expression: {
        type: 'Literal',
        loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
        value: null,
        regex: { pattern: '[\\p{Hex}-z]', flags: 'g' },
        raw: '/[\\p{Hex}-z]/g'
      }
    }
  ]
}

tokens (3x):
       REGEXN ASI
`````


## AST Printer

Printer output different from input [web]:

````js
/[\p{Hex}-z]/g;
````

Produces same AST