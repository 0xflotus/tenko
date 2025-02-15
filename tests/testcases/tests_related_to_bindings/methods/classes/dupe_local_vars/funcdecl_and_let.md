# Tenko parser test case

- Path: tests/testcases/tests_related_to_bindings/methods/classes/dupe_local_vars/funcdecl_and_let.md

> :: tests related to bindings : methods : classes : dupe local vars
>
> ::> funcdecl and let
>
> https://tc39.github.io/ecma262/#sec-function-definitions-static-semantics-early-errors
>
> > It is a Syntax Error if any element of the LexicallyDeclaredNames of FunctionStatementList also occurs in the VarDeclaredNames of FunctionStatementList.
>
> > The LexicallyDeclaredNames of a FunctionBody does not include identifiers bound using var or function declarations.

## Input

`````js
class o {f(){ function x(){} let x; }}
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Attempted to create a lexical binding for `x` but another binding already existed on the same level

class o {f(){ function x(){} let x; }}
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
