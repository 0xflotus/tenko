# Tenko parser test case

- Path: tests/testcases/html_comments/close_comment/semi_mc_with_nl_id.md

> :: html comments : close comment
>
> ::> semi mc with nl id
>
> An "html closing comment" after a multi-line comment containing a newline is legal in web compat but only when the closing comment has no solids between it.
>
> That's not the case here so it should fail.

## FAIL

## Input

`````js
xyz; /* foo
bar */ fail; --> a b
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Expected to parse a value

xyz; /* foo
bar */ fail; --> a b
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
