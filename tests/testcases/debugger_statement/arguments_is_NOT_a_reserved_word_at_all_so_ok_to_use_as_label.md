# Tenko parser test case

- Path: tests/testcases/debugger_statement/arguments_is_NOT_a_reserved_word_at_all_so_ok_to_use_as_label.md

> :: debugger statement
>
> ::> arguments is NOT a reserved word at all so ok to use as label

## Input

`````js
arguments: x;
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
  loc:{start:{line:1,column:0},end:{line:1,column:13},source:''},
  body: [
    {
      type: 'LabeledStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:13},source:''},
      label: {
        type: 'Identifier',
        loc:{start:{line:1,column:0},end:{line:1,column:9},source:''},
        name: 'arguments'
      },
      body: {
        type: 'ExpressionStatement',
        loc:{start:{line:1,column:11},end:{line:1,column:13},source:''},
        expression: {
          type: 'Identifier',
          loc:{start:{line:1,column:11},end:{line:1,column:12},source:''},
          name: 'x'
        }
      }
    }
  ]
}

tokens (5x):
       ID_arguments PUNC_COLON IDENT PUNC_SEMI
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
arguments: (x);
````

Produces same AST
