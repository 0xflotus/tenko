# Tenko parser autogenerated test case

- From: tests/testcases/let_declaration/sub_tree/autogen.md
- Path: tests/testcases/let_declaration/sub_tree/gen/export/let_x007bxx007d.md

> :: let declaration : sub tree : gen : export
>
> ::> let x007bxx007d

## Input


`````js
export let {x}
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  The `export` keyword can only be used with the module goal

export let {x}
^------- error
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

`````
throws: Parser error!
  Declaration destructuring must have init (at EOF)

export let {x}
             ^------- error
`````


### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._
