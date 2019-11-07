# Tenko parser test case

- Path: tests/testcases/functions/func_statements/x0060ifx0060_always_bad_without_web_compat.md

> :: functions : func statements
>
> ::> x0060ifx0060 always bad without web compat

## Input

`````js
if (x) function f(){}
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  A function declaration can only be the child of an `if`/`else` in sloppy web compat mode

if (x) function f(){}
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

`````
ast: {
  type: 'Program',
  loc:{start:{line:1,column:0},end:{line:1,column:21},source:''},
  body: [
    {
      type: 'IfStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:21},source:''},
      test: {
        type: 'Identifier',
        loc:{start:{line:1,column:4},end:{line:1,column:5},source:''},
        name: 'x'
      },
      consequent: {
        type: 'FunctionDeclaration',
        loc:{start:{line:1,column:7},end:{line:1,column:21},source:''},
        generator: false,
        async: false,
        id: {
          type: 'Identifier',
          loc:{start:{line:1,column:16},end:{line:1,column:17},source:''},
          name: 'f'
        },
        params: [],
        body: {
          type: 'BlockStatement',
          loc:{start:{line:1,column:19},end:{line:1,column:21},source:''},
          body: []
        }
      },
      alternate: null
    }
  ]
}

tokens (11x):
       ID_if PUNC_PAREN_OPEN IDENT PUNC_PAREN_CLOSE ID_function IDENT
       PUNC_PAREN_OPEN PUNC_PAREN_CLOSE PUNC_CURLY_OPEN
       PUNC_CURLY_CLOSE
`````


## AST Printer

Printer output different from input [web]:

````js
if (x) function f() {}
````

Produces same AST