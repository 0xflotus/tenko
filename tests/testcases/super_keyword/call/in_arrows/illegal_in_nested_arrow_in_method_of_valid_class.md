# Tenko parser test case

- Path: tests/testcases/super_keyword/call/in_arrows/illegal_in_nested_arrow_in_method_of_valid_class.md

> :: super keyword : call : in arrows
>
> ::> illegal in nested arrow in method of valid class

## Input


`````js
class x extends y { foo(){ return () => () => super(); }}
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Can only use `super()` in constructors of classes that extend another class

class x extends y { foo(){ return () => () => super(); }}
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
