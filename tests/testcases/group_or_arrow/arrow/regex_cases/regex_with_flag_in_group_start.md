# Tenko parser test case

- Path: tests/testcases/group_or_arrow/arrow/regex_cases/regex_with_flag_in_group_start.md

> :: group or arrow : arrow : regex cases
>
> ::> regex with flag in group start

## Input

`````js
(/x/) => x
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Unable to ASI, token: {# PUNC_EQ_GT : nl=N pos=6:8 loc=6:1 `=>`#}

(/x/) => x
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
