# Tenko parser autogenerated test case

- From: tests/testcases/assigns/assigning_to_keyword/autogen.md
- Path: tests/testcases/assigns/assigning_to_keyword/gen/assign_to_paren-wrapped_keyword_in_param_default/private.md

> :: assigns : assigning to keyword : gen : assign to paren-wrapped keyword in param default
>
> ::> private

## Input


`````js
async (x = (private) = f) => {}
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
  loc:{start:{line:1,column:0},end:{line:1,column:31},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:31},source:''},
      expression: {
        type: 'ArrowFunctionExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:31},source:''},
        params: [
          {
            type: 'AssignmentPattern',
            loc:{start:{line:1,column:7},end:{line:1,column:24},source:''},
            left: {
              type: 'Identifier',
              loc:{start:{line:1,column:7},end:{line:1,column:8},source:''},
              name: 'x'
            },
            right: {
              type: 'AssignmentExpression',
              loc:{start:{line:1,column:11},end:{line:1,column:24},source:''},
              left: {
                type: 'Identifier',
                loc:{start:{line:1,column:12},end:{line:1,column:19},source:''},
                name: 'private'
              },
              operator: '=',
              right: {
                type: 'Identifier',
                loc:{start:{line:1,column:23},end:{line:1,column:24},source:''},
                name: 'f'
              }
            }
          }
        ],
        id: null,
        generator: false,
        async: true,
        expression: false,
        body: {
          type: 'BlockStatement',
          loc:{start:{line:1,column:29},end:{line:1,column:31},source:''},
          body: []
        }
      }
    }
  ]
}

tokens (15x):
       ID_async PUNC_PAREN_OPEN IDENT PUNC_EQ PUNC_PAREN_OPEN
       ID_private PUNC_PAREN_CLOSE PUNC_EQ IDENT PUNC_PAREN_CLOSE
       PUNC_EQ_GT PUNC_CURLY_OPEN PUNC_CURLY_CLOSE ASI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use this name (private) as a variable name because: Cannot use this reserved word as a variable name in strict mode

async (x = (private) = f) => {}
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
async (x = (private = f)) => {};
````

Produces same AST
