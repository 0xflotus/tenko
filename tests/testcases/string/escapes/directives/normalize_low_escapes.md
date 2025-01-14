# Tenko parser test case

- Path: tests/testcases/string/escapes/directives/normalize_low_escapes.md

> :: string : escapes : directives
>
> ::> normalize low escapes

## Input

`````js
'start \0137 \x18 \u{05} \0 finish';
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

'start \0137 \x18 \u{05} \0 finish';
^------- error
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Lexer error!
    Illegal legacy octal escape in strict mode

'start \0137 \x18 \u{05} \0 finish';
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
  loc:{start:{line:1,column:0},end:{line:1,column:36},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:36},source:''},
      expression: {
        type: 'Literal',
        loc:{start:{line:1,column:0},end:{line:1,column:35},source:''},
        value: 'start \u000b7 \u0018 \u0005 \u0000 finish',
        raw: "'start \\0137 \\x18 \\u{05} \\0 finish'"
      },
      directive: 'start \\0137 \\x18 \\u{05} \\0 finish'
    }
  ]
}

tokens (3x):
       STRING_SINGLE PUNC_SEMI
`````


## AST Printer

Printer output was same as input [web]
