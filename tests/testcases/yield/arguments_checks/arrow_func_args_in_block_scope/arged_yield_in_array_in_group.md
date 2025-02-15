# Tenko parser test case

- Path: tests/testcases/yield/arguments_checks/arrow_func_args_in_block_scope/arged_yield_in_array_in_group.md

> :: yield : arguments checks : arrow func args in block scope
>
> ::> arged yield in array in group

## Input


`````js
{ (x = [yield y]) }
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Expected the closing bracket `]` for the array, found `y` instead

{ (x = [yield y]) }
              ^------- error
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use `yield` outside of generator functions when in strict mode

{ (x = [yield y]) }
              ^------- error
`````


### Module goal

Parsed with the module goal.

_Output same as strict mode._

### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._
