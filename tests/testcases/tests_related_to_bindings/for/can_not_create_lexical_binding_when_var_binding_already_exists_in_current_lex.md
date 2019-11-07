# Tenko parser test case

- Path: tests/testcases/tests_related_to_bindings/for/can_not_create_lexical_binding_when_var_binding_already_exists_in_current_lex.md

> :: tests related to bindings : for
>
> ::> can not create lexical binding when var binding already exists in current lex

## Input


`````js
for (var a;;) { var b; let b; }
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Attempted to create a lexical binding for `b` but another binding already existed on the same level

for (var a;;) { var b; let b; }
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