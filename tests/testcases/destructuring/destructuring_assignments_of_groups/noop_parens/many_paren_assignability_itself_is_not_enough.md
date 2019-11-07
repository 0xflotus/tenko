# Tenko parser test case

- Path: tests/testcases/destructuring/destructuring_assignments_of_groups/noop_parens/many_paren_assignability_itself_is_not_enough.md

> :: destructuring : destructuring assignments of groups : noop parens
>
> ::> many paren assignability itself is not enough

## Input

`````js
[((((((x = y))))))] = obj
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

[((((((x = y))))))] = obj
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