# Tenko parser test case

- Path: tests/testcases/group_or_arrow/arrow/directives_for_arrows/eval/eval_as_parenless_async_arrow_arg_name_without_directive.md

> :: group or arrow : arrow : directives for arrows : eval
>
> ::> eval as parenless async arrow arg name without directive

## Input

`````js
async eval => {}
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
  loc:{start:{line:1,column:0},end:{line:1,column:16},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:16},source:''},
      expression: {
        type: 'ArrowFunctionExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:16},source:''},
        params: [
          {
            type: 'Identifier',
            loc:{start:{line:1,column:6},end:{line:1,column:10},source:''},
            name: 'eval'
          }
        ],
        id: null,
        generator: false,
        async: true,
        expression: false,
        body: {
          type: 'BlockStatement',
          loc:{start:{line:1,column:14},end:{line:1,column:16},source:''},
          body: []
        }
      }
    }
  ]
}

tokens (7x):
       ID_async ID_eval PUNC_EQ_GT PUNC_CURLY_OPEN PUNC_CURLY_CLOSE
       ASI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use this name (eval) as a variable name because: Cannot create a binding named `eval` in strict mode

async eval => {}
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
async eval => {};
````

Produces same AST
