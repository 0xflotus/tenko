# Tenko parser test case

- Path: tests/testcases/for_statement/for-await/for_await_does_not_support_x0060inx0060_x0028not_asyncx0029.md

> :: for statement : for-await
>
> ::> for await does not support x0060inx0060 x0028not asyncx0029

## Input

`````js
for await (x in y) {}
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Can only use `for-await` inside an async function

for await (x in y) {}
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
