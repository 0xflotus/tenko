# Tenko parser test case

- Path: tests/testcases/strict_mode/eval/cannot_use_eval_as_catch_var.md

> :: strict mode : eval
>
> ::> cannot use eval as catch var

## Input

`````js
try {} catch (eval) {}
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
  loc:{start:{line:1,column:0},end:{line:1,column:22},source:''},
  body: [
    {
      type: 'TryStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:22},source:''},
      block: {
        type: 'BlockStatement',
        loc:{start:{line:1,column:4},end:{line:1,column:6},source:''},
        body: []
      },
      handler: {
        type: 'CatchClause',
        loc:{start:{line:1,column:7},end:{line:1,column:22},source:''},
        param: {
          type: 'Identifier',
          loc:{start:{line:1,column:14},end:{line:1,column:18},source:''},
          name: 'eval'
        },
        body: {
          type: 'BlockStatement',
          loc:{start:{line:1,column:20},end:{line:1,column:22},source:''},
          body: []
        }
      },
      finalizer: null
    }
  ]
}

tokens (10x):
       ID_try PUNC_CURLY_OPEN PUNC_CURLY_CLOSE ID_catch
       PUNC_PAREN_OPEN ID_eval PUNC_PAREN_CLOSE PUNC_CURLY_OPEN
       PUNC_CURLY_CLOSE
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

`````
throws: Parser error!
  Cannot use this name (eval) as a variable name because: Cannot create a binding named `eval` in strict mode

try {} catch (eval) {}
              ^------- error
`````


### Module goal

Parsed with the module goal.

_Output same as strict mode._

### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output was same as input [sloppy]
