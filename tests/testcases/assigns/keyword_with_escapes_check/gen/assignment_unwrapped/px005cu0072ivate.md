# Tenko parser autogenerated test case

- From: tests/testcases/assigns/keyword_with_escapes_check/autogen.md
- Path: tests/testcases/assigns/keyword_with_escapes_check/gen/assignment_unwrapped/px005cu0072ivate.md

> :: assigns : keyword with escapes check : gen : assignment unwrapped
>
> ::> px005cu0072ivate

## Input


`````js
p\u0072ivate = x;
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
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:16},source:''},
        left: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:12},source:''},
          name: 'private'
        },
        operator: '=',
        right: {
          type: 'Identifier',
          loc:{start:{line:1,column:15},end:{line:1,column:16},source:''},
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

`````
throws: Parser error!
  Cannot use this name (p\u0072ivate) as a variable name because: Keywords may not have escapes in their name

p\u0072ivate = x;
             ^------- error
`````


### Module goal

Parsed with the module goal.

_Output same as strict mode._

### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [sloppy]:

````js
((private = x));
````

Produces same AST
