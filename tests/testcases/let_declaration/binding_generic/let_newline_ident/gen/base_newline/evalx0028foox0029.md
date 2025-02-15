# Tenko parser autogenerated test case

- From: tests/testcases/let_declaration/binding_generic/let_newline_ident/autogen.md
- Path: tests/testcases/let_declaration/binding_generic/let_newline_ident/gen/base_newline/evalx0028foox0029.md

> :: let declaration : binding generic : let newline ident : gen : base newline
>
> ::> evalx0028foox0029

## Input


`````js
let
eval(foo)
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Unable to ASI, token: {# PUNC_PAREN_OPEN : nl=N pos=8:9 loc=4:2 `(`#}

let
eval(foo)
    ^------- error
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Attempted to create a `let` binding on special reserved keyword `eval` but: Cannot create a binding named `eval` in strict mode

let
eval(foo)
^------- error
`````


### Module goal

Parsed with the module goal.

_Output same as strict mode._

### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._
