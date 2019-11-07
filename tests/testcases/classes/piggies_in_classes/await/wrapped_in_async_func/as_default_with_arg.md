# Tenko parser test case

- Path: tests/testcases/classes/piggies_in_classes/await/wrapped_in_async_func/as_default_with_arg.md

> :: classes : piggies in classes : await : wrapped in async func
>
> ::> as default with arg

## Input

`````js
async function f() {   class x { foo(x=await y){} }   }
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Missing function param definition closing parenthesis, found `y` instead

async function f() {   class x { foo(x=await y){} }   }
                                             ^------- error
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

`````
throws: Parser error!
  Cannot use `await` as var when goal=module but found `await` outside an async function

async function f() {   class x { foo(x=await y){} }   }
                                             ^------- error
`````


### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._