# Tenko parser test case

- Path: tests/testcases/classes/star/async_star_equals_start.md

> :: classes : star
>
> ::> async star equals start
>
> Found by fuzzer
>
> Regression would accept the star, without confirming that it wasn't a different token like `*=` or `**`

## FAIL

## Input

`````js
class A {async *=f(){}}
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Expected to parse the modified key of a class method but could not parse one

class A {async *=f(){}}
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