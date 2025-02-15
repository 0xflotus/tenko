# Tenko parser test case

- Path: tests/testcases/objects/destructuring/destruct_assignment_when_value_is_property_of_arrlit.md

> :: objects : destructuring
>
> ::> destruct assignment when value is property of arrlit

## Input

`````js
({"foo": [x].foo}=y)
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
  loc:{start:{line:1,column:0},end:{line:1,column:20},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:20},source:''},
      expression: {
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:1},end:{line:1,column:19},source:''},
        left: {
          type: 'ObjectPattern',
          loc:{start:{line:1,column:1},end:{line:1,column:17},source:''},
          properties: [
            {
              type: 'Property',
              loc:{start:{line:1,column:2},end:{line:1,column:16},source:''},
              key: {
                type: 'Literal',
                loc:{start:{line:1,column:2},end:{line:1,column:7},source:''},
                value: 'foo',
                raw: '"foo"'
              },
              kind: 'init',
              method: false,
              computed: false,
              value: {
                type: 'MemberExpression',
                loc:{start:{line:1,column:9},end:{line:1,column:16},source:''},
                object: {
                  type: 'ArrayExpression',
                  loc:{start:{line:1,column:9},end:{line:1,column:12},source:''},
                  elements: [
                    {
                      type: 'Identifier',
                      loc:{start:{line:1,column:10},end:{line:1,column:11},source:''},
                      name: 'x'
                    }
                  ]
                },
                property: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:13},end:{line:1,column:16},source:''},
                  name: 'foo'
                },
                computed: false
              },
              shorthand: false
            }
          ]
        },
        operator: '=',
        right: {
          type: 'Identifier',
          loc:{start:{line:1,column:18},end:{line:1,column:19},source:''},
          name: 'y'
        }
      }
    }
  ]
}

tokens (15x):
       PUNC_PAREN_OPEN PUNC_CURLY_OPEN STRING_DOUBLE PUNC_COLON
       PUNC_BRACKET_OPEN IDENT PUNC_BRACKET_CLOSE PUNC_DOT IDENT
       PUNC_CURLY_CLOSE PUNC_EQ IDENT PUNC_PAREN_CLOSE ASI
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
(({"foo":[x,].foo} = y));
````

Produces same AST
