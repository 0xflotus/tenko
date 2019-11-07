# Tenko parser autogenerated test case

- From: tests/testcases/classes/special_keys/autogen.md
- Path: tests/testcases/classes/special_keys/gen/as_regular_property_in_class/class.md

> :: classes : special keys : gen : as regular property in class
>
> ::> class

## Input


`````js
class x {class: x}
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Either the current modifier is unknown or the input that followed was unexpected

class x {class: x}
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