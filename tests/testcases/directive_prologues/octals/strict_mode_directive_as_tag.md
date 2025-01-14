# Tenko parser test case

- Path: tests/testcases/directive_prologues/octals/strict_mode_directive_as_tag.md

> :: directive prologues : octals
>
> ::> strict mode directive as tag
>
> Octal escapes in templates are always illegal so this special strict mode edge case does not even apply
>
> This is actually a "tagged template", albeit a strange one. However, this is a runtime error so it parses fine.
>
> Consider foo`\8` in "use strict"`\8`. In this case the string is not a directive and as such the escape is not a syntax error because tagged templates are allowed to have illegal escapes. (The strict mode flag is even irrelevant here)
>
> This should pass because it's a tagged template, strict mode is irrelevant

## PASS

## Input

`````js
function f() {
  "use strict"
  ` \8 `
}
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
  loc:{start:{line:1,column:0},end:{line:4,column:1},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:4,column:1},source:''},
      generator: false,
      async: false,
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:9},end:{line:1,column:10},source:''},
        name: 'f'
      },
      params: [],
      body: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:13},end:{line:4,column:1},source:''},
        body: [
          {
            type: 'ExpressionStatement',
            loc:{start:{line:2,column:2},end:{line:3,column:8},source:''},
            expression: {
              type: 'TaggedTemplateExpression',
              loc:{start:{line:2,column:2},end:{line:3,column:8},source:''},
              tag: {
                type: 'Literal',
                loc:{start:{line:2,column:2},end:{line:2,column:14},source:''},
                value: 'use strict',
                raw: '"use strict"'
              },
              quasi: {
                type: 'TemplateLiteral',
                loc:{start:{line:3,column:2},end:{line:3,column:8},source:''},
                expressions: [],
                quasis: [
                  {
                    type: 'TemplateElement',
                    loc:{start:{line:3,column:3},end:{line:3,column:7},source:''},
                    tail: true,
                    value: { raw: ' \\8 ', cooked: null }
                  }
                ]
              }
            }
          }
        ]
      }
    }
  ]
}

tokens (10x):
       ID_function IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN STRING_DOUBLE TICK_BAD_PURE ASI
       PUNC_CURLY_CLOSE
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
function f() {("use strict")` \8 `;}
````

Produces same AST
