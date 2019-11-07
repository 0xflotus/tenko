# Tenko parser autogenerated test case

- From: tests/testcases/group_or_arrow/group/invalid_arrow_header_things_that_are_valid_in_a_group/autogen.md
- Path: tests/testcases/group_or_arrow/group/invalid_arrow_header_things_that_are_valid_in_a_group/gen/in_group/x005bxx005dx002elength.md

> :: group or arrow : group : invalid arrow header things that are valid in a group : gen : in group
>
> ::> x005bxx005dx002elength

## Input


`````js
( [x].length )
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
        type: 'MemberExpression',
        loc:{start:{line:1,column:2},end:{line:1,column:12},source:''},
        object: {
          type: 'ArrayExpression',
          loc:{start:{line:1,column:2},end:{line:1,column:5},source:''},
          elements: [
            {
              type: 'Identifier',
              loc:{start:{line:1,column:3},end:{line:1,column:4},source:''},
              name: 'x'
            }
          ]
        },
        property: {
          type: 'Identifier',
          loc:{start:{line:1,column:6},end:{line:1,column:12},source:''},
          name: 'length'
        },
        computed: false
      }
    }
  ]
}

tokens (9x):
       PUNC_PAREN_OPEN PUNC_BRACKET_OPEN IDENT PUNC_BRACKET_CLOSE
       PUNC_DOT IDENT PUNC_PAREN_CLOSE ASI
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
([x,].length);
````

Produces same AST