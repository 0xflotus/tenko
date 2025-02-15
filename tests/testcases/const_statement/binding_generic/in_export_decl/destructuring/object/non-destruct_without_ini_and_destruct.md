# Tenko parser test case

- Path: tests/testcases/const_statement/binding_generic/in_export_decl/destructuring/object/non-destruct_without_ini_and_destruct.md

> :: const statement : binding generic : in export decl : destructuring : object
>
> ::> non-destruct without ini and destruct

## Input

`````js
export const x, {y} = obj;
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  The `export` keyword can only be used with the module goal

export const x, {y} = obj;
^------- error
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

`````
throws: Parser error!
  Constants must be initialized

export const x, {y} = obj;
              ^------- error
`````


### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._
