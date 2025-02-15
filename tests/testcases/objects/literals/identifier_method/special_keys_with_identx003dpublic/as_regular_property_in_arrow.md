# Tenko parser test case

- Path: tests/testcases/objects/literals/identifier_method/special_keys_with_identx003dpublic/as_regular_property_in_arrow.md

> :: objects : literals : identifier method : special keys with identx003dpublic
>
> ::> as regular property in arrow

## Input

`````js
({public: x}) => x;
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
  loc:{start:{line:1,column:0},end:{line:1,column:19},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:19},source:''},
      expression: {
        type: 'ArrowFunctionExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:18},source:''},
        params: [
          {
            type: 'ObjectPattern',
            loc:{start:{line:1,column:1},end:{line:1,column:12},source:''},
            properties: [
              {
                type: 'Property',
                loc:{start:{line:1,column:2},end:{line:1,column:11},source:''},
                key: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:2},end:{line:1,column:8},source:''},
                  name: 'public'
                },
                kind: 'init',
                method: false,
                computed: false,
                value: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:10},end:{line:1,column:11},source:''},
                  name: 'x'
                },
                shorthand: false
              }
            ]
          }
        ],
        id: null,
        generator: false,
        async: false,
        expression: true,
        body: {
          type: 'Identifier',
          loc:{start:{line:1,column:17},end:{line:1,column:18},source:''},
          name: 'x'
        }
      }
    }
  ]
}

tokens (11x):
       PUNC_PAREN_OPEN PUNC_CURLY_OPEN ID_public PUNC_COLON IDENT
       PUNC_CURLY_CLOSE PUNC_PAREN_CLOSE PUNC_EQ_GT IDENT PUNC_SEMI
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
({public:x}) => (x);
````

Produces same AST
