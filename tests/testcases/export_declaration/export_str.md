# Tenko parser test case

- Path: tests/testcases/export_declaration/export_str.md

> :: export declaration
>
> ::> export str

## Input

`````js
export default "foo";
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

export default "foo";
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
  loc:{start:{line:1,column:0},end:{line:1,column:21},source:''},
  body: [
    {
      type: 'ExportDefaultDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:21},source:''},
      declaration: {
        type: 'Literal',
        loc:{start:{line:1,column:15},end:{line:1,column:20},source:''},
        value: 'foo',
        raw: '"foo"'
      }
    }
  ]
}

tokens (5x):
       ID_export ID_default STRING_DOUBLE PUNC_SEMI
`````


### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output was same as input [module]