# Tenko parser test case

- Path: tests/testcases/unicode/quad_byte_chars/identifier_that_ends_with_a_higher_unicode_char.md

> :: unicode : quad byte chars
>
> ::> identifier that ends with a higher unicode char
>
> "ELBASAN LETTER THE" https://codepoints.net/U+1051E

## Input

`````js
foo@{x1051e}@();
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
  loc:{start:{line:1,column:0},end:{line:1,column:8},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:8},source:''},
      expression: {
        type: 'CallExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:7},source:''},
        callee: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:5},source:''},
          name: 'foo@{x1051e}@'
        },
        arguments: []
      }
    }
  ]
}

tokens (5x):
       IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE PUNC_SEMI
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
((foo@{x1051e}@)());
````

Produces same AST
