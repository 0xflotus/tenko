# Tenko parser test case

- Path: tests/testcases/regexes/named_capturing_groups/non_bmp_unicode_double_escaped/idrest_group_name_dupe_check_rhs.md

> :: regexes : named capturing groups : non bmp unicode double escaped
>
> ::> idrest group name dupe check rhs
>
> This checks whether `\u{1D7D0}` / `\uD835\uDFD0` is accepted inside a valid group
>
> The backreference should fail to match the group because it's only half of the surrogate pair

## FAIL

## Input

`````js
/(?<abc\uD835\uDFD0def>foo\k<abc\uDFD0def>)/
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Lexer error!
    Regex: A double unicode quad escape that represents a surrogate pair in char class or group name is only valid with u-flag; Found a quad that was a surrogate pair which created a valid identifier character and that will only work with u-flag; An escape that might be part of an identifier cannot be anything else so if it is invalid it must be an error

/(?<abc\uD835\uDFD0def>foo\k<abc\uDFD0def>)/
^------- error
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
