# 2 Semantics of Mugda expressions

Telescope

Constructor definitions

Clause definitions

Stmt

- Data
- Codata
- Let
- Mutual fun
- Mutual cofun

Value

- Pi
- Fn
- Ap
- Atom
  - k -- generic value // neutral var?
    "A generic value k ∈ N represents the computed value of a variable during"
  - Type
  - c -- constructor name
  - f -- function name
  - D -- data name

Signature

- A global map, from name to different kinds of denotations.

  We can make them `Value` and only map to `Value`,
  or we can use `Den` -- like in EOPL.

  - Σ : F → VAL × CLAUSE∗ × B

    mapping a function constant to its type (as a value), the clauses and a
    flag to indicate whether the clauses have been type-checked.

  - Σ : L → EXPR × VAL

    mapping a global let constant to the expression and its type.

  - Σ : C → VAL

    mapping a constructor constant to its type.

  - Σ : D → VAL × N

    mapping a data type constant to its type and arity.

# 2.4 Example programs

- Identity function
- Booleans
- Natural numbers
- Lists
- Finitely branching trees
- Vectors
- Equality
- Streams

# 3 Type-Checking

- Scope-Checking
- Bidirectional type-checking
- Let declarations
- Data type declarations
  - Checking data and constructor types
  - Strict positivity
  - Checking the whole declaration
- Function declarations
  - Syntactic checks for patterns
  - Coverage of pattern matching
  - Preliminaries
  - Checking accessible part of patterns
  - Checking inaccessible patterns
  - Checking the whole declaration
- Mugda programs

# 4 Termination-Checking

- Motivation
- Matrix notation
- Relating pattern and expressions
- Applying the size-change principle
- Examples
  - Addition
  - Mutual even and odd
  - Brouwer ordinals
- Excursion: Extending the order
  - Examples
- List reversion: Vectors to the rescue

# 5 Sized data types
