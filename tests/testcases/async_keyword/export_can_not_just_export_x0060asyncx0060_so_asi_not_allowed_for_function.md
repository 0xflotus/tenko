# Tenko parser test case

- Path: tests/testcases/async_keyword/export_can_not_just_export_x0060asyncx0060_so_asi_not_allowed_for_function.md

> :: async keyword
>
> ::> export can not just export x0060asyncx0060 so asi not allowed for function

## Input

`````js
export async 
 function(){}
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

export async
^------- error

 function(){}
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

`````
throws: Parser error!
  Async can not be followed by a newline as it results in `export async;`, which is not valid (and probably not what you wanted)

export async
 function(){}
 ^------- error
`````


### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._
