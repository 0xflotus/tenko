# Tenko parser test case

- Path: tests/testcases/functions/function_args/trailing_comma/disabled_ESx003dx00606x0060/not_allowed_after_rest.md

> :: functions : function args : trailing comma : disabled ESx003dx00606x0060
>
> ::> not allowed after rest

## Input

- `es = 6`

`````js
function f(...a,){}
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  The binding pattern is not destructible

function f(...a,){}
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
