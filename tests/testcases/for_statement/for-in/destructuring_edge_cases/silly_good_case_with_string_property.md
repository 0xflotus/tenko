# Tenko parser test case

- Path: tests/testcases/for_statement/for-in/destructuring_edge_cases/silly_good_case_with_string_property.md

> :: for statement : for-in : destructuring edge cases
>
> ::> silly good case with string property
> 
> https://tc39.github.io/ecma262/#sec-for-in-and-for-of-statements-static-semantics-early-errors
> 
> > It is a Syntax Error if LeftHandSideExpression is either an ObjectLiteral or an ArrayLiteral and if LeftHandSideExpression is not covering an AssignmentPattern.

## Input

`````js
for ("foo".bar in obj);
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
      type: 'ForInStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:23},source:''},
      left: {
        type: 'MemberExpression',
        loc:{start:{line:1,column:5},end:{line:1,column:14},source:''},
        object: {
          type: 'Literal',
          loc:{start:{line:1,column:5},end:{line:1,column:10},source:''},
          value: 'foo',
          raw: '"foo"'
        },
        property: {
          type: 'Identifier',
          loc:{start:{line:1,column:11},end:{line:1,column:14},source:''},
          name: 'bar'
        },
        computed: false
      },
      right: {
        type: 'Identifier',
        loc:{start:{line:1,column:18},end:{line:1,column:21},source:''},
        name: 'obj'
      },
      body: {
        type: 'EmptyStatement',
        loc:{start:{line:1,column:22},end:{line:1,column:23},source:''}
      }
    }
  ]
}

tokens (10x):
       ID_for PUNC_PAREN_OPEN STRING_DOUBLE PUNC_DOT IDENT ID_in IDENT
       PUNC_PAREN_CLOSE PUNC_SEMI
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
for (("foo".bar) in obj) ;
````

Produces same AST
