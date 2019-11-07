# Tenko parser autogenerated test case

- From: tests/testcases/assigns/assigning_to_keyword/autogen.md
- Path: tests/testcases/assigns/assigning_to_keyword/gen/assign_to_paren-wrapped_VALUE_keyword_inside_delete_in_param_default/var.md

> :: assigns : assigning to keyword : gen : assign to paren-wrapped VALUE keyword inside delete in param default
>
> ::> var

## Input


`````js
function *f(x = delete ((var) = f)) {}
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Cannot use this name (var) as a variable name because: Cannot never use this reserved word as a variable name

function *f(x = delete ((var) = f)) {}
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