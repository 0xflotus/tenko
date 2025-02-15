# Tenko parser autogenerated test case

- From: tests/testcases/let_declaration/binding_generic/rest/invalid_obj_rest/autogen.md
- Path: tests/testcases/let_declaration/binding_generic/rest/invalid_obj_rest/gen/case/let_x007bx002ex002ex002eobj1_x007d_x003d_foo.md

> :: let declaration : binding generic : rest : invalid obj rest : gen : case
>
> ::> let x007bx002ex002ex002eobj1 x007d x003d foo

## Input


`````js
let {...obj1,} = foo
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  The binding pattern is not destructible

let {...obj1,} = foo
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
