# Tenko parser test case

- Path: tests/testcases/html_comments/close_comment/mmc_smc.md

> :: html comments : close comment
>
> ::> mmc smc
>
> An "html closing comment" after a multi-line comment containing a newline is legal in web compat
>
> The grammar allows for multi-line comments without newlines to precede it, as long as those were preceded by at least one multi-line comment that did have a newline

## Input

`````js
/* new
line */ /* new newlines */ --> a b
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  Expected to parse a value

/* new
line */ /* new newlines */ --> a b
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
  loc:{start:{line:1,column:0},end:{line:2,column:34},source:''},
  body: []
}

tokens (1x):

`````


## AST Printer

Printer output different from input [web]:

````js

````

Produces same AST
