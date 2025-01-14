# Tenko parser test case

- Path: tests/testcases/arrays/destructuring/spread_mirror_rest_tests/can_not_splat_an_expression_at_the_end.md

> :: arrays : destructuring : spread mirror rest tests
>
> ::> can not splat an expression at the end
https://tc39.github.io/ecma262/#prod-SpreadElement
```
...AssignmentExpression[+In, ?Yield, ?Await]
```
(in other words; any expression is fair game here)

## Input

`````js
[x, y, ...z + arr] = obj
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Tried to destructure something that is not destructible

[x, y, ...z + arr] = obj
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
