# Tenko parser test case

- Path: tests/testcases/classes/piggies_in_classes/super_prop/wrapped_in_extending_class_in_constructor/in_wrapped_extends_no_args.md

> :: classes : piggies in classes : super prop : wrapped in extending class in constructor
>
> ::> in wrapped extends no args

## Input

`````js
class outer extends S { constructor(){  class x extends feh(super.foo) { }  }}
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
  loc:{start:{line:1,column:0},end:{line:1,column:78},source:''},
  body: [
    {
      type: 'ClassDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:78},source:''},
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:6},end:{line:1,column:11},source:''},
        name: 'outer'
      },
      superClass: {
        type: 'Identifier',
        loc:{start:{line:1,column:20},end:{line:1,column:21},source:''},
        name: 'S'
      },
      body: {
        type: 'ClassBody',
        loc:{start:{line:1,column:22},end:{line:1,column:78},source:''},
        body: [
          {
            type: 'MethodDefinition',
            loc:{start:{line:1,column:24},end:{line:1,column:77},source:''},
            key: {
              type: 'Identifier',
              loc:{start:{line:1,column:24},end:{line:1,column:35},source:''},
              name: 'constructor'
            },
            static: false,
            computed: false,
            kind: 'constructor',
            value: {
              type: 'FunctionExpression',
              loc:{start:{line:1,column:24},end:{line:1,column:77},source:''},
              generator: false,
              async: false,
              id: null,
              params: [],
              body: {
                type: 'BlockStatement',
                loc:{start:{line:1,column:37},end:{line:1,column:77},source:''},
                body: [
                  {
                    type: 'ClassDeclaration',
                    loc:{start:{line:1,column:40},end:{line:1,column:74},source:''},
                    id: {
                      type: 'Identifier',
                      loc:{start:{line:1,column:46},end:{line:1,column:47},source:''},
                      name: 'x'
                    },
                    superClass: {
                      type: 'CallExpression',
                      loc:{start:{line:1,column:56},end:{line:1,column:70},source:''},
                      callee: {
                        type: 'Identifier',
                        loc:{start:{line:1,column:56},end:{line:1,column:59},source:''},
                        name: 'feh'
                      },
                      arguments: [
                        {
                          type: 'MemberExpression',
                          loc:{start:{line:1,column:60},end:{line:1,column:69},source:''},
                          object: {
                            type: 'Super',
                            loc:{start:{line:1,column:60},end:{line:1,column:65},source:''}
                          },
                          property: {
                            type: 'Identifier',
                            loc:{start:{line:1,column:66},end:{line:1,column:69},source:''},
                            name: 'foo'
                          },
                          computed: false
                        }
                      ]
                    },
                    body: {
                      type: 'ClassBody',
                      loc:{start:{line:1,column:71},end:{line:1,column:74},source:''},
                      body: []
                    }
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

tokens (23x):
       ID_class IDENT ID_extends IDENT PUNC_CURLY_OPEN IDENT
       PUNC_PAREN_OPEN PUNC_PAREN_CLOSE PUNC_CURLY_OPEN ID_class IDENT
       ID_extends IDENT PUNC_PAREN_OPEN ID_super PUNC_DOT IDENT
       PUNC_PAREN_CLOSE PUNC_CURLY_OPEN PUNC_CURLY_CLOSE
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
class outer extends (S) {constructor(){class x extends ((feh)(super.foo)) {}};}
````

Produces same AST