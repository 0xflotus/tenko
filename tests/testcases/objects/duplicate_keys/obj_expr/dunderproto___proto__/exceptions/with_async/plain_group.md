# Tenko parser test case

- Path: tests/testcases/objects/duplicate_keys/obj_expr/dunderproto___proto__/exceptions/with_async/plain_group.md

> :: objects : duplicate keys : obj expr : dunderproto proto : exceptions : with async
>
> ::> plain group
>
> https://tc39.github.io/ecma262/#sec-__proto__-property-names-in-object-initializers
>
> When ObjectLiteral appears in a context where ObjectAssignmentPattern is required the Early Error rule is not applied.
>
> In addition, it is not applied when initially parsing a CoverParenthesizedExpressionAndArrowParameterList or a CoverCallExpressionAndAsyncArrowHead.

## Input

`````js
async ({__proto__: a, __proto__: b});
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
  loc:{start:{line:1,column:0},end:{line:1,column:37},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:37},source:''},
      expression: {
        type: 'CallExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:36},source:''},
        callee: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:5},source:''},
          name: 'async'
        },
        arguments: [
          {
            type: 'ObjectExpression',
            loc:{start:{line:1,column:7},end:{line:1,column:35},source:''},
            properties: [
              {
                type: 'Property',
                loc:{start:{line:1,column:8},end:{line:1,column:20},source:''},
                key: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:8},end:{line:1,column:17},source:''},
                  name: '__proto__'
                },
                kind: 'init',
                method: false,
                computed: false,
                value: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:19},end:{line:1,column:20},source:''},
                  name: 'a'
                },
                shorthand: false
              },
              {
                type: 'Property',
                loc:{start:{line:1,column:22},end:{line:1,column:34},source:''},
                key: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:22},end:{line:1,column:31},source:''},
                  name: '__proto__'
                },
                kind: 'init',
                method: false,
                computed: false,
                value: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:33},end:{line:1,column:34},source:''},
                  name: 'b'
                },
                shorthand: false
              }
            ]
          }
        ]
      }
    }
  ]
}

tokens (14x):
       ID_async PUNC_PAREN_OPEN PUNC_CURLY_OPEN IDENT PUNC_COLON IDENT
       PUNC_COMMA IDENT PUNC_COLON IDENT PUNC_CURLY_CLOSE
       PUNC_PAREN_CLOSE PUNC_SEMI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

_Output same as sloppy mode._

### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

`````
throws: Parser error!
  Group contained a value that must destruct but this was not an arrow so it is invalid

async ({__proto__: a, __proto__: b});
                                    ^------- error
`````


## AST Printer

Printer output different from input [sloppy]:

````js
(async({__proto__:a, __proto__:b}));
````

Produces same AST