# Tenko parser test case

- Path: tests/testcases/var_statement/binding_generic/reserved_words/strict_mode_keyword3x003dpublic/function_object_alias_destructured_arg.md

> :: var statement : binding generic : reserved words : strict mode keyword3x003dpublic
>
> ::> function object alias destructured arg

## Input

`````js
function fg({x: public}) {}
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
  loc:{start:{line:1,column:0},end:{line:1,column:27},source:''},
  body: [
    {
      type: 'FunctionDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:27},source:''},
      generator: false,
      async: false,
      id: {
        type: 'Identifier',
        loc:{start:{line:1,column:9},end:{line:1,column:11},source:''},
        name: 'fg'
      },
      params: [
        {
          type: 'ObjectPattern',
          loc:{start:{line:1,column:12},end:{line:1,column:23},source:''},
          properties: [
            {
              type: 'Property',
              loc:{start:{line:1,column:13},end:{line:1,column:22},source:''},
              key: {
                type: 'Identifier',
                loc:{start:{line:1,column:13},end:{line:1,column:14},source:''},
                name: 'x'
              },
              kind: 'init',
              method: false,
              computed: false,
              value: {
                type: 'Identifier',
                loc:{start:{line:1,column:16},end:{line:1,column:22},source:''},
                name: 'public'
              },
              shorthand: false
            }
          ]
        }
      ],
      body: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:25},end:{line:1,column:27},source:''},
        body: []
      }
    }
  ]
}

tokens (12x):
       ID_function IDENT PUNC_PAREN_OPEN PUNC_CURLY_OPEN IDENT
       PUNC_COLON ID_public PUNC_CURLY_CLOSE PUNC_PAREN_CLOSE
       PUNC_CURLY_OPEN PUNC_CURLY_CLOSE
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use this name (public) as a variable name because: Cannot use this reserved word as a variable name in strict mode

function fg({x: public}) {}
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
function fg({x:public}) {}
````

Produces same AST