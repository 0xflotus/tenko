# Tenko parser test case

- Path: tests/testcases/parens/arrow/invalid_arrow_header_things/x005bclassx007bx007dx005d_in_arrow_params.md

> :: parens : arrow : invalid arrow header things
>
> ::> x005bclassx007bx007dx005d in arrow params

## Input


`````js
(class{}) => y
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  The left hand side of the arrow is not destructible so arrow is illegal

(class{}) => y
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
