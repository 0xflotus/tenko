# Tenko parser test case

- Path: tests/testcases/classes/special_keys/identx003dthrow/as_static_setter_in_class.md

> :: classes : special keys : identx003dthrow
>
> ::> as static setter in class

## Input

`````js
class x {static set throw(x){}}
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
      type: 'ClassDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:31},source:''},
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:6},end:{line:1,column:7},source:''},
        name: 'x'
      },
      superClass: null,
      body: {
        type: 'ClassBody',
        loc:{start:{line:1,column:8},end:{line:1,column:31},source:''},
        body: [
          {
            type: 'MethodDefinition',
            loc:{start:{line:1,column:9},end:{line:1,column:30},source:''},
            key: {
              type: 'Identifier',
              loc:{start:{line:1,column:20},end:{line:1,column:25},source:''},
              name: 'throw'
            },
            static: true,
            computed: false,
            kind: 'set',
            value: {
              type: 'FunctionExpression',
              loc:{start:{line:1,column:9},end:{line:1,column:30},source:''},
              generator: false,
              async: false,
              id: null,
              params: [
                {
                  type: 'Identifier',
                  loc:{start:{line:1,column:26},end:{line:1,column:27},source:''},
                  name: 'x'
                }
              ],
              body: {
                type: 'BlockStatement',
                loc:{start:{line:1,column:28},end:{line:1,column:30},source:''},
                body: []
              }
            }
          }
        ]
      }
    }
  ]
}

tokens (13x):
       ID_class IDENT PUNC_CURLY_OPEN ID_static ID_set ID_throw
       PUNC_PAREN_OPEN IDENT PUNC_PAREN_CLOSE PUNC_CURLY_OPEN
       PUNC_CURLY_CLOSE PUNC_CURLY_CLOSE
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
class x{static set throw(x){};}
````

Produces same AST
