# Tenko parser test case

- Path: tests/testcases/objects/duplicate_keys/obj_expr/dunderproto___proto__/obj_paren_wrapped_is_explicitly_exempted.md

> :: objects : duplicate keys : obj expr : dunderproto proto
>
> ::> obj paren wrapped is explicitly exempted
>
> rule does not applying when parsing potential arrow
> 
> https://tc39.github.io/ecma262/#sec-__proto__-property-names-in-object-initializers
> 
> > It is a Syntax Error if PropertyNameList of PropertyDefinitionList contains any duplicate entries for "__proto__" and at least two of those entries were obtained from productions of the form PropertyDefinition:PropertyName:AssignmentExpression .
> 
> This restriction only applies to webcompat mode (annex B)

## Input

`````js
({web: true,  __proto__: x, __proto__: y});
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
  loc:{start:{line:1,column:0},end:{line:1,column:43},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:43},source:''},
      expression: {
        type: 'ObjectExpression',
        loc:{start:{line:1,column:1},end:{line:1,column:41},source:''},
        properties: [
          {
            type: 'Property',
            loc:{start:{line:1,column:2},end:{line:1,column:11},source:''},
            key: {
              type: 'Identifier',
              loc:{start:{line:1,column:2},end:{line:1,column:5},source:''},
              name: 'web'
            },
            kind: 'init',
            method: false,
            computed: false,
            value: {
              type: 'Literal',
              loc:{start:{line:1,column:7},end:{line:1,column:11},source:''},
              value: true,
              raw: 'true'
            },
            shorthand: false
          },
          {
            type: 'Property',
            loc:{start:{line:1,column:14},end:{line:1,column:26},source:''},
            key: {
              type: 'Identifier',
              loc:{start:{line:1,column:14},end:{line:1,column:23},source:''},
              name: '__proto__'
            },
            kind: 'init',
            method: false,
            computed: false,
            value: {
              type: 'Identifier',
              loc:{start:{line:1,column:25},end:{line:1,column:26},source:''},
              name: 'x'
            },
            shorthand: false
          },
          {
            type: 'Property',
            loc:{start:{line:1,column:28},end:{line:1,column:40},source:''},
            key: {
              type: 'Identifier',
              loc:{start:{line:1,column:28},end:{line:1,column:37},source:''},
              name: '__proto__'
            },
            kind: 'init',
            method: false,
            computed: false,
            value: {
              type: 'Identifier',
              loc:{start:{line:1,column:39},end:{line:1,column:40},source:''},
              name: 'y'
            },
            shorthand: false
          }
        ]
      }
    }
  ]
}

tokens (17x):
       PUNC_PAREN_OPEN PUNC_CURLY_OPEN IDENT PUNC_COLON ID_true
       PUNC_COMMA IDENT PUNC_COLON IDENT PUNC_COMMA IDENT PUNC_COLON
       IDENT PUNC_CURLY_CLOSE PUNC_PAREN_CLOSE PUNC_SEMI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

_Output same as sloppy mode._

### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

`````
throws: Parser error!
  Found a part that cant destruct and a part that must destruct so it is not destructible

({web: true,  __proto__: x, __proto__: y});
                                         ^------- error
`````


## AST Printer

Printer output different from input [sloppy]:

````js
({web:true, __proto__:x, __proto__:y});
````

Produces same AST
