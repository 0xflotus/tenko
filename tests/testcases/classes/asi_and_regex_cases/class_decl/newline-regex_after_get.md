# Tenko parser test case

- Path: tests/testcases/classes/asi_and_regex_cases/class_decl/newline-regex_after_get.md

> :: classes : asi and regex cases : class decl
>
> ::> newline-regex after get

## Input

`````js
class x { get 
 /foo/ }
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

class x { get
 /foo/ }
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
