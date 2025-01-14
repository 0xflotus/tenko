# Tenko parser test case

- Path: tests/testcases/templates/template_quasi_can_have_comma.md

> :: templates
>
> ::> template quasi can have comma
>
> By fuzzer, zeparser only


## Input

`````js
`${y,0}`
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
  loc:{start:{line:1,column:0},end:{line:1,column:8},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:8},source:''},
      expression: {
        type: 'TemplateLiteral',
        loc:{start:{line:1,column:0},end:{line:1,column:8},source:''},
        expressions: [
          {
            type: 'SequenceExpression',
            loc:{start:{line:1,column:3},end:{line:1,column:6},source:''},
            expressions: [
              {
                type: 'Identifier',
                loc:{start:{line:1,column:3},end:{line:1,column:4},source:''},
                name: 'y'
              },
              {
                type: 'Literal',
                loc:{start:{line:1,column:5},end:{line:1,column:6},source:''},
                value: 0,
                raw: '0'
              }
            ]
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
            loc:{start:{line:1,column:7},end:{line:1,column:7},source:''},
            tail: true,
            value: { raw: '', cooked: '' }
          }
        ]
      }
    }
  ]
}

tokens (7x):
       TICK_HEAD IDENT PUNC_COMMA NUMBER_DEC TICK_TAIL ASI
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
`${(y, 0)}`;
````

Produces same AST
