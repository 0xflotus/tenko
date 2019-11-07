# Tenko parser test case

- Path: tests/testcases/templates/class_quasi.md

> :: templates
>
> ::> class quasi
>
> This tests whether or not the `}` that is part of the template is properly parsed after a class expression.

## PASS

## Input

`````js
`${class x{}}`
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
  loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
      expression: {
        type: 'TemplateLiteral',
        loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
        expressions: [
          {
            type: 'ClassExpression',
            loc:{start:{line:1,column:3},end:{line:1,column:12},source:''},
            id: {
              type: 'Identifier',
              loc:{start:{line:1,column:9},end:{line:1,column:10},source:''},
              name: 'x'
            },
            superClass: null,
            body: {
              type: 'ClassBody',
              loc:{start:{line:1,column:10},end:{line:1,column:12},source:''},
              body: []
            }
          }
        ],
        quasis: [
          {
            type: 'TemplateElement',
            loc:{start:{line:1,column:1},end:{line:1,column:1},source:''},
            tail: false,
            value: { raw: '', cooked: '' }
          },
          {
            type: 'TemplateElement',
            loc:{start:{line:1,column:13},end:{line:1,column:13},source:''},
            tail: true,
            value: { raw: '', cooked: '' }
          }
        ]
      }
    }
  ]
}

tokens (8x):
       TICK_HEAD ID_class IDENT PUNC_CURLY_OPEN PUNC_CURLY_CLOSE
       TICK_TAIL ASI
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
`${class x{}}`;
````

Produces same AST