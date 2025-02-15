# Tenko parser test case

- Path: tests/testcases/continue_statement/regex/continue_asi_forwardslash_ident.md

> :: continue statement : regex
>
> ::> continue asi forwardslash ident
>
> The div can't be a division so it should try to parse a regex

## FAIL

## Input

`````js
for (x of 3) continue
/x
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Lexer error!
    Regex: Found EOF before regex was closed

for (x of 3) continue
/x
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

_Output same as sloppy mode._
