# Tenko parser test case

- Path: tests/testcases/group_or_arrow/group/assignment_inside_pattern.md

> :: group or arrow : group
>
> ::> assignment inside pattern
>
> THIS IS IMPORTANT! The inner `targetKey(a=b)` part is NOT a pattern in the AST
>
> The whole thing is an assignment pattern because `target()[...]` is a member expression...
>
> This test should PASS

## Input

`````js
([target()[targetKey(a=b)]] = x);
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
  loc:{start:{line:1,column:0},end:{line:1,column:33},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:33},source:''},
      expression: {
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:1},end:{line:1,column:31},source:''},
        left: {
          type: 'ArrayPattern',
          loc:{start:{line:1,column:1},end:{line:1,column:27},source:''},
          elements: [
            {
              type: 'MemberExpression',
              loc:{start:{line:1,column:2},end:{line:1,column:26},source:''},
              object: {
                type: 'CallExpression',
                loc:{start:{line:1,column:2},end:{line:1,column:10},source:''},
                callee: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:2},end:{line:1,column:8},source:''},
                  name: 'target'
                },
                arguments: []
              },
              property: {
                type: 'CallExpression',
                loc:{start:{line:1,column:11},end:{line:1,column:25},source:''},
                callee: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:11},end:{line:1,column:20},source:''},
                  name: 'targetKey'
                },
                arguments: [
                  {
                    type: 'AssignmentExpression',
                    loc:{start:{line:1,column:21},end:{line:1,column:24},source:''},
                    left: {
                      type: 'Identifier',
                      loc:{start:{line:1,column:21},end:{line:1,column:22},source:''},
                      name: 'a'
                    },
                    operator: '=',
                    right: {
                      type: 'Identifier',
                      loc:{start:{line:1,column:23},end:{line:1,column:24},source:''},
                      name: 'b'
                    }
                  }
                ]
              },
              computed: true
            }
          ]
        },
        operator: '=',
        right: {
          type: 'Identifier',
          loc:{start:{line:1,column:30},end:{line:1,column:31},source:''},
          name: 'x'
        }
      }
    }
  ]
}

tokens (19x):
       PUNC_PAREN_OPEN PUNC_BRACKET_OPEN ID_target PUNC_PAREN_OPEN
       PUNC_PAREN_CLOSE PUNC_BRACKET_OPEN IDENT PUNC_PAREN_OPEN IDENT
       PUNC_EQ IDENT PUNC_PAREN_CLOSE PUNC_BRACKET_CLOSE
       PUNC_BRACKET_CLOSE PUNC_EQ IDENT PUNC_PAREN_CLOSE PUNC_SEMI
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
(([((target)())[(targetKey)((a = b))],] = x));
````

Produces same AST