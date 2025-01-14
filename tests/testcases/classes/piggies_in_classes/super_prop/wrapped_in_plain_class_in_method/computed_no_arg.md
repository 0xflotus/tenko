# Tenko parser test case

- Path: tests/testcases/classes/piggies_in_classes/super_prop/wrapped_in_plain_class_in_method/computed_no_arg.md

> :: classes : piggies in classes : super prop : wrapped in plain class in method
>
> ::> computed no arg

## Input

`````js
class outer { meh(){  class x { [super.foo](){} }  }}
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
  loc:{start:{line:1,column:0},end:{line:1,column:53},source:''},
  body: [
    {
      type: 'ClassDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:53},source:''},
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:6},end:{line:1,column:11},source:''},
        name: 'outer'
      },
      superClass: null,
      body: {
        type: 'ClassBody',
        loc:{start:{line:1,column:12},end:{line:1,column:53},source:''},
        body: [
          {
            type: 'MethodDefinition',
            loc:{start:{line:1,column:14},end:{line:1,column:52},source:''},
            key: {
              type: 'Identifier',
              loc:{start:{line:1,column:14},end:{line:1,column:17},source:''},
              name: 'meh'
            },
            static: false,
            computed: false,
            kind: 'method',
            value: {
              type: 'FunctionExpression',
              loc:{start:{line:1,column:14},end:{line:1,column:52},source:''},
              generator: false,
              async: false,
              id: null,
              params: [],
              body: {
                type: 'BlockStatement',
                loc:{start:{line:1,column:19},end:{line:1,column:52},source:''},
                body: [
                  {
                    type: 'ClassDeclaration',
                    loc:{start:{line:1,column:22},end:{line:1,column:49},source:''},
                    id: {
                      type: 'Identifier',
                      loc:{start:{line:1,column:28},end:{line:1,column:29},source:''},
                      name: 'x'
                    },
                    superClass: null,
                    body: {
                      type: 'ClassBody',
                      loc:{start:{line:1,column:30},end:{line:1,column:49},source:''},
                      body: [
                        {
                          type: 'MethodDefinition',
                          loc:{start:{line:1,column:32},end:{line:1,column:47},source:''},
                          key: {
                            type: 'MemberExpression',
                            loc:{start:{line:1,column:33},end:{line:1,column:42},source:''},
                            object: {
                              type: 'Super',
                              loc:{start:{line:1,column:33},end:{line:1,column:38},source:''}
                            },
                            property: {
                              type: 'Identifier',
                              loc:{start:{line:1,column:39},end:{line:1,column:42},source:''},
                              name: 'foo'
                            },
                            computed: false
                          },
                          static: false,
                          computed: true,
                          kind: 'method',
                          value: {
                            type: 'FunctionExpression',
                            loc:{start:{line:1,column:32},end:{line:1,column:47},source:''},
                            generator: false,
                            async: false,
                            id: null,
                            params: [],
                            body: {
                              type: 'BlockStatement',
                              loc:{start:{line:1,column:45},end:{line:1,column:47},source:''},
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

tokens (23x):
       ID_class IDENT PUNC_CURLY_OPEN IDENT PUNC_PAREN_OPEN
       PUNC_PAREN_CLOSE PUNC_CURLY_OPEN ID_class IDENT PUNC_CURLY_OPEN
       PUNC_BRACKET_OPEN ID_super PUNC_DOT IDENT PUNC_BRACKET_CLOSE
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
class outer{meh(){class x{[super.foo](){};}};}
````

Produces same AST
