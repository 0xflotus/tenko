# Tenko parser test case

- Path: tests/testcases/assigns/keyword_with_escapes_check/leading_escape_x005bprotected_x003dx003e_x005cu0070rotectedx005d.md

> :: assigns : keyword with escapes check
>
> ::> leading escape x005bprotected x003dx003e x005cu0070rotectedx005d

## Input

`````js
(\u0070rotected = "sentinal 3435")
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
  loc:{start:{line:1,column:0},end:{line:1,column:34},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:34},source:''},
      expression: {
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:1},end:{line:1,column:33},source:''},
        left: {
          type: 'Identifier',
          loc:{start:{line:1,column:1},end:{line:1,column:15},source:''},
          name: 'protected'
        },
        operator: '=',
        right: {
          type: 'Literal',
          loc:{start:{line:1,column:18},end:{line:1,column:33},source:''},
          value: 'sentinal 3435',
          raw: '"sentinal 3435"'
        }
      }
    }
  ]
}

tokens (7x):
       PUNC_PAREN_OPEN IDENT PUNC_EQ STRING_DOUBLE PUNC_PAREN_CLOSE
       ASI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use this name (\u0070rotected) as a variable name because: Keywords may not have escapes in their name

(\u0070rotected = "sentinal 3435")
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
((protected = "sentinal 3435"));
````

Produces same AST