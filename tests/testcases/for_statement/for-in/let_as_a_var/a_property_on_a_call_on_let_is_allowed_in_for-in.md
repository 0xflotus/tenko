# Tenko parser test case

- Path: tests/testcases/for_statement/for-in/let_as_a_var/a_property_on_a_call_on_let_is_allowed_in_for-in.md

> :: for statement : for-in : let as a var
>
> ::> a property on a call on let is allowed in for-in
>
> for-in allows certain lhs that starts with `let`. In strict mode all bets are off.

## Input

`````js
for (let().foo in x);
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
  loc:{start:{line:1,column:0},end:{line:1,column:21},source:''},
  body: [
    {
      type: 'ForInStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:21},source:''},
      left: {
        type: 'MemberExpression',
        loc:{start:{line:1,column:5},end:{line:1,column:14},source:''},
        object: {
          type: 'CallExpression',
          loc:{start:{line:1,column:5},end:{line:1,column:10},source:''},
          callee: {
            type: 'Identifier',
            loc:{start:{line:1,column:5},end:{line:1,column:8},source:''},
            name: 'let'
          },
          arguments: []
        },
        property: {
          type: 'Identifier',
          loc:{start:{line:1,column:11},end:{line:1,column:14},source:''},
          name: 'foo'
        },
        computed: false
      },
      right: {
        type: 'Identifier',
        loc:{start:{line:1,column:18},end:{line:1,column:19},source:''},
        name: 'x'
      },
      body: {
        type: 'EmptyStatement',
        loc:{start:{line:1,column:20},end:{line:1,column:21},source:''}
      }
    }
  ]
}

tokens (12x):
       ID_for PUNC_PAREN_OPEN ID_let PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_DOT IDENT ID_in IDENT PUNC_PAREN_CLOSE PUNC_SEMI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Let binding missing binding names

for (let().foo in x);
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
for ((((let)()).foo) in x) ;
````

Produces same AST
