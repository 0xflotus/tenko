# Tenko parser test case

- Path: tests/testcases/operator_precedent/assignment_precedent_test_2x002f2_x0028should_all_chain_to_the_rightx0029.md

> :: operator precedent
>
> ::> assignment precedent test 2x002f2 x0028should all chain to the rightx0029

## Input

`````js
a|=b^=c&=d>>>=e>>=f<<=g%=h/=i*=j**=k-=l+=m=n
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
  loc:{start:{line:1,column:0},end:{line:1,column:44},source:''},
  body: [
    {
      type: 'ExpressionStatement',
      loc:{start:{line:1,column:0},end:{line:1,column:44},source:''},
      expression: {
        type: 'AssignmentExpression',
        loc:{start:{line:1,column:0},end:{line:1,column:44},source:''},
        left: {
          type: 'Identifier',
          loc:{start:{line:1,column:0},end:{line:1,column:1},source:''},
          name: 'a'
        },
        operator: '|=',
        right: {
          type: 'AssignmentExpression',
          loc:{start:{line:1,column:3},end:{line:1,column:44},source:''},
          left: {
            type: 'Identifier',
            loc:{start:{line:1,column:3},end:{line:1,column:4},source:''},
            name: 'b'
          },
          operator: '^=',
          right: {
            type: 'AssignmentExpression',
            loc:{start:{line:1,column:6},end:{line:1,column:44},source:''},
            left: {
              type: 'Identifier',
              loc:{start:{line:1,column:6},end:{line:1,column:7},source:''},
              name: 'c'
            },
            operator: '&=',
            right: {
              type: 'AssignmentExpression',
              loc:{start:{line:1,column:9},end:{line:1,column:44},source:''},
              left: {
                type: 'Identifier',
                loc:{start:{line:1,column:9},end:{line:1,column:10},source:''},
                name: 'd'
              },
              operator: '>>>=',
              right: {
                type: 'AssignmentExpression',
                loc:{start:{line:1,column:14},end:{line:1,column:44},source:''},
                left: {
                  type: 'Identifier',
                  loc:{start:{line:1,column:14},end:{line:1,column:15},source:''},
                  name: 'e'
                },
                operator: '>>=',
                right: {
                  type: 'AssignmentExpression',
                  loc:{start:{line:1,column:18},end:{line:1,column:44},source:''},
                  left: {
                    type: 'Identifier',
                    loc:{start:{line:1,column:18},end:{line:1,column:19},source:''},
                    name: 'f'
                  },
                  operator: '<<=',
                  right: {
                    type: 'AssignmentExpression',
                    loc:{start:{line:1,column:22},end:{line:1,column:44},source:''},
                    left: {
                      type: 'Identifier',
                      loc:{start:{line:1,column:22},end:{line:1,column:23},source:''},
                      name: 'g'
                    },
                    operator: '%=',
                    right: {
                      type: 'AssignmentExpression',
                      loc:{start:{line:1,column:25},end:{line:1,column:44},source:''},
                      left: {
                        type: 'Identifier',
                        loc:{start:{line:1,column:25},end:{line:1,column:26},source:''},
                        name: 'h'
                      },
                      operator: '/=',
                      right: {
                        type: 'AssignmentExpression',
                        loc:{start:{line:1,column:28},end:{line:1,column:44},source:''},
                        left: {
                          type: 'Identifier',
                          loc:{start:{line:1,column:28},end:{line:1,column:29},source:''},
                          name: 'i'
                        },
                        operator: '*=',
                        right: {
                          type: 'AssignmentExpression',
                          loc:{start:{line:1,column:31},end:{line:1,column:44},source:''},
                          left: {
                            type: 'Identifier',
                            loc:{start:{line:1,column:31},end:{line:1,column:32},source:''},
                            name: 'j'
                          },
                          operator: '**=',
                          right: {
                            type: 'AssignmentExpression',
                            loc:{start:{line:1,column:35},end:{line:1,column:44},source:''},
                            left: {
                              type: 'Identifier',
                              loc:{start:{line:1,column:35},end:{line:1,column:36},source:''},
                              name: 'k'
                            },
                            operator: '-=',
                            right: {
                              type: 'AssignmentExpression',
                              loc:{start:{line:1,column:38},end:{line:1,column:44},source:''},
                              left: {
                                type: 'Identifier',
                                loc:{start:{line:1,column:38},end:{line:1,column:39},source:''},
                                name: 'l'
                              },
                              operator: '+=',
                              right: {
                                type: 'AssignmentExpression',
                                loc:{start:{line:1,column:41},end:{line:1,column:44},source:''},
                                left: {
                                  type: 'Identifier',
                                  loc:{start:{line:1,column:41},end:{line:1,column:42},source:''},
                                  name: 'm'
                                },
                                operator: '=',
                                right: {
                                  type: 'Identifier',
                                  loc:{start:{line:1,column:43},end:{line:1,column:44},source:''},
                                  name: 'n'
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  ]
}

tokens (29x):
       IDENT PUNC_OR_EQ IDENT PUNC_CARET_EQ IDENT PUNC_AND_EQ IDENT
       PUNC_GT_GT_GT_EQ IDENT PUNC_GT_GT_EQ IDENT PUNC_LT_LT_EQ IDENT
       PUNC_PERCENT_EQ IDENT PUNC_DIV_EQ IDENT PUNC_STAR_EQ IDENT
       PUNC_STAR_STAR_EQ IDENT PUNC_MIN_EQ IDENT PUNC_PLUS_EQ IDENT
       PUNC_EQ IDENT ASI
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
((a |= (b ^= (c &= (d >>>= (e >>= (f <<= (g %= (h /= (i *= (j **= (k -= (l += (m = n))))))))))))));
````

Produces same AST
