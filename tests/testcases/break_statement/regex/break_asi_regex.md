# Tenko parser test case

- Path: tests/testcases/break_statement/regex/break_asi_regex.md

> :: break statement : regex
>
> ::> break asi regex
>
> The div can't be a division so it should try to parse a regex

## PASS

## Input

`````js
for (x of 3) break
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
      type: 'ForOfStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:18},source:''},
      left: {
        type: 'Identifier',
        loc:{start:{line:1,column:5},end:{line:1,column:6},source:''},
        name: 'x'
      },
      right: {
        type: 'Literal',
        loc:{start:{line:1,column:10},end:{line:1,column:11},source:''},
        value: 3,
        raw: '3'
      },
      await: false,
      body: {
        type: 'BreakStatement',
        loc:{start:{line:1,column:13},end:{line:1,column:18},source:''},
        label: null
      }
    },
    {
      type: 'ExpressionStatement',
      loc:{start:{line:2,column:0},end:{line:2,column:3},source:''},
      expression: {
        type: 'Literal',
        loc:{start:{line:2,column:0},end:{line:2,column:3},source:''},
        value: null,
        regex: { pattern: 'x', flags: '' },
        raw: '/x/'
      }
    }
  ]
}

tokens (11x):
       ID_for PUNC_PAREN_OPEN IDENT ID_of NUMBER_DEC PUNC_PAREN_CLOSE
       ID_break ASI REGEXN ASI
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
for ((x) of 3) break;
/x/;
````

Produces same AST
