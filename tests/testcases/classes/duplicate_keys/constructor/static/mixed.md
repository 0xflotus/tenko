# Tenko parser test case

- Path: tests/testcases/classes/duplicate_keys/constructor/static/mixed.md

> :: classes : duplicate keys : constructor : static
>
> ::> mixed
> 
> https://tc39.github.io/ecma262/#sec-static-semantics-constructormethod
> 
> > It is a Syntax Error if PrototypePropertyNameList of ClassElementList contains more than one occurrence of "constructor".
> 
> static members do not end up on the prototype so should not get this treatment

## Input

`````js
class x {static constructor(){}; constructor(){}}
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
  loc:{start:{line:1,column:0},end:{line:1,column:49},source:''},
  body: [
    {
      type: 'ClassDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:49},source:''},
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:6},end:{line:1,column:7},source:''},
        name: 'x'
      },
      superClass: null,
      body: {
        type: 'ClassBody',
        loc:{start:{line:1,column:8},end:{line:1,column:49},source:''},
        body: [
          {
            type: 'MethodDefinition',
            loc:{start:{line:1,column:9},end:{line:1,column:31},source:''},
            key: {
              type: 'Identifier',
              loc:{start:{line:1,column:16},end:{line:1,column:27},source:''},
              name: 'constructor'
            },
            static: true,
            computed: false,
            kind: 'method',
            value: {
              type: 'FunctionExpression',
              loc:{start:{line:1,column:9},end:{line:1,column:31},source:''},
              generator: false,
              async: false,
              id: null,
              params: [],
              body: {
                type: 'BlockStatement',
                loc:{start:{line:1,column:29},end:{line:1,column:31},source:''},
                body: []
              }
            }
          },
          {
            type: 'MethodDefinition',
            loc:{start:{line:1,column:33},end:{line:1,column:48},source:''},
            key: {
              type: 'Identifier',
              loc:{start:{line:1,column:33},end:{line:1,column:44},source:''},
              name: 'constructor'
            },
            static: false,
            computed: false,
            kind: 'constructor',
            value: {
              type: 'FunctionExpression',
              loc:{start:{line:1,column:33},end:{line:1,column:48},source:''},
              generator: false,
              async: false,
              id: null,
              params: [],
              body: {
                type: 'BlockStatement',
                loc:{start:{line:1,column:46},end:{line:1,column:48},source:''},
                body: []
              }
            }
          }
        ]
      }
    }
  ]
}

tokens (17x):
       ID_class IDENT PUNC_CURLY_OPEN ID_static IDENT PUNC_PAREN_OPEN
       PUNC_PAREN_CLOSE PUNC_CURLY_OPEN PUNC_CURLY_CLOSE PUNC_SEMI
       IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE PUNC_CURLY_OPEN
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
class x{static constructor(){};
constructor(){};}
````

Produces same AST