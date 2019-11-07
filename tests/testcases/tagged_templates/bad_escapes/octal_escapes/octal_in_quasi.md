# Tenko parser test case

- Path: tests/testcases/tagged_templates/bad_escapes/octal_escapes/octal_in_quasi.md

> :: tagged templates : bad escapes : octal escapes
>
> ::> octal in quasi

## Input

`````js
tag`${'\07'}`;
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Lexer error!
    Octal escapes are only allowed in sloppy mode with web compat enabled

tag`${'\07'}`;
      ^------- error
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Lexer error!
    Illegal legacy octal escape in strict mode

tag`${'\07'}`;
      ^------- error
`````


### Module goal

Parsed with the module goal.

_Output same as strict mode._

### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

`````
ast: {
  type: 'Program',
  loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
      expression: {
        type: 'TaggedTemplateExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:13},source:''},
        tag: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:3},source:''},
          name: 'tag'
        },
        quasi: {
          type: 'TemplateLiteral',
          loc:{start:{line:1,column:3},end:{line:1,column:13},source:''},
          expressions: [
            {
              type: 'Literal',
              loc:{start:{line:1,column:6},end:{line:1,column:11},source:''},
              value: '\u0007',
              raw: "'\\07'"
            }
          ],
          quasis: [
            {
              type: 'TemplateElement',
              loc:{start:{line:1,column:4},end:{line:1,column:4},source:''},
              tail: false,
              value: { raw: '', cooked: '' }
            },
            {
              type: 'TemplateElement',
              loc:{start:{line:1,column:12},end:{line:1,column:12},source:''},
              tail: true,
              value: { raw: '', cooked: '' }
            }
          ]
        }
      }
    }
  ]
}

tokens (6x):
       IDENT TICK_HEAD STRING_SINGLE TICK_TAIL PUNC_SEMI
`````


## AST Printer

Printer output different from input [web]:

````js
(tag)`${'\07'}`;
````

Produces same AST