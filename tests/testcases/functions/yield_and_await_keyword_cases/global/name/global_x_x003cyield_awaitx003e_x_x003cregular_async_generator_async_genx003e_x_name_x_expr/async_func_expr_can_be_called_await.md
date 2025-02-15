# Tenko parser test case

- Path: tests/testcases/functions/yield_and_await_keyword_cases/global/name/global_x_x003cyield_awaitx003e_x_x003cregular_async_generator_async_genx003e_x_name_x_expr/async_func_expr_can_be_called_await.md

> :: functions : yield and await keyword cases : global : name : global x x003cyield awaitx003e x x003cregular async generator async genx003e x name x expr
>
> ::> async func expr can be called await
>
> barring exceptions -- for all functions and methods goes:
>
> - name of the func keeps outer scope await/yield state. exception: function expressions clear it.
> - args and body explicitly set it according to the type of this function (so async sets await clears yield, etc)
>
> This means you can use `await` as a function name as long as you are not in strict mode and not already inside an async function and it's okay if the function whose name is being defined is actually async itself.
>
> the cases to test are a cross product of:
>
> - `<global, inside async, inside generator>` 
> - `x` 
> - `<yield, await>`
> - `x` 
> - `<regular, async, generator, async gen>`
> - `x` 
> - `<name, arg-name, arg-default, body>`
> - `x`
> - `<class method, obj method, decl, expr, default>`

## Input

`````js
let f = async function await() {}
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

let f = async function await() {}
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

let f = async function await() {}
                       ^------- error
`````


### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._
