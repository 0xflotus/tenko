# Tenko parser test case

- Path: tests/testcases/async_keyword/introduced_in_es8/class_named_async.md

> :: async keyword : introduced in es8
>
> ::> class named async

## Input

- `es = 7`

`````js
class async {}
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
ast: {
  type: 'Program',
  loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
  body: [
    {
      type: 'ClassDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:6},end:{line:1,column:11},source:''},
        name: 'async'
      },
      superClass: null,
      body: {
        type: 'ClassBody',
        loc:{start:{line:1,column:12},end:{line:1,column:14},source:''},
        body: []
      }
    }
  ]
}

tokens (5x):
       ID_class ID_async PUNC_CURLY_OPEN PUNC_CURLY_CLOSE
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

## AST Printer

Printer output different from input [sloppy]:

````js
class async{}
````

Produces same AST
