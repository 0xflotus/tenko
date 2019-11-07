# Tenko parser test case

- Path: tests/testcases/mixed_arrayx002fobject_destructuring/inside_must_destruct_outside_cant.md

> :: mixed arrayx002fobject destructuring
>
> ::> inside must destruct outside cant
>
> shorthand prop can only appear in Pattern, rest arg can only be an ident, this tests proper nesting

## Input

`````js
[...{a = b} = c];
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
        type: 'ArrayExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:16},source:''},
        elements: [
          {
            type: 'SpreadElement',
            loc:{start:{line:1,column:1},end:{line:1,column:15},source:''},
            argument: {
              type: 'AssignmentExpression',
              loc:{start:{line:1,column:4},end:{line:1,column:15},source:''},
              left: {
                type: 'ObjectPattern',
                loc:{start:{line:1,column:4},end:{line:1,column:11},source:''},
                properties: [
                  {
                    type: 'Property',
                    loc:{start:{line:1,column:5},end:{line:1,column:10},source:''},
                    key: {
                      type: 'Identifier',
                      loc:{start:{line:1,column:5},end:{line:1,column:6},source:''},
                      name: 'a'
                    },
                    kind: 'init',
                    method: false,
                    computed: false,
                    value: {
                      type: 'AssignmentPattern',
                      loc:{start:{line:1,column:5},end:{line:1,column:10},source:''},
                      left: {
                        type: 'Identifier',
                        loc:{start:{line:1,column:5},end:{line:1,column:6},source:''},
                        name: 'a'
                      },
                      right: {
                        type: 'Identifier',
                        loc:{start:{line:1,column:9},end:{line:1,column:10},source:''},
                        name: 'b'
                      }
                    },
                    shorthand: true
                  }
                ]
              },
              operator: '=',
              right: {
                type: 'Identifier',
                loc:{start:{line:1,column:14},end:{line:1,column:15},source:''},
                name: 'c'
              }
            }
          }
        ]
      }
    }
  ]
}

tokens (12x):
       PUNC_BRACKET_OPEN PUNC_DOT_DOT_DOT PUNC_CURLY_OPEN IDENT
       PUNC_EQ IDENT PUNC_CURLY_CLOSE PUNC_EQ IDENT PUNC_BRACKET_CLOSE
       PUNC_SEMI
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
([...({a = b} = c),]);
````

Produces same AST