# Tenko parser test case

- Path: tests/testcases/objects/literals/dont_allow_semi_because_it_shares_code_with_class/instead_of_comma.md

> :: objects : literals : dont allow semi because it shares code with class
>
> ::> instead of comma

## Input


`````js
({x:y;a:b})
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Expected the closing curly `}` for an object, found `;` instead

({x:y;a:b})
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
