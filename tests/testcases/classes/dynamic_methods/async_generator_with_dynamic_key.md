# Tenko parser test case

- Path: tests/testcases/classes/dynamic_methods/async_generator_with_dynamic_key.md

> :: classes : dynamic methods
>
> ::> async generator with dynamic key
>
> important to assert that the AST marks the method as both async and a generator

## Input

`````js
class x { async *[y](){}}
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
  loc:{start:{line:1,column:0},end:{line:1,column:25},source:''},
  body: [
    {
      type: 'ClassDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:25},source:''},
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:6},end:{line:1,column:7},source:''},
        name: 'x'
      },
      superClass: null,
      body: {
        type: 'ClassBody',
        loc:{start:{line:1,column:8},end:{line:1,column:25},source:''},
        body: [
          {
            type: 'MethodDefinition',
            loc:{start:{line:1,column:10},end:{line:1,column:24},source:''},
            key: {
              type: 'Identifier',
              loc:{start:{line:1,column:18},end:{line:1,column:19},source:''},
              name: 'y'
            },
            static: false,
            computed: true,
            kind: 'method',
            value: {
              type: 'FunctionExpression',
              loc:{start:{line:1,column:10},end:{line:1,column:24},source:''},
              generator: true,
              async: true,
              id: null,
              params: [],
              body: {
                type: 'BlockStatement',
                loc:{start:{line:1,column:22},end:{line:1,column:24},source:''},
                body: []
              }
            }
          }
        ]
      }
    }
  ]
}

tokens (14x):
       ID_class IDENT PUNC_CURLY_OPEN ID_async PUNC_STAR
       PUNC_BRACKET_OPEN IDENT PUNC_BRACKET_CLOSE PUNC_PAREN_OPEN
       PUNC_PAREN_CLOSE PUNC_CURLY_OPEN PUNC_CURLY_CLOSE
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
class x{async * [y](){};}
````

Produces same AST