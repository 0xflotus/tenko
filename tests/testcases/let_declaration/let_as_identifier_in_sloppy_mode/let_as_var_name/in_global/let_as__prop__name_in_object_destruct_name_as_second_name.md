# Tenko parser test case

- Path: tests/testcases/let_declaration/let_as_identifier_in_sloppy_mode/let_as_var_name/in_global/let_as__prop__name_in_object_destruct_name_as_second_name.md

> :: let declaration : let as identifier in sloppy mode : let as var name : in global
>
> ::> let as prop name in object destruct name as second name
>
> See section E: https://tc39.github.io/ecma262/#sec-additions-and-changes-that-introduce-incompatibilities-with-prior-editions
>
> > 13.2: In ECMAScript 2015, a StatementList beginning with the token let followed by the input elements LineTerminator then Identifier is the start of a LexicalDeclaration. In previous editions, automatic semicolon insertion would always insert a semicolon before the Identifier input element.
>
> > 13.5: In ECMAScript 2015, a StatementListItem beginning with the token let followed by the token [ is the start of a LexicalDeclaration. In previous editions such a sequence would be the start of an ExpressionStatement.
>
> > 13.7: In ECMAScript 2015, if the ( token of a for statement is immediately followed by the token sequence let [ then the let is treated as the start of a LexicalDeclaration. In previous editions such a token sequence would be the start of an Expression.
>
> > 13.7: In ECMAScript 2015, if the ( token of a for-in statement is immediately followed by the token sequence let [ then the let is treated as the start of a ForDeclaration. In previous editions such a token sequence would be the start of an LeftHandSideExpression.
>
> (note: the spec doesn't explicitly allow `let` as a var name but rather forbids it under certain situations. For example: in strict mode and as let/const names)

## Input

`````js
let {a, let: foo} = x;
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
  loc:{start:{line:1,column:0},end:{line:1,column:22},source:''},
  body: [
    {
      type: 'VariableDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:22},source:''},
      kind: 'let',
      declarations: [
        {
          type: 'VariableDeclarator',
          loc:{start:{line:1,column:4},end:{line:1,column:21},source:''},
          id: {
            type: 'ObjectPattern',
            loc:{start:{line:1,column:4},end:{line:1,column:17},source:''},
            properties: [
              {
                type: 'Property',
                loc:{start:{line:1,column:5},end:{line:1,column:6},source:''},
                key: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:5},end:{line:1,column:6},source:''},
                  name: 'a'
                },
                kind: 'init',
                method: false,
                computed: false,
                value: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:5},end:{line:1,column:6},source:''},
                  name: 'a'
                },
                shorthand: true
              },
              {
                type: 'Property',
                loc:{start:{line:1,column:8},end:{line:1,column:16},source:''},
                key: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:8},end:{line:1,column:11},source:''},
                  name: 'let'
                },
                kind: 'init',
                method: false,
                computed: false,
                value: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:13},end:{line:1,column:16},source:''},
                  name: 'foo'
                },
                shorthand: false
              }
            ]
          },
          init: {
            type: 'Identifier',
            loc:{start:{line:1,column:20},end:{line:1,column:21},source:''},
            name: 'x'
          }
        }
      ]
    }
  ]
}

tokens (12x):
       ID_let PUNC_CURLY_OPEN IDENT PUNC_COMMA ID_let PUNC_COLON IDENT
       PUNC_CURLY_CLOSE PUNC_EQ IDENT PUNC_SEMI
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
let {a, let:foo} = x;
````

Produces same AST
