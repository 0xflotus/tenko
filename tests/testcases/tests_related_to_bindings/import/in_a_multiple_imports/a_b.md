# Tenko parser test case

- Path: tests/testcases/tests_related_to_bindings/import/in_a_multiple_imports/a_b.md

> :: tests related to bindings : import : in a multiple imports
>
> ::> a b

## Input

`````js
import {a} from "c"; import {b} from "c"
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  The `import` keyword can only be used with the module goal

import {a} from "c"; import {b} from "c"
       ^------- error
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

`````
ast: {
  type: 'Program',
  loc:{start:{line:1,column:0},end:{line:1,column:40},source:''},
  body: [
    {
      type: 'ImportDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:20},source:''},
      specifiers: [
        {
          type: 'ImportSpecifier',
          loc:{start:{line:1,column:8},end:{line:1,column:9},source:''},
          imported: {
            type: 'Identifier',
            loc:{start:{line:1,column:8},end:{line:1,column:9},source:''},
            name: 'a'
          },
          local: {
            type: 'Identifier',
            loc:{start:{line:1,column:8},end:{line:1,column:9},source:''},
            name: 'a'
          }
        }
      ],
      source: {
        type: 'Literal',
        loc:{start:{line:1,column:16},end:{line:1,column:19},source:''},
        value: 'c',
        raw: '"c"'
      }
    },
    {
      type: 'ImportDeclaration',
      loc:{start:{line:1,column:21},end:{line:1,column:40},source:''},
      specifiers: [
        {
          type: 'ImportSpecifier',
          loc:{start:{line:1,column:29},end:{line:1,column:30},source:''},
          imported: {
            type: 'Identifier',
            loc:{start:{line:1,column:29},end:{line:1,column:30},source:''},
            name: 'b'
          },
          local: {
            type: 'Identifier',
            loc:{start:{line:1,column:29},end:{line:1,column:30},source:''},
            name: 'b'
          }
        }
      ],
      source: {
        type: 'Literal',
        loc:{start:{line:1,column:37},end:{line:1,column:40},source:''},
        value: 'c',
        raw: '"c"'
      }
    }
  ]
}

tokens (15x):
       ID_import PUNC_CURLY_OPEN IDENT PUNC_CURLY_CLOSE ID_from
       STRING_DOUBLE PUNC_SEMI ID_import PUNC_CURLY_OPEN IDENT
       PUNC_CURLY_CLOSE ID_from STRING_DOUBLE ASI
`````


### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [module]:

````js
import {a as a} from "c";
import {b as b} from "c";
````

Produces same AST
