# Mugda

An implementation of the [Mugda paper](docs/papers/termination-checking-for-a-dependently-typed-language--karl-mehltretter.pdf) by Karl Mehltretter.

- Use [S-expression](https://github.com/cicada-lang/sexp) as overall syntax, to expression ideas clearly.
- Close to the paper, so that the code is easy to be reviewed with the paper.
- Add comments about alternative ways to implement the same ideas.
- Do not follow bad naming conventions of the paper.

## Usages

### Use our server

[**mugda-server:**](https://github.com/cicada-lang/mugda-server) A server that can run whereabouts code.

Run a file:

```bash
curl https://mu.cic.run --data-binary @docs/tests/basic/let.test.mu
```

Run multiline text (bash and zsh):

```bash
curl https://mu.cic.run --data-binary @- << END

(define id (Pi ([A Type]) (-> A A))
  (lambda (A) (lambda (a) a)))

((id id) (id id))

END
```

### Command line tool

Install it by the following command:

```
npm install -g @cicada-lang/mugda.sexp
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
mu run docs/tests/basic/id.test.mu
```

Run a file and watch file change:

```sh
mu run docs/tests/basic/id.test.mu --watch
```

Run a URL:

- All files in this repo, can be fetched from: [`https://cdn.mu.cic.run/<path>`](https://cdn.mu.cic.run), <br/>
  and any other http server that serves `.mu` code would also work.

```sh
mu run https://cdn.mu.cic.run/docs/tests/basic/id.test.mu
```

## Notes

### Zero arity data constructor

When using zero arity data constructor in pattern, we must write them in `()`.
For example, we should not write `zero` but write `(zero)`,
otherwise the interpreter can not distinguish pattern variable
from this zero arity data constructor.

## Examples

TODO

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

It is assumed that all non draft PRs are ready to be merged.
If your PR is not ready to be merged yet, please make it a draft PR:

- [Creating draft PR](https://github.blog/2019-02-14-introducing-draft-pull-requests)
- [Changing a PR to draft](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)

During the development of your PR, you can make use of
the [TODO.md](TODO.md) file to record ideas temporarily,
and this file should be clean again at the end of your development.

## License

[GPLv3](LICENSE)
