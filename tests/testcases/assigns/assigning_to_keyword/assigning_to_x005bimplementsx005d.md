# Tenko parser test case

- Path: tests/testcases/assigns/assigning_to_keyword/assigning_to_x005bimplementsx005d.md

> :: assigns : assigning to keyword
>
> ::> assigning to x005bimplementsx005d

## Input

`````js
(implements = "sentinal 543665")
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
  loc:{start:{line:1,column:0},end:{line:1,column:32},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:32},source:''},
      expression: {
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:1},end:{line:1,column:31},source:''},
        left: {
          type: 'Identifier',
          loc:{start:{line:1,column:1},end:{line:1,column:11},source:''},
          name: 'implements'
        },
        operator: '=',
        right: {
          type: 'Literal',
          loc:{start:{line:1,column:14},end:{line:1,column:31},source:''},
          value: 'sentinal 543665',
          raw: '"sentinal 543665"'
        }
      }
    }
  ]
}

tokens (7x):
       PUNC_PAREN_OPEN ID_implements PUNC_EQ STRING_DOUBLE
       PUNC_PAREN_CLOSE ASI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use this name (implements) as a variable name because: Cannot use this reserved word as a variable name in strict mode

(implements = "sentinal 543665")
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
((implements = "sentinal 543665"));
````

Produces same AST
