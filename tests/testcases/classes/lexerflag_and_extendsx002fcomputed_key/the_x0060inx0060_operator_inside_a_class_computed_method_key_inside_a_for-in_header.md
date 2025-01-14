# Tenko parser test case

- Path: tests/testcases/classes/lexerflag_and_extendsx002fcomputed_key/the_x0060inx0060_operator_inside_a_class_computed_method_key_inside_a_for-in_header.md

> :: classes : lexerflag and extendsx002fcomputed key
>
> ::> the x0060inx0060 operator inside a class computed method key inside a for-in header
>
> confirm that the outer flag is passed on but the FOR_IN lexer flag is reset

## Input

`````js
for (class x { [a in b](){} }.x in c);
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
  loc:{start:{line:1,column:0},end:{line:1,column:38},source:''},
  body: [
    {
      type: 'ForInStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:38},source:''},
      left: {
        type: 'MemberExpression',
        loc:{start:{line:1,column:5},end:{line:1,column:31},source:''},
        object: {
          type: 'ClassExpression',
          loc:{start:{line:1,column:5},end:{line:1,column:29},source:''},
          id: {
            type: 'Identifier',
            loc:{start:{line:1,column:11},end:{line:1,column:12},source:''},
            name: 'x'
          },
          superClass: null,
          body: {
            type: 'ClassBody',
            loc:{start:{line:1,column:13},end:{line:1,column:29},source:''},
            body: [
              {
                type: 'MethodDefinition',
                loc:{start:{line:1,column:15},end:{line:1,column:27},source:''},
                key: {
                  type: 'BinaryExpression',
                  loc:{start:{line:1,column:16},end:{line:1,column:22},source:''},
                  left: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:16},end:{line:1,column:17},source:''},
                    name: 'a'
                  },
                  operator: 'in',
                  right: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:21},end:{line:1,column:22},source:''},
                    name: 'b'
                  }
                },
                static: false,
                computed: true,
                kind: 'method',
                value: {
                  type: 'FunctionExpression',
                  loc:{start:{line:1,column:15},end:{line:1,column:27},source:''},
                  generator: false,
                  async: false,
                  id: null,
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    loc:{start:{line:1,column:25},end:{line:1,column:27},source:''},
                    body: []
                  }
                }
              }
            ]
          }
        },
        property: {
          type: 'Identifier',
          loc:{start:{line:1,column:30},end:{line:1,column:31},source:''},
          name: 'x'
        },
        computed: false
      },
      right: {
        type: 'Identifier',
        loc:{start:{line:1,column:35},end:{line:1,column:36},source:''},
        name: 'c'
      },
      body: {
        type: 'EmptyStatement',
        loc:{start:{line:1,column:37},end:{line:1,column:38},source:''}
      }
    }
  ]
}

tokens (22x):
       ID_for PUNC_PAREN_OPEN ID_class IDENT PUNC_CURLY_OPEN
       PUNC_BRACKET_OPEN IDENT ID_in IDENT PUNC_BRACKET_CLOSE
       PUNC_PAREN_OPEN PUNC_PAREN_CLOSE PUNC_CURLY_OPEN
       PUNC_CURLY_CLOSE PUNC_CURLY_CLOSE PUNC_DOT IDENT ID_in IDENT
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

_Output same as sloppy mode._

## AST Printer

Printer output different from input [sloppy]:

````js
for (((class x{[((a) in (b))](){};}).x) in c) ;
````

Produces same AST
