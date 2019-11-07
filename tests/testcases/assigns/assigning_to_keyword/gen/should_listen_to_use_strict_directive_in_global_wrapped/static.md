# Tenko parser autogenerated test case

- From: tests/testcases/assigns/assigning_to_keyword/autogen.md
- Path: tests/testcases/assigns/assigning_to_keyword/gen/should_listen_to_use_strict_directive_in_global_wrapped/static.md

> :: assigns : assigning to keyword : gen : should listen to use strict directive in global wrapped
>
> ::> static

## Input


`````js
"use strict"; (static = x);
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Cannot use this name (static) as a variable name because: `static` is a reserved word in strict mode

"use strict"; (static = x);
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