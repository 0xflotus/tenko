# Tenko parser autogenerated test case

- From: tests/testcases/objects/literals/keywords_in_object_shorthand/autogen.md
- Path: tests/testcases/objects/literals/keywords_in_object_shorthand/gen/cannot_use_as_binding_destruct/public.md

> :: objects : literals : keywords in object shorthand : gen : cannot use as binding destruct
>
> ::> public

## Input


`````js
const {public} = x;
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
  loc:{start:{line:1,column:0},end:{line:1,column:19},source:''},
  body: [
    {
      type: 'VariableDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:19},source:''},
      kind: 'const',
      declarations: [
        {
          type: 'VariableDeclarator',
          loc:{start:{line:1,column:6},end:{line:1,column:18},source:''},
          id: {
            type: 'ObjectPattern',
            loc:{start:{line:1,column:6},end:{line:1,column:14},source:''},
            properties: [
              {
                type: 'Property',
                loc:{start:{line:1,column:7},end:{line:1,column:13},source:''},
                key: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:7},end:{line:1,column:13},source:''},
                  name: 'public'
                },
                kind: 'init',
                method: false,
                computed: false,
                value: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:7},end:{line:1,column:13},source:''},
                  name: 'public'
                },
                shorthand: true
              }
            ]
          },
          init: {
            type: 'Identifier',
            loc:{start:{line:1,column:17},end:{line:1,column:18},source:''},
            name: 'x'
          }
        }
      ]
    }
  ]
}

tokens (8x):
       ID_const PUNC_CURLY_OPEN ID_public PUNC_CURLY_CLOSE PUNC_EQ
       IDENT PUNC_SEMI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use this name (public) as a variable name because: Cannot use this reserved word as a variable name in strict mode

const {public} = x;
             ^------- error
`````


### Module goal

Parsed with the module goal.

_Output same as strict mode._

### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output was same as input [sloppy]