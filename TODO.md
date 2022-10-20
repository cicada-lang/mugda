formatValue -- uses `unfoldFormatAp` -- instead of using `unfoldAp` directly
formatValue -- uses `unfoldFormatPi`

Data has `varied` & `fixed` -- both are `Telescope`

- `varied` as constructor's extra arguments
- note about parameters v.s. indexes
- change the `(data)` syntax to "The Little Typer"

  - change constructor definition syntax -- `Telescope` instead of just a type

note about using constructor in pattern

- NOTE When using zero arity data constructor in pattern,
  we must write them in `()`, for example not `zero` but `(zero)`,
  otherwise we can not distinguish pattern variable from it.

use `Neutral` instead of `Values.Var` & `Values.Ap`

- code with partial evaluation is not clear with out introducing `Neutral`

formatExp -- `unfoldPi`
formatExp -- `unfoldLet`

# lazy evaluation and Codata

evaluate -- use lazy evaluation -- necessary for function that calls `Coctor`

- Values.force
- Add `Values.Lazy`

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
