# Tenko parser test case

- Path: tests/testcases/regexes/named_capturing_groups/non_bmp_unicode/idstart_start_dupe_check_lhs.md

> :: regexes : named capturing groups : non bmp unicode
>
> ::> idstart start dupe check lhs
>
> Capturing group name starts with a non-bmp unicode ID_START
>
> This confirms whether the left hand of surrogate pair `\u{2F9DF}` / `\ud87e\udddf`, which is `\ud87e`, is correctly reported as not being declared as a group name
>
> The backreference should fail to match the group because it's only half of the surrogate pair
>
> I think that because RegExpIdentifierName is syntactically not parse-able (because the the surrogate head cannot be validly parsed at all without a tail) it is never "again" parsed as a groupname in webcompat mode. In other words, it never traverses the +N route.
>
> Since it won't trigger +N, it won't parse a group in webcompat, so it passes as an extended atom.

## FAIL

## Input

`````js
/(?<@{x2f9df}@xyz>foo)met\k<@{xfffd}@xyz>/
`````

## Output

_Note: the whole output block is auto-generated. Manual changes will be overwritten!_

Below follow outputs in four parsing modes: sloppy mode, strict mode script goal, module goal, web compat mode (always sloppy).

Note that the output parts are auto-generated by the test runner to reflect actual result.

### Sloppy mode

Parsed with script goal and as if the code did not start with strict mode header.

`````
throws: Lexer error!
    Regex: The start of an group name had a surrogate pair and is therefor only valid with u-flag; Wanted to parse an unescaped group name specifier but it had a bad start: [`@{xfffd}@`, 65533]

/(?<@{x2f9df}@xyz>foo)met\k<@{xfffd}@xyz>/
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

`````
throws: Lexer error!
    Regex: The start of an group name had a surrogate pair and is therefor only valid with u-flag; Found at least one invalid group name but also at least one valid group name, so this activates +N and triggers this error

/(?<@{x2f9df}@xyz>foo)met\k<@{xfffd}@xyz>/
^------- error
`````

