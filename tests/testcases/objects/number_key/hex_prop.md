# Tenko parser test case

- Path: tests/testcases/objects/number_key/hex_prop.md

> :: objects : number key
>
> ::> hex prop
>
> Hex is allowed
>
> 
>
> https://tc39.es/ecma262/#prod-LiteralPropertyName
>
> 
>
> https://tc39.es/ecma262/#prod-NumericLiteral
>
> 

## PASS

## Input

`````js
x = {0xabc: y}
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
  loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
      expression: {
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
        left: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:1},source:''},
          name: 'x'
        },
        operator: '=',
        right: {
          type: 'ObjectExpression',
          loc:{start:{line:1,column:4},end:{line:1,column:14},source:''},
          properties: [
            {
              type: 'Property',
              loc:{start:{line:1,column:5},end:{line:1,column:13},source:''},
              key: {
                type: 'Literal',
                loc:{start:{line:1,column:5},end:{line:1,column:10},source:''},
                value: 2748,
                raw: '0xabc'
              },
              kind: 'init',
              method: false,
              computed: false,
              value: {
                type: 'Identifier',
                loc:{start:{line:1,column:12},end:{line:1,column:13},source:''},
                name: 'y'
              },
              shorthand: false
            }
          ]
        }
      }
    }
  ]
}

tokens (9x):
       IDENT PUNC_EQ PUNC_CURLY_OPEN NUMBER_HEX PUNC_COLON IDENT
       PUNC_CURLY_CLOSE ASI
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
((x = {0xabc:y}));
````

Produces same AST
