# Tenko parser test case

- Path: tests/testcases/objects/literals/identifier_method/special_keys_with_identx003dcontinue/as_static_getter_in_obj.md

> :: objects : literals : identifier method : special keys with identx003dcontinue
>
> ::> as static getter in obj

## Input

`````js
({static get continue(){}});
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Expected to parse the start of a property but found an unknown modifier

({static get continue(){}});
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
