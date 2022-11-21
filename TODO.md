rename decreasingExp to decreasing

mv ./lang/termination/decreasingExp.ts ./lang/termination/decreasing.ts

ambr decreasingExp decreasing

mv termination/ to decreasing/

fix command line watch

- `Mod` has `imported`

# type checking

> We can drop some features, but the implementation should be complete.

`Ctx`

`check`
`checkType`
`infer`

Let declarations

Data type declarations

- Checking data and constructor types
- Strict positivity
- Checking the whole declaration

Function declarations

- Syntactic checks for patterns
- Coverage of pattern matching
- Preliminaries
- Checking accessible part of patterns
- Checking inaccessible patterns
- Checking the whole declaration

Mugda programs

# later

refactor `decreasingExp`

- note about can not `decreasingValue`

fix `extractCallMatrixes` scope bug

`Patterns.Compute` take `exp` instead of `pattern`

`CallMatrix` -- error report on specific position

# std

[std] list-reverse.error.mu
[std] Vector-reverse.mu

# learn

read AA's paper

# maybe

[maybe] use unified JSON ADT -- change `CamelCase` to `camelCase`
