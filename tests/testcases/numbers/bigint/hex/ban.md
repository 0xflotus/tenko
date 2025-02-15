# Tenko parser test case

- Path: tests/testcases/numbers/bigint/hex/ban.md

> :: numbers : bigint : hex
>
> ::> ban
>
> 

## Input

`````js
0xban
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
        type: 'BigIntLiteral',
        loc:{start:{line:1,column:0},end:{line:1,column:5},source:''},
        value: null,
        bigint: '0xba'
      }
    }
  ]
}

tokens (3x):
       NUMBER_BIG_HEX ASI
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
0xban;
````

Produces same AST
