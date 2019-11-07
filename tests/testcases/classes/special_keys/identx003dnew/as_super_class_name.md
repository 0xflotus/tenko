# Tenko parser test case

- Path: tests/testcases/classes/special_keys/identx003dnew/as_super_class_name.md

> :: classes : special keys : identx003dnew
>
> ::> as super class name
>
> since extends accept an arbitrary expression certain keywords lead to different errors

## Input

`````js
class x extends new {}
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Expected the opening curly `{` of a class body, found `` instead (at EOF)

class x extends new {}
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