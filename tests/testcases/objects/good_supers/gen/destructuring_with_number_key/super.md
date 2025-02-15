# Tenko parser autogenerated test case

- From: tests/testcases/objects/good_supers/autogen.md
- Path: tests/testcases/objects/good_supers/gen/destructuring_with_number_key/super.md

> :: objects : good supers : gen : destructuring with number key
>
> ::> super

## Input


`````js
class x extends y {
  constructor() {
    ({123: super} = x)
  }
}
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  The `super` keyword can only be used as call or member expression

class x extends y {
  constructor() {
    ({123: super} = x)
                ^------- error

  }
}
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
