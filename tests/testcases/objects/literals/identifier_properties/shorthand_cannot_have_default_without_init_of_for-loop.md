# Tenko parser test case

- Path: tests/testcases/objects/literals/identifier_properties/shorthand_cannot_have_default_without_init_of_for-loop.md

> :: objects : literals : identifier properties
>
> ::> shorthand cannot have default without init of for-loop
>
> the test is to assert this is properly acceptable with for-in and for-of but rejected with a for-loop

## Input


`````js
for ({x=y};;);
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Cannot use lhs as regular for-loop because it must destruct

for ({x=y};;);
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
