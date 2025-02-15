# Tenko parser autogenerated test case

- From: tests/testcases/let_declaration/sub_tree/autogen.md
- Path: tests/testcases/let_declaration/sub_tree/gen/do_asi/let_x005bx005d.md

> :: let declaration : sub tree : gen : do asi
>
> ::> let x005bx005d
>          []

## Input


`````js
do let
[]
while (a);
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  It is never valid for an expression statement to begin with `let[`, and a `let` declaration would not be valid here

do let
[]
^------- error

while (a);
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  `let` declaration not allowed here and `let` cannot be a regular var or label name in strict mode

do let
[]
^------- error

while (a);
`````


### Module goal

Parsed with the module goal.

_Output same as strict mode._

### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._
