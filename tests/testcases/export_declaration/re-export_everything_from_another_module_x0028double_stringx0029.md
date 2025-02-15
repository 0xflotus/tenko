# Tenko parser test case

- Path: tests/testcases/export_declaration/re-export_everything_from_another_module_x0028double_stringx0029.md

> :: export declaration
>
> ::> re-export everything from another module x0028double stringx0029

## Input

`````js
export * from "foo"
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

export * from "foo"
^------- error
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

`````
ast: {
  type: 'Program',
  loc:{start:{line:1,column:0},end:{line:1,column:19},source:''},
  body: [
    {
      type: 'ExportAllDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:19},source:''},
      source: {
        type: 'Literal',
        loc:{start:{line:1,column:14},end:{line:1,column:19},source:''},
        value: 'foo',
        raw: '"foo"'
      }
    }
  ]
}

tokens (6x):
       ID_export PUNC_STAR ID_from STRING_DOUBLE ASI
`````


### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [module]:

````js
export * from "foo";
````

Produces same AST
