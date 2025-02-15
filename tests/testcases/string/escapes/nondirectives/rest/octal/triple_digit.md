# Tenko parser test case

- Path: tests/testcases/string/escapes/nondirectives/rest/octal/triple_digit.md

> :: string : escapes : nondirectives : rest : octal
>
> ::> triple digit
>
> 

## Input

`````js
debugger;
"xyz \123"
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Lexer error!
    Octal escapes are only allowed in sloppy mode with web compat enabled

debugger;
"xyz \123"
^------- error
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Lexer error!
    Illegal legacy octal escape in strict mode

debugger;
"xyz \123"
^------- error
`````


### Module goal

Parsed with the module goal.

_Output same as strict mode._

### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

`````
ast: {
  type: 'Program',
  loc:{start:{line:1,column:0},end:{line:2,column:10},source:''},
  body: [
    {
      type: 'DebuggerStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:9},source:''}
    },
    {
      type: 'ExpressionStatement',
      loc:{start:{line:2,column:0},end:{line:2,column:10},source:''},
      expression: {
        type: 'Literal',
        loc:{start:{line:2,column:0},end:{line:2,column:10},source:''},
        value: 'xyz S',
        raw: '"xyz \\123"'
      }
    }
  ]
}

tokens (5x):
       ID_debugger PUNC_SEMI STRING_DOUBLE ASI
`````


## AST Printer

Printer output different from input [web]:

````js
debugger;
("xyz \123");
````

Produces same AST
