# Tenko parser test case

- Path: tests/testcases/group_or_arrow/group/regression_full.md

> :: group or arrow : group
>
> ::> regression full

## Input

`````js
([target()[targetKey()]] = x);
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
  loc:{start:{line:1,column:0},end:{line:1,column:30},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:30},source:''},
      expression: {
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:1},end:{line:1,column:28},source:''},
        left: {
          type: 'ArrayPattern',
          loc:{start:{line:1,column:1},end:{line:1,column:24},source:''},
          elements: [
            {
              type: 'MemberExpression',
              loc:{start:{line:1,column:2},end:{line:1,column:23},source:''},
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
                loc:{start:{line:1,column:11},end:{line:1,column:22},source:''},
                callee: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:11},end:{line:1,column:20},source:''},
                  name: 'targetKey'
                },
                arguments: []
              },
              computed: true
            }
          ]
        },
        operator: '=',
        right: {
          type: 'Identifier',
          loc:{start:{line:1,column:27},end:{line:1,column:28},source:''},
          name: 'x'
        }
      }
    }
  ]
}

tokens (16x):
       PUNC_PAREN_OPEN PUNC_BRACKET_OPEN ID_target PUNC_PAREN_OPEN
       PUNC_PAREN_CLOSE PUNC_BRACKET_OPEN IDENT PUNC_PAREN_OPEN
       PUNC_PAREN_CLOSE PUNC_BRACKET_CLOSE PUNC_BRACKET_CLOSE PUNC_EQ
       IDENT PUNC_PAREN_CLOSE PUNC_SEMI
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
(([((target)())[(targetKey)()],] = x));
````

Produces same AST
