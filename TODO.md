# lazy evaluation and Codata

formatExp

fix `formatClause` -- by `formatExp`

formatValue -- uses `unfoldAp`

fix zero arity constructor `(zero)` v.s. `zero`

fix `doAp` & `doApUnfolded`

evaluate -- use lazy evaluation -- necessary for function that calls `Coctor`

- Values.force
- Add `Values.Lazy`

`(data <telescope> <retType> ...)` instead of `(data <type> ...)`

- for constructor arguments

# 3 Type-Checking

Scope-Checking

Bidirectional type-checking

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

# 4 Termination-Checking

Motivation

Matrix notation

Relating pattern and expressions

Applying the size-change principle

Examples

- Addition
- Mutual even and odd
- Brouwer ordinals

Excursion: Extending the order

- Examples

List reversion: Vectors to the rescue

# 5 Sized data types

# maybe

[maybe] use `Neutral` instead of `Values.Var` & `Values.Ap`
