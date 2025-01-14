# Tenko parser test case

- Path: tests/testcases/templates/bad_escapes/in_pure/only_okay_in_tagged_templates_in_es9/illegal_escapes_in_ticks_are_okay_in_es9.md

> :: templates : bad escapes : in pure : only okay in tagged templates in es9
>
> ::> illegal escapes in ticks are okay in es9

## Input

- `es = 9`

`````js
f`\xg`;
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
  loc:{start:{line:1,column:0},end:{line:1,column:7},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:7},source:''},
      expression: {
        type: 'TaggedTemplateExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:6},source:''},
        tag: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:1},source:''},
          name: 'f'
        },
        quasi: {
          type: 'TemplateLiteral',
          loc:{start:{line:1,column:1},end:{line:1,column:6},source:''},
          expressions: [],
          quasis: [
            {
              type: 'TemplateElement',
              loc:{start:{line:1,column:2},end:{line:1,column:5},source:''},
              tail: true,
              value: { raw: '\\xg', cooked: null }
            }
          ]
        }
      }
    }
  ]
}

tokens (4x):
       IDENT TICK_BAD_PURE PUNC_SEMI
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
(f)`\xg`;
````

Produces same AST
