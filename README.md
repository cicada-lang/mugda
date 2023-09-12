# Mugda

> Recursion is not an option.
>
> -- ["The Little Typer"](https://mitpress.mit.edu/9780262536431/the-little-typer)

An implementation of the Mugda paper -- ["Termination Checking for a Dependently Typed Language"](docs/papers/termination-checking-for-a-dependently-typed-language--karl-mehltretter.pdf), 2007, by Karl Mehltretter.

The "Mu" of the name "Mugda"
comes from [μ-operator (mu-operator)](https://en.wikipedia.org/wiki/%CE%9C_operator)
of [general recursive function](https://en.wikipedia.org/wiki/General_recursive_function).

## Notes

### Zero arity data constructor

When using zero arity data constructor, we must write them in `()`.
For example, `zero` and `(zero)` are the same.

But when using zero arity data constructor in pattern, we must write them in `()`.
For example, we should not write `zero` but write `(zero)`,
otherwise the interpreter can not distinguish pattern variable
from this zero arity data constructor.

### Syntax of inductive datatype definition

The syntax of inductive datatype definition -- `(data)`,
is learnt from ["The Little Typer"](https://mitpress.mit.edu/9780262536431/the-little-typer).

## Usages

### Command line tool

Install it by the following command:

```sh
npm install -g @cicada-lang/mugda
```

The command line program is called `mu`.

open a REPL:

```sh
mu repl
```

or just:

```sh
mu
```

Run a file:

```sh
mu run tests/basic/id.test.mu
```

Run a file and watch file change:

```sh
mu run tests/basic/id.test.mu --watch
```

## Examples

Please see [**tests/**](tests/) and [**std/**](std/) for more examples.

### Boolean

```scheme
(data Boolean () ()
  [true () Boolean]
  [false () Boolean])

(fn if (Pi ([A Type]) (-> Boolean A A A))
  [(A (true) a b) a]
  [(A (false) a b) b])

(define and (-> Boolean Boolean Boolean)
  (lambda (a b)
    (if Boolean a b false)))

(define or (-> Boolean Boolean Boolean)
  (lambda (a b)
    (if Boolean a true b)))

(and true true)
(and true false)
(and false true)
(and false false)

(or true true)
(or true false)
(or false true)
(or false false)
```

### Nat

```scheme
(data Nat () ()
  [zero () Nat]
  [add1 ([prev Nat]) Nat])

(fn add (-> Nat Nat Nat)
  [(x (zero)) x]
  [(x (add1 y)) (add1 (add x y))])

add
(add (add1 zero))
(add (add1 zero) (add1 zero))
```

### List

```scheme
(data List ([+ A Type]) ()
  [null () (List A)]
  [cons ([head A] [tail (List A)]) (List A)])

(import "../nat/index.mu" Nat zero add1)

(fn length (Pi ([A Type]) (-> (List A) Nat))
  [(A (null A)) zero]
  [(A (cons A head tail)) (add1 (length A tail))])

(length Nat (null Nat))
(length Nat (cons Nat zero (null Nat)))
(length Nat (cons Nat zero (cons Nat zero (null Nat))))
```

## Development

```sh
npm install           # Install dependencies
npm run build         # Compile `src/` to `lib/`
npm run build:watch   # Watch the compilation
npm run format        # Format the code
npm run test          # Run test
npm run test:watch    # Watch the testing
```

## Thanks

Thank you, Karl Mehltretter, for writing this paper.

## Contributions

To make a contribution, fork this project and create a pull request.

Please read the [STYLE-GUIDE.md](STYLE-GUIDE.md) before you change the code.

Remember to add yourself to [AUTHORS](AUTHORS).
Your line belongs to you, you can write a little
introduction to yourself but not too long.

## License

[GPLv3](LICENSE)
