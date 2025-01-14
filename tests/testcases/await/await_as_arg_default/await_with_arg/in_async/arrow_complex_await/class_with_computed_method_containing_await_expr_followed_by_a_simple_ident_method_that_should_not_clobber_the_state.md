# Tenko parser test case

- Path: tests/testcases/await/await_as_arg_default/await_with_arg/in_async/arrow_complex_await/class_with_computed_method_containing_await_expr_followed_by_a_simple_ident_method_that_should_not_clobber_the_state.md

> :: await : await as arg default : await with arg : in async : arrow complex await
>
> ::> class with computed method containing await expr followed by a simple ident method that should not clobber the state
>
> there was a bug where a regular method would plainly clobber the state flags

## Input

`````js
(fail = class A {[await](){}; "x"(){}}) => {}
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
  loc:{start:{line:1,column:0},end:{line:1,column:45},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:45},source:''},
      expression: {
        type: 'ArrowFunctionExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:45},source:''},
        params: [
          {
            type: 'AssignmentPattern',
            loc:{start:{line:1,column:1},end:{line:1,column:38},source:''},
            left: {
              type: 'Identifier',
              loc:{start:{line:1,column:1},end:{line:1,column:5},source:''},
              name: 'fail'
            },
            right: {
              type: 'ClassExpression',
              loc:{start:{line:1,column:8},end:{line:1,column:38},source:''},
              id: {
                type: 'Identifier',
                loc:{start:{line:1,column:14},end:{line:1,column:15},source:''},
                name: 'A'
              },
              superClass: null,
              body: {
                type: 'ClassBody',
                loc:{start:{line:1,column:16},end:{line:1,column:38},source:''},
                body: [
                  {
                    type: 'MethodDefinition',
                    loc:{start:{line:1,column:17},end:{line:1,column:28},source:''},
                    key: {
                      type: 'Identifier',
                      loc:{start:{line:1,column:18},end:{line:1,column:23},source:''},
                      name: 'await'
                    },
                    static: false,
                    computed: true,
                    kind: 'method',
                    value: {
                      type: 'FunctionExpression',
                      loc:{start:{line:1,column:17},end:{line:1,column:28},source:''},
                      generator: false,
                      async: false,
                      id: null,
                      params: [],
                      body: {
                        type: 'BlockStatement',
                        loc:{start:{line:1,column:26},end:{line:1,column:28},source:''},
                        body: []
                      }
                    }
                  },
                  {
                    type: 'MethodDefinition',
                    loc:{start:{line:1,column:30},end:{line:1,column:37},source:''},
                    key: {
                      type: 'Literal',
                      loc:{start:{line:1,column:30},end:{line:1,column:33},source:''},
                      value: 'x',
                      raw: '"x"'
                    },
                    static: false,
                    computed: false,
                    kind: 'method',
                    value: {
                      type: 'FunctionExpression',
                      loc:{start:{line:1,column:30},end:{line:1,column:37},source:''},
                      generator: false,
                      async: false,
                      id: null,
                      params: [],
                      body: {
                        type: 'BlockStatement',
                        loc:{start:{line:1,column:35},end:{line:1,column:37},source:''},
                        body: []
                      }
                    }
                  }
                ]
              }
            }
          }
        ],
        id: null,
        generator: false,
        async: false,
        expression: false,
        body: {
          type: 'BlockStatement',
          loc:{start:{line:1,column:43},end:{line:1,column:45},source:''},
          body: []
        }
      }
    }
  ]
}

tokens (26x):
       PUNC_PAREN_OPEN IDENT PUNC_EQ ID_class IDENT PUNC_CURLY_OPEN
       PUNC_BRACKET_OPEN ID_await PUNC_BRACKET_CLOSE PUNC_PAREN_OPEN
       PUNC_PAREN_CLOSE PUNC_CURLY_OPEN PUNC_CURLY_CLOSE PUNC_SEMI
       STRING_DOUBLE PUNC_PAREN_OPEN PUNC_PAREN_CLOSE PUNC_CURLY_OPEN
       PUNC_CURLY_CLOSE PUNC_CURLY_CLOSE PUNC_PAREN_CLOSE PUNC_EQ_GT
       PUNC_CURLY_OPEN PUNC_CURLY_CLOSE ASI
`````

### Strict mode

Parsed with script goal but as if it was starting with `"use strict"` at the top.

_Output same as sloppy mode._

### Module goal

Parsed with the module goal.

`````
throws: Parser error!
  Cannot use `await` as var when goal=module but found `await` outside an async function

(fail = class A {[await](){}; "x"(){}}) => {}
                       ^------- error
`````


### Web compat mode

Parsed in sloppy script mode but with the web compat flag enabled.

_Output same as sloppy mode._

## AST Printer

Printer output different from input [sloppy]:

````js
(fail = class A{[await](){};
"x"(){};}) => {};
````

Produces same AST
