# Tenko parser test case

- Path: tests/testcases/templates/block_wrapped_2-part_template_to_check_disambiguation.md

> :: templates
>
> ::> block wrapped 2-part template to check disambiguation

## Input

`````js
{`foo ${a} baz`}
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
      type: 'BlockStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:16},source:''},
      body: [
        {
          type: 'ExpressionStatement',
          loc:{start:{line:1,column:1},end:{line:1,column:15},source:''},
          expression: {
            type: 'TemplateLiteral',
            loc:{start:{line:1,column:1},end:{line:1,column:15},source:''},
            expressions: [
              {
                type: 'Identifier',
                loc:{start:{line:1,column:8},end:{line:1,column:9},source:''},
                name: 'a'
              }
            ],
            quasis: [
              {
                type: 'TemplateElement',
                loc:{start:{line:1,column:2},end:{line:1,column:6},source:''},
                tail: false,
                value: { raw: 'foo ', cooked: 'foo ' }
              },
              {
                type: 'TemplateElement',
                loc:{start:{line:1,column:10},end:{line:1,column:14},source:''},
                tail: true,
                value: { raw: ' baz', cooked: ' baz' }
              }
            ]
          }
        }
      ]
    }
  ]
}

tokens (7x):
       PUNC_CURLY_OPEN TICK_HEAD IDENT TICK_TAIL ASI PUNC_CURLY_CLOSE
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
{`foo ${a} baz`;}
````

Produces same AST
