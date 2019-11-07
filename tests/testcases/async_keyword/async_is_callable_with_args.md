# Tenko parser test case

- Path: tests/testcases/async_keyword/async_is_callable_with_args.md

> :: async keyword
>
> ::> async is callable with args

## Input

`````js
foo(async(x,y,z))
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
  loc:{start:{line:1,column:0},end:{line:1,column:17},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:17},source:''},
      expression: {
        type: 'CallExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:17},source:''},
        callee: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:3},source:''},
          name: 'foo'
        },
        arguments: [
          {
            type: 'CallExpression',
            loc:{start:{line:1,column:4},end:{line:1,column:16},source:''},
            callee: {
              type: 'Identifier',
              loc:{start:{line:1,column:4},end:{line:1,column:9},source:''},
              name: 'async'
            },
            arguments: [
              {
                type: 'Identifier',
                loc:{start:{line:1,column:10},end:{line:1,column:11},source:''},
                name: 'x'
              },
              {
                type: 'Identifier',
                loc:{start:{line:1,column:12},end:{line:1,column:13},source:''},
                name: 'y'
              },
              {
                type: 'Identifier',
                loc:{start:{line:1,column:14},end:{line:1,column:15},source:''},
                name: 'z'
              }
            ]
          }
        ]
      }
    }
  ]
}

tokens (13x):
       IDENT PUNC_PAREN_OPEN ID_async PUNC_PAREN_OPEN IDENT PUNC_COMMA
       IDENT PUNC_COMMA IDENT PUNC_PAREN_CLOSE PUNC_PAREN_CLOSE ASI
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
((foo)(async(x, y, z)));
````

Produces same AST