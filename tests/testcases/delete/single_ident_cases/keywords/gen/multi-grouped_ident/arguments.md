# Tenko parser autogenerated test case

- From: tests/testcases/delete/single_ident_cases/keywords/autogen.md
- Path: tests/testcases/delete/single_ident_cases/keywords/gen/multi-grouped_ident/arguments.md

> :: delete : single ident cases : keywords : gen : multi-grouped ident
>
> ::> arguments

## Input


`````js
delete (((arguments)))
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
  loc:{start:{line:1,column:0},end:{line:1,column:22},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:22},source:''},
      expression: {
        type: 'UnaryExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:22},source:''},
        operator: 'delete',
        prefix: true,
        argument: {
          type: 'Identifier',
          loc:{start:{line:1,column:10},end:{line:1,column:19},source:''},
          name: 'arguments'
        }
      }
    }
  ]
}

tokens (10x):
       ID_delete PUNC_PAREN_OPEN PUNC_PAREN_OPEN PUNC_PAREN_OPEN
       ID_arguments PUNC_PAREN_CLOSE PUNC_PAREN_CLOSE PUNC_PAREN_CLOSE
       ASI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Bad delete case, can not delete an ident wrapped in parens (at EOF)

delete (((arguments)))
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
(delete (arguments));
````

Produces same AST