# Tenko parser autogenerated test case

- From: tests/testcases/let_declaration/binding_pattern/autogen.md
- Path: tests/testcases/let_declaration/binding_pattern/gen/shorthand_that_is_computed/var.md

> :: let declaration : binding pattern : gen : shorthand that is computed
>
> ::> var

## Input


`````js
var {[a]} = v
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  A computed property name must be followed by a colon or paren

var {[a]} = v
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
