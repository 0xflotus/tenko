# Tenko parser test case

- Path: tests/testcases/html_comments/open_comment/html_open_on_its_own_line.md

> :: html comments : open comment
>
> ::> html open on its own line
>
> https://tc39.github.io/ecma262/#sec-html-like-comments
>
> Similar to a MultiLineComment that contains a line terminator code point, a SingleLineHTMLCloseComment is considered to be a LineTerminator for purposes of parsing by the syntactic grammar.
>
> note: the SingleLineHTMLCloseComment is not "just" `-->` and so arbitrary occurrences of that token do not yield a pseudo-newline (in particular, I don't think it closes an html open...)

## Input

`````js
call()
<!-- foo
more();
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
  loc:{start:{line:1,column:0},end:{line:3,column:7},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:2,column:8},source:''},
      expression: {
        type: 'BinaryExpression',
        loc:{start:{line:1,column:0},end:{line:2,column:8},source:''},
        left: {
          type: 'CallExpression',
          loc:{start:{line:1,column:0},end:{line:1,column:6},source:''},
          callee: {
            type: 'Identifier',
            loc:{start:{line:1,column:0},end:{line:1,column:4},source:''},
            name: 'call'
          },
          arguments: []
        },
        operator: '<',
        right: {
          type: 'UnaryExpression',
          loc:{start:{line:2,column:1},end:{line:2,column:8},source:''},
          operator: '!',
          prefix: true,
          argument: {
            type: 'UpdateExpression',
            loc:{start:{line:2,column:2},end:{line:2,column:8},source:''},
            argument: {
              type: 'Identifier',
              loc:{start:{line:2,column:5},end:{line:2,column:8},source:''},
              name: 'foo'
            },
            operator: '--',
            prefix: true
          }
        }
      }
    },
    {
      type: 'ExpressionStatement',
      loc:{start:{line:3,column:0},end:{line:3,column:7},source:''},
      expression: {
        type: 'CallExpression',
        loc:{start:{line:3,column:0},end:{line:3,column:6},source:''},
        callee: {
          type: 'Identifier',
          loc:{start:{line:3,column:0},end:{line:3,column:4},source:''},
          name: 'more'
        },
        arguments: []
      }
    }
  ]
}

tokens (13x):
       IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE PUNC_LT PUNC_EXCL
       PUNC_MIN_MIN IDENT ASI IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE
       PUNC_SEMI
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
ast: {
  type: 'Program',
  loc:{start:{line:1,column:0},end:{line:3,column:7},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:6},source:''},
      expression: {
        type: 'CallExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:6},source:''},
        callee: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:4},source:''},
          name: 'call'
        },
        arguments: []
      }
    },
    {
      type: 'ExpressionStatement',
      loc:{start:{line:3,column:0},end:{line:3,column:7},source:''},
      expression: {
        type: 'CallExpression',
        loc:{start:{line:3,column:0},end:{line:3,column:6},source:''},
        callee: {
          type: 'Identifier',
          loc:{start:{line:3,column:0},end:{line:3,column:4},source:''},
          name: 'more'
        },
        arguments: []
      }
    }
  ]
}

tokens (9x):
       IDENT PUNC_PAREN_OPEN PUNC_PAREN_CLOSE ASI IDENT
       PUNC_PAREN_OPEN PUNC_PAREN_CLOSE PUNC_SEMI
`````


## AST Printer

Printer output different from input [sloppy]:

````js
((((call)()) < (! (--foo))));
((more)());
````

Produces same AST
