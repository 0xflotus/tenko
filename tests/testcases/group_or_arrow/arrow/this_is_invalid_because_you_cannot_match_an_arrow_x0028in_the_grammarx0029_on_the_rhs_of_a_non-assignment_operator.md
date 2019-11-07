# Tenko parser test case

- Path: tests/testcases/group_or_arrow/arrow/this_is_invalid_because_you_cannot_match_an_arrow_x0028in_the_grammarx0029_on_the_rhs_of_a_non-assignment_operator.md

> :: group or arrow : arrow
>
> ::> this is invalid because you cannot match an arrow x0028in the grammarx0029 on the rhs of a non-assignment operator

## Input

`````js
/i/ * ()=>j
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Was parsing a value that could not be AssignmentExpression but found an arrow

/i/ * ()=>j
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