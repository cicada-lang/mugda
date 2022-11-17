rename `parse/` to `syntax/`

fix command line watch

top level `evaluate/`
top level `check/`
top level `infer/`
top level `readback/`

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
