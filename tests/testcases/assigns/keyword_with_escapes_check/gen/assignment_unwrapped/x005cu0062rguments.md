# Tenko parser autogenerated test case

- From: tests/testcases/assigns/keyword_with_escapes_check/autogen.md
- Path: tests/testcases/assigns/keyword_with_escapes_check/gen/assignment_unwrapped/x005cu0062rguments.md

> :: assigns : keyword with escapes check : gen : assignment unwrapped
>
> ::> x005cu0062rguments

## Input


`````js
\u0062rguments = x;
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
  loc:{start:{line:1,column:0},end:{line:1,column:19},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:19},source:''},
      expression: {
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:18},source:''},
        left: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
          name: 'brguments'
        },
        operator: '=',
        right: {
          type: 'Identifier',
          loc:{start:{line:1,column:17},end:{line:1,column:18},source:''},
          name: 'x'
        }
      }
    }
  ]
}

tokens (5x):
       IDENT PUNC_EQ IDENT PUNC_SEMI
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
((brguments = x));
````

Produces same AST
