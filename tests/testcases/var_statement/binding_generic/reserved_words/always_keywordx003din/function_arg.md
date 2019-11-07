# Tenko parser test case

- Path: tests/testcases/var_statement/binding_generic/reserved_words/always_keywordx003din/function_arg.md

> :: var statement : binding generic : reserved words : always keywordx003din
>
> ::> function arg

## Input

`````js
function f(in) {}
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Cannot use this name (in) as a variable name because: Cannot never use this reserved word as a variable name

function f(in) {}
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