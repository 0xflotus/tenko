# Tenko parser test case

- Path: tests/testcases/arrays/destructuring/double_assign.md

> :: arrays : destructuring
>
> ::> double assign
>
> This is a destructuring assignment that is part of a double assignment.
>
> It should fail because you can't have a non-assignment binary op followed by an assignment binary op.
>
> The pattern does not change that. At the time of creating this test, this was still accepted.

## FAIL

## Input

`````js
[]=n/f>>=v
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Can not have an assignment after a non-assignment operator

[]=n/f>>=v
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
