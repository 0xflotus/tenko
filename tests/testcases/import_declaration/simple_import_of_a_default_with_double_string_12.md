# Tenko parser test case

- Path: tests/testcases/import_declaration/simple_import_of_a_default_with_double_string_12.md

> :: import declaration
>
> ::> simple import of a default with double string 12

## Input

`````js
import {x as a, z as b} from "y"
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

import {x as a, z as b} from "y"
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
  loc:{start:{line:1,column:0},end:{line:1,column:32},source:''},
  body: [
    {
      type: 'ImportDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:32},source:''},
      specifiers: [
        {
          type: 'ImportSpecifier',
          loc:{start:{line:1,column:8},end:{line:1,column:14},source:''},
          imported: {
            type: 'Identifier',
            loc:{start:{line:1,column:8},end:{line:1,column:9},source:''},
            name: 'x'
          },
          local: {
            type: 'Identifier',
            loc:{start:{line:1,column:13},end:{line:1,column:14},source:''},
            name: 'a'
          }
        },
        {
          type: 'ImportSpecifier',
          loc:{start:{line:1,column:16},end:{line:1,column:22},source:''},
          imported: {
            type: 'Identifier',
            loc:{start:{line:1,column:16},end:{line:1,column:17},source:''},
            name: 'z'
          },
          local: {
            type: 'Identifier',
            loc:{start:{line:1,column:21},end:{line:1,column:22},source:''},
            name: 'b'
          }
        }
      ],
      source: {
        type: 'Literal',
        loc:{start:{line:1,column:29},end:{line:1,column:32},source:''},
        value: 'y',
        raw: '"y"'
      }
    }
  ]
}

tokens (14x):
       ID_import PUNC_CURLY_OPEN IDENT ID_as IDENT PUNC_COMMA IDENT
       ID_as IDENT PUNC_CURLY_CLOSE ID_from STRING_DOUBLE ASI
`````


### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [module]:

````js
import {x as a, z as b} from "y";
````

Produces same AST