# Tenko parser autogenerated test case

- From: tests/testcases/strict_mode/header_requirements_for_directive_in_body/func_decl/autogen.md
- Path: tests/testcases/strict_mode/header_requirements_for_directive_in_body/func_decl/gen/arrow_assigned_to_in_param_default_wx002fo_directive/public.md

> :: strict mode : header requirements for directive in body : func decl : gen : arrow assigned to in param default wx002fo directive
>
> ::> public

## Input


`````js
(x=public=10) => { }
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
        type: 'ArrowFunctionExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:20},source:''},
        params: [
          {
            type: 'AssignmentPattern',
            loc:{start:{line:1,column:1},end:{line:1,column:12},source:''},
            left: {
              type: 'Identifier',
              loc:{start:{line:1,column:1},end:{line:1,column:2},source:''},
              name: 'x'
            },
            right: {
              type: 'AssignmentExpression',
              loc:{start:{line:1,column:3},end:{line:1,column:12},source:''},
              left: {
                type: 'Identifier',
                loc:{start:{line:1,column:3},end:{line:1,column:9},source:''},
                name: 'public'
              },
              operator: '=',
              right: {
                type: 'Literal',
                loc:{start:{line:1,column:10},end:{line:1,column:12},source:''},
                value: 10,
                raw: '10'
              }
            }
          }
        ],
        id: null,
        generator: false,
        async: false,
        expression: false,
        body: {
          type: 'BlockStatement',
          loc:{start:{line:1,column:17},end:{line:1,column:20},source:''},
          body: []
        }
      }
    }
  ]
}

tokens (12x):
       PUNC_PAREN_OPEN IDENT PUNC_EQ ID_public PUNC_EQ NUMBER_DEC
       PUNC_PAREN_CLOSE PUNC_EQ_GT PUNC_CURLY_OPEN PUNC_CURLY_CLOSE
       ASI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use this name (public) as a variable name because: Cannot use this reserved word as a variable name in strict mode

(x=public=10) => { }
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
(x = (public = 10)) => {};
````

Produces same AST