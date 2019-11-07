# Tenko parser test case

- Path: tests/testcases/super_keyword/call/weird_places/in_class_in_class_computed_key.md

> :: super keyword : call : weird places
>
> ::> in class in class computed key
>
> This is fine because the name of the key is not evaluated in the context of the class but its parent

## PASS

## Input

`````js
class A extends B {
  constructor() {
    class C extends D {
      [super()](){}
    }
  }
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
  loc:{start:{line:1,column:0},end:{line:7,column:1},source:''},
  body: [
    {
      type: 'ClassDeclaration',
      loc:{start:{line:1,column:0},end:{line:7,column:1},source:''},
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:6},end:{line:1,column:7},source:''},
        name: 'A'
      },
      superClass: {
        type: 'Identifier',
        loc:{start:{line:1,column:16},end:{line:1,column:17},source:''},
        name: 'B'
      },
      body: {
        type: 'ClassBody',
        loc:{start:{line:1,column:18},end:{line:7,column:1},source:''},
        body: [
          {
            type: 'MethodDefinition',
            loc:{start:{line:2,column:2},end:{line:6,column:3},source:''},
            key: {
              type: 'Identifier',
              loc:{start:{line:2,column:2},end:{line:2,column:13},source:''},
              name: 'constructor'
            },
            static: false,
            computed: false,
            kind: 'constructor',
            value: {
              type: 'FunctionExpression',
              loc:{start:{line:2,column:2},end:{line:6,column:3},source:''},
              generator: false,
              async: false,
              id: null,
              params: [],
              body: {
                type: 'BlockStatement',
                loc:{start:{line:2,column:16},end:{line:6,column:3},source:''},
                body: [
                  {
                    type: 'ClassDeclaration',
                    loc:{start:{line:3,column:4},end:{line:5,column:5},source:''},
                    id: {
                      type: 'Identifier',
                      loc:{start:{line:3,column:10},end:{line:3,column:11},source:''},
                      name: 'C'
                    },
                    superClass: {
                      type: 'Identifier',
                      loc:{start:{line:3,column:20},end:{line:3,column:21},source:''},
                      name: 'D'
                    },
                    body: {
                      type: 'ClassBody',
                      loc:{start:{line:3,column:22},end:{line:5,column:5},source:''},
                      body: [
                        {
                          type: 'MethodDefinition',
                          loc:{start:{line:4,column:6},end:{line:4,column:19},source:''},
                          key: {
                            type: 'CallExpression',
                            loc:{start:{line:4,column:7},end:{line:4,column:14},source:''},
                            callee: {
                              type: 'Super',
                              loc:{start:{line:4,column:7},end:{line:4,column:12},source:''}
                            },
                            arguments: []
                          },
                          static: false,
                          computed: true,
                          kind: 'method',
                          value: {
                            type: 'FunctionExpression',
                            loc:{start:{line:4,column:6},end:{line:4,column:19},source:''},
                            generator: false,
                            async: false,
                            id: null,
                            params: [],
                            body: {
                              type: 'BlockStatement',
                              loc:{start:{line:4,column:17},end:{line:4,column:19},source:''},
                              body: []
                            }
                          }
                        }
                      ]
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

tokens (27x):
       ID_class IDENT ID_extends IDENT PUNC_CURLY_OPEN IDENT
       PUNC_PAREN_OPEN PUNC_PAREN_CLOSE PUNC_CURLY_OPEN ID_class IDENT
       ID_extends IDENT PUNC_CURLY_OPEN PUNC_BRACKET_OPEN ID_super
       PUNC_PAREN_OPEN PUNC_PAREN_CLOSE PUNC_BRACKET_CLOSE
       PUNC_PAREN_OPEN PUNC_PAREN_CLOSE PUNC_CURLY_OPEN
       PUNC_CURLY_CLOSE PUNC_CURLY_CLOSE PUNC_CURLY_CLOSE
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
class A extends (B) {constructor(){class C extends (D) {[super()](){};}};}
````

Produces same AST