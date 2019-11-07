# Tenko parser test case

- Path: tests/testcases/yield/yield_in_group_in_param_default/group_yield_assign.md

> :: yield : yield in group in param default
>
> ::> group yield assign
>
> https://tc39.github.io/ecma262/#sec-arrow-function-definitions-static-semantics-early-errors
>
> > It is a Syntax Error if ArrowParameters Contains YieldExpression is true.
>
> The arrow parens inherit the generator state from the parent scope (unlike regular funcs, who reset it)

## Input

`````js
(x=(yield)=y)
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
  loc:{start:{line:1,column:0},end:{line:1,column:13},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:13},source:''},
      expression: {
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:1},end:{line:1,column:12},source:''},
        left: {
          type: 'Identifier',
          loc:{start:{line:1,column:1},end:{line:1,column:2},source:''},
          name: 'x'
        },
        operator: '=',
        right: {
          type: 'AssignmentExpression',
          loc:{start:{line:1,column:3},end:{line:1,column:12},source:''},
          left: {
            type: 'Identifier',
            loc:{start:{line:1,column:4},end:{line:1,column:9},source:''},
            name: 'yield'
          },
          operator: '=',
          right: {
            type: 'Identifier',
            loc:{start:{line:1,column:11},end:{line:1,column:12},source:''},
            name: 'y'
          }
        }
      }
    }
  ]
}

tokens (11x):
       PUNC_PAREN_OPEN IDENT PUNC_EQ PUNC_PAREN_OPEN ID_yield
       PUNC_PAREN_CLOSE PUNC_EQ IDENT PUNC_PAREN_CLOSE ASI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use `yield` outside of generator functions when in strict mode

(x=(yield)=y)
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
((x = (yield = y)));
````

Produces same AST