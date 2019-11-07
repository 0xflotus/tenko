# Tenko parser test case

- Path: tests/testcases/parens/async_arrow_with_trailing_comma_in_arg_list.md

> :: parens
>
> ::> async arrow with trailing comma in arg list
>
> the only case when parsing groups where the trailing comma does NOT mean an arrow must be parsed

## Input

`````js
async(x,) => x
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
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
      expression: {
        type: 'ArrowFunctionExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
        params: [
          {
            type: 'Identifier',
            loc:{start:{line:1,column:6},end:{line:1,column:7},source:''},
            name: 'x'
          }
        ],
        id: null,
        generator: false,
        async: true,
        expression: true,
        body: {
          type: 'Identifier',
          loc:{start:{line:1,column:13},end:{line:1,column:14},source:''},
          name: 'x'
        }
      }
    }
  ]
}

tokens (9x):
       ID_async PUNC_PAREN_OPEN IDENT PUNC_COMMA PUNC_PAREN_CLOSE
       PUNC_EQ_GT IDENT ASI
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
async x => (x);
````

Produces same AST