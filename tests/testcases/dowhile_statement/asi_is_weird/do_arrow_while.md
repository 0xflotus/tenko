# Tenko parser test case

- Path: tests/testcases/dowhile_statement/asi_is_weird/do_arrow_while.md

> :: dowhile statement : asi is weird
>
> ::> do arrow while
>
> An ASI does not happen between arrow and while when there is no newline, but it is required so this is an error

## FAIL

## Input

`````js
do ()=>x while(c)
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Unable to ASI, token: {# ID_while : nl=N pos=9:14 loc=9:1 `while`#}

do ()=>x while(c)
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