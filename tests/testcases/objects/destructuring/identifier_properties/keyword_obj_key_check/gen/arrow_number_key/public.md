# Tenko parser autogenerated test case

- From: tests/testcases/objects/destructuring/identifier_properties/keyword_obj_key_check/autogen.md
- Path: tests/testcases/objects/destructuring/identifier_properties/keyword_obj_key_check/gen/arrow_number_key/public.md

> :: objects : destructuring : identifier properties : keyword obj key check : gen : arrow number key
>
> ::> public

## Input


`````js
({500: public}) => null
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
  loc:{start:{line:1,column:0},end:{line:1,column:23},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:23},source:''},
      expression: {
        type: 'ArrowFunctionExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:23},source:''},
        params: [
          {
            type: 'ObjectPattern',
            loc:{start:{line:1,column:1},end:{line:1,column:14},source:''},
            properties: [
              {
                type: 'Property',
                loc:{start:{line:1,column:2},end:{line:1,column:13},source:''},
                key: {
                  type: 'Literal',
                  loc:{start:{line:1,column:2},end:{line:1,column:5},source:''},
                  value: 500,
                  raw: '500'
                },
                kind: 'init',
                method: false,
                computed: false,
                value: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:7},end:{line:1,column:13},source:''},
                  name: 'public'
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
          type: 'Literal',
          loc:{start:{line:1,column:19},end:{line:1,column:23},source:''},
          value: null,
          raw: 'null'
        }
      }
    }
  ]
}

tokens (11x):
       PUNC_PAREN_OPEN PUNC_CURLY_OPEN NUMBER_DEC PUNC_COLON ID_public
       PUNC_CURLY_CLOSE PUNC_PAREN_CLOSE PUNC_EQ_GT ID_null ASI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use this name (public) as a variable name because: Cannot use this reserved word as a variable name in strict mode

({500: public}) => null
             ^------- error
`````


### Module goal

Parsed with the module goal.

_Output same as strict mode._

### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [sloppy]:

````js
({500:public}) => (null);
````

Produces same AST