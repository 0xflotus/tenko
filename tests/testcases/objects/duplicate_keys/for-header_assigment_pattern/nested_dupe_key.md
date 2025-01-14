# Tenko parser test case

- Path: tests/testcases/objects/duplicate_keys/for-header_assigment_pattern/nested_dupe_key.md

> :: objects : duplicate keys : for-header assigment pattern
>
> ::> nested dupe key

## Input

`````js
for ({a: x, c: {b: x}} in obj);
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
  loc:{start:{line:1,column:0},end:{line:1,column:31},source:''},
  body: [
    {
      type: 'ForInStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:31},source:''},
      left: {
        type: 'ObjectPattern',
        loc:{start:{line:1,column:5},end:{line:1,column:22},source:''},
        properties: [
          {
            type: 'Property',
            loc:{start:{line:1,column:6},end:{line:1,column:10},source:''},
            key: {
              type: 'Identifier',
              loc:{start:{line:1,column:6},end:{line:1,column:7},source:''},
              name: 'a'
            },
            kind: 'init',
            method: false,
            computed: false,
            value: {
              type: 'Identifier',
              loc:{start:{line:1,column:9},end:{line:1,column:10},source:''},
              name: 'x'
            },
            shorthand: false
          },
          {
            type: 'Property',
            loc:{start:{line:1,column:12},end:{line:1,column:21},source:''},
            key: {
              type: 'Identifier',
              loc:{start:{line:1,column:12},end:{line:1,column:13},source:''},
              name: 'c'
            },
            kind: 'init',
            method: false,
            computed: false,
            value: {
              type: 'ObjectPattern',
              loc:{start:{line:1,column:15},end:{line:1,column:21},source:''},
              properties: [
                {
                  type: 'Property',
                  loc:{start:{line:1,column:16},end:{line:1,column:20},source:''},
                  key: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:16},end:{line:1,column:17},source:''},
                    name: 'b'
                  },
                  kind: 'init',
                  method: false,
                  computed: false,
                  value: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:19},end:{line:1,column:20},source:''},
                    name: 'x'
                  },
                  shorthand: false
                }
              ]
            },
            shorthand: false
          }
        ]
      },
      right: {
        type: 'Identifier',
        loc:{start:{line:1,column:26},end:{line:1,column:29},source:''},
        name: 'obj'
      },
      body: {
        type: 'EmptyStatement',
        loc:{start:{line:1,column:30},end:{line:1,column:31},source:''}
      }
    }
  ]
}

tokens (20x):
       ID_for PUNC_PAREN_OPEN PUNC_CURLY_OPEN IDENT PUNC_COLON IDENT
       PUNC_COMMA IDENT PUNC_COLON PUNC_CURLY_OPEN IDENT PUNC_COLON
       IDENT PUNC_CURLY_CLOSE PUNC_CURLY_CLOSE ID_in IDENT
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
for ({a:x, c:{b:x}} in obj) ;
````

Produces same AST
