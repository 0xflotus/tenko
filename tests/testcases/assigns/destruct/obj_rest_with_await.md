# Tenko parser test case

- Path: tests/testcases/assigns/destruct/obj_rest_with_await.md

> :: assigns : destruct
>
> ::> obj rest with await

## Input

`````js
({...await} = obj)
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
  loc:{start:{line:1,column:0},end:{line:1,column:18},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:18},source:''},
      expression: {
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:1},end:{line:1,column:17},source:''},
        left: {
          type: 'ObjectPattern',
          loc:{start:{line:1,column:1},end:{line:1,column:11},source:''},
          properties: [
            {
              type: 'RestElement',
              loc:{start:{line:1,column:2},end:{line:1,column:10},source:''},
              argument: {
                type: 'Identifier',
                loc:{start:{line:1,column:5},end:{line:1,column:10},source:''},
                name: 'await'
              }
            }
          ]
        },
        operator: '=',
        right: {
          type: 'Identifier',
          loc:{start:{line:1,column:14},end:{line:1,column:17},source:''},
          name: 'obj'
        }
      }
    }
  ]
}

tokens (10x):
       PUNC_PAREN_OPEN PUNC_CURLY_OPEN PUNC_DOT_DOT_DOT ID_await
       PUNC_CURLY_CLOSE PUNC_EQ IDENT PUNC_PAREN_CLOSE ASI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

`````
throws: Parser error!
  Cannot use `await` as var when goal=module but found `await` outside an async function

({...await} = obj)
          ^------- error
`````


### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [sloppy]:

````js
(({...await} = obj));
````

Produces same AST