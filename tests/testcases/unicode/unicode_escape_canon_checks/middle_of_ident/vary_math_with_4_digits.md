# Tenko parser test case

- Path: tests/testcases/unicode/unicode_escape_canon_checks/middle_of_ident/vary_math_with_4_digits.md

> :: unicode : unicode escape canon checks : middle of ident
>
> ::> vary math with 4 digits

## Input

`````js
PASS\u{2213}PASS
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Lexer error!
    Identifier escape did not yield a valid identifier character

PASS\u{2213}PASS
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
