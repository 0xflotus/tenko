# Tenko parser test case

- Path: tests/testcases/tests_related_to_bindings/export/multiple_exports/demand_correct_name_to_be_declared_for_export_when_aliasing_this_is_correct.md

> :: tests related to bindings : export : multiple exports
>
> ::> demand correct name to be declared for export when aliasing this is correct
> 
> https://tc39.github.io/ecma262/#sec-module-semantics-static-semantics-early-errors
> 
> > It is a Syntax Error if the ExportedNames of ModuleItemList contains any duplicate entries.
> 
> > The duplicate ExportedNames rule implies that multiple export default ExportDeclaration items within a ModuleBody is a Syntax Error.
> 
> > It is a Syntax Error if any element of the ExportedBindings of ModuleItemList does not also occur in either the VarDeclaredNames of ModuleItemList, or the LexicallyDeclaredNames of ModuleItemList.

## Input

`````js
var mustExist; export {mustExist as canBeUndeclared};
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Parser error!
  The `export` keyword can only be used with the module goal

var mustExist; export {mustExist as canBeUndeclared};
               ^------- error
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

`````
ast: {
  type: 'Program',
  loc:{start:{line:1,column:0},end:{line:1,column:53},source:''},
  body: [
    {
      type: 'VariableDeclaration',
      loc:{start:{line:1,column:0},end:{line:1,column:14},source:''},
      kind: 'var',
      declarations: [
        {
          type: 'VariableDeclarator',
          loc:{start:{line:1,column:4},end:{line:1,column:13},source:''},
          id: {
            type: 'Identifier',
            loc:{start:{line:1,column:4},end:{line:1,column:13},source:''},
            name: 'mustExist'
          },
          init: null
        }
      ]
    },
    {
      type: 'ExportNamedDeclaration',
      loc:{start:{line:1,column:15},end:{line:1,column:53},source:''},
      specifiers: [
        {
          type: 'ExportSpecifier',
          loc:{start:{line:1,column:23},end:{line:1,column:51},source:''},
          local: {
            type: 'Identifier',
            loc:{start:{line:1,column:23},end:{line:1,column:32},source:''},
            name: 'mustExist'
          },
          exported: {
            type: 'Identifier',
            loc:{start:{line:1,column:36},end:{line:1,column:51},source:''},
            name: 'canBeUndeclared'
          }
        }
      ],
      declaration: null,
      source: null
    }
  ]
}

tokens (11x):
       ID_var IDENT PUNC_SEMI ID_export PUNC_CURLY_OPEN IDENT ID_as
       IDENT PUNC_CURLY_CLOSE PUNC_SEMI
`````


### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [module]:

````js
var mustExist;
export {mustExist as canBeUndeclared}
````

Produces same AST