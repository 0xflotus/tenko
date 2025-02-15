# Tenko parser test case

- Path: tests/testcases/await/await_as_arg_name/non-arrow/async_function_expr.md

> :: await : await as arg name : non-arrow
>
> ::> async function expr

## Input

`````js
let x = async function f(await){}
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Cannot use this name (await) as a variable name because: Await not allowed here

let x = async function f(await){}
                         ^------- error
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

`````
throws: Parser error!
  Cannot use this name (await) as a variable name because: Await is illegal as var name with module goal

let x = async function f(await){}
                         ^------- error
`````


### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._
