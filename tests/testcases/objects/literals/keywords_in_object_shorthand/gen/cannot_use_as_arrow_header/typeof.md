# Tenko parser autogenerated test case

- From: tests/testcases/objects/literals/keywords_in_object_shorthand/autogen.md
- Path: tests/testcases/objects/literals/keywords_in_object_shorthand/gen/cannot_use_as_arrow_header/typeof.md

> :: objects : literals : keywords in object shorthand : gen : cannot use as arrow header
>
> ::> typeof

## Input


`````js
({typeof}) => x;
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Cannot use this name (typeof) as a variable name because: Cannot never use this reserved word as a variable name

({typeof}) => x;
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