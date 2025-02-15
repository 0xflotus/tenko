# Tenko parser autogenerated test case

- From: tests/testcases/assigns/keyword_with_escapes_check/autogen.md
- Path: tests/testcases/assigns/keyword_with_escapes_check/gen/inside_a_generator_func/x005cu0072eturn.md

> :: assigns : keyword with escapes check : gen : inside a generator func
>
> ::> x005cu0072eturn

## Input


`````js
function *f(){
  \u0072eturn = x
}
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Cannot use this name (\u0072eturn) as a variable name because: Keywords may not have escapes in their name

function *f(){
  \u0072eturn = x
              ^------- error

}
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
