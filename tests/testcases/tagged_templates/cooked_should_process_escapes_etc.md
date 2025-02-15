# Tenko parser test case

- Path: tests/testcases/tagged_templates/cooked_should_process_escapes_etc.md

> :: tagged templates
>
> ::> cooked should process escapes etc

## Input

`````js
foo`H\x45Y`
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
  loc:{start:{line:1,column:0},end:{line:1,column:11},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:11},source:''},
      expression: {
        type: 'TaggedTemplateExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:11},source:''},
        tag: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:3},source:''},
          name: 'foo'
        },
        quasi: {
          type: 'TemplateLiteral',
          loc:{start:{line:1,column:3},end:{line:1,column:11},source:''},
          expressions: [],
          quasis: [
            {
              type: 'TemplateElement',
              loc:{start:{line:1,column:4},end:{line:1,column:10},source:''},
              tail: true,
              value: { raw: 'H\\x45Y', cooked: 'HEY' }
            }
          ]
        }
      }
    }
  ]
}

tokens (4x):
       IDENT TICK_PURE ASI
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
(foo)`H\x45Y`;
````

Produces same AST
