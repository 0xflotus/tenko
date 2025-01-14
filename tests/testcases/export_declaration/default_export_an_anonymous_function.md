# Tenko parser test case

- Path: tests/testcases/export_declaration/default_export_an_anonymous_function.md

> :: export declaration
>
> ::> default export an anonymous function

## Input

`````js
export default function(){}
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

export default function(){}
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
  loc:{start:{line:1,column:0},end:{line:1,column:27},source:''},
  body: [
    {
      type: 'ExportDefaultDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:27},source:''},
      declaration: {
        type: 'FunctionDeclaration',
        loc:{start:{line:1,column:15},end:{line:1,column:27},source:''},
        generator: false,
        async: false,
        id: null,
        params: [],
        body: {
          type: 'BlockStatement',
          loc:{start:{line:1,column:25},end:{line:1,column:27},source:''},
          body: []
        }
      }
    }
  ]
}

tokens (8x):
       ID_export ID_default ID_function PUNC_PAREN_OPEN
       PUNC_PAREN_CLOSE PUNC_CURLY_OPEN PUNC_CURLY_CLOSE
`````


### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [module]:

````js
export default function() {}
````

Produces same AST
