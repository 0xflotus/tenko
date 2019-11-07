# Tenko parser test case

- Path: tests/testcases/group_or_arrow/group/regular_assignment_to_group/assignment_to_array_is_destructuring.md

> :: group or arrow : group : regular assignment to group
>
> ::> assignment to array is destructuring
>
> while not a prod, the assignment to array/object is an explicit exception (search for `assignmentpattern`)
> 
> https://tc39.github.io/ecma262/#_ref_10683
>
> > AssignmentExpression: LeftHandSideExpression = AssignmentExpression
>
> > It is a Syntax Error if LeftHandSideExpression is either an ObjectLiteral or an ArrayLiteral and LeftHandSideExpression is not covering an AssignmentPattern.
>
> > It is an early Reference Error if LeftHandSideExpression is neither an ObjectLiteral nor an ArrayLiteral and IsValidSimpleAssignmentTarget of LeftHandSideExpression is false.
>
> > AssignmentExpression: LeftHandSideExpression AssignmentOperator AssignmentExpression
>
> > It is an early Reference Error if IsValidSimpleAssignmentTarget of LeftHandSideExpression is false.

## Input

`````js
[x, y] = z;
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
  loc:{start:{line:1,column:0},end:{line:1,column:11},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:11},source:''},
      expression: {
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:10},source:''},
        left: {
          type: 'ArrayPattern',
          loc:{start:{line:1,column:0},end:{line:1,column:6},source:''},
          elements: [
            {
              type: 'Identifier',
              loc:{start:{line:1,column:1},end:{line:1,column:2},source:''},
              name: 'x'
            },
            {
              type: 'Identifier',
              loc:{start:{line:1,column:4},end:{line:1,column:5},source:''},
              name: 'y'
            }
          ]
        },
        operator: '=',
        right: {
          type: 'Identifier',
          loc:{start:{line:1,column:9},end:{line:1,column:10},source:''},
          name: 'z'
        }
      }
    }
  ]
}

tokens (9x):
       PUNC_BRACKET_OPEN IDENT PUNC_COMMA IDENT PUNC_BRACKET_CLOSE
       PUNC_EQ IDENT PUNC_SEMI
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
(([x, y,] = z));
````

Produces same AST