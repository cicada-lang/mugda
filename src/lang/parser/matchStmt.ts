import {
  cons,
  list,
  match,
  matchList,
  matchString,
  matchSymbol,
  Sexp,
  v,
} from "@cicada-lang/sexp"
import * as Exps from "../exp"
import * as Patterns from "../pattern"
import { Pattern } from "../pattern"
import { Stmt } from "../stmt"
import * as Stmts from "../stmts"
import { matchExp } from "./matchExp"

export function matchStmt(sexp: Sexp): Stmt {
  return match<Stmt>(sexp, [
    [
      ["define", v("name"), v("type"), v("exp")],
      ({ name, type, exp }, { span }) =>
        new Stmts.Define(
          matchSymbol(name),
          matchExp(type),
          matchExp(exp),
          span,
        ),
    ],
    [
      list(["fn", v("name"), v("type")], v("clauses")),
      ({ name, type, clauses }, { span }) =>
        new Stmts.Fn(
          matchSymbol(name),
          matchExp(type),
          matchList(clauses, matchClause),
          span,
        ),
    ],
    [
      list(["cofn", v("name"), v("type")], v("clauses")),
      ({ name, type, clauses }, { span }) =>
        new Stmts.Cofn(
          matchSymbol(name),
          matchExp(type),
          matchList(clauses, matchClause),
          span,
        ),
    ],
    [
      cons("import", cons(v("url"), v("entries"))),
      ({ url, entries }) =>
        new Stmts.Import(
          matchString(url),
          matchList(entries, matchImportEntry),
        ),
    ],
    [v("exp"), ({ exp }, { span }) => new Stmts.Compute(matchExp(exp), span)],
  ])
}

function matchImportEntry(sexp: Sexp): Stmts.ImportEntry {
  return match<Stmts.ImportEntry>(sexp, [
    [
      ["rename", v("name"), v("rename")],
      ({ name, rename }) => ({
        name: matchSymbol(name),
        rename: matchSymbol(rename),
      }),
    ],
    [v("name"), ({ name }) => ({ name: matchSymbol(name) })],
  ])
}

function matchClause(sexp: Sexp): Exps.Clause {
  return match(sexp, [
    [
      [v("patterns"), v("body")],
      ({ patterns, body }) =>
        Exps.Clause(matchList(patterns, matchPattern), matchExp(body)),
    ],
  ])
}

function matchPattern(sexp: Sexp): Pattern {
  return match<Pattern>(sexp, [
    [
      ["#", v("pattern")],
      ({ pattern }) => Patterns.Inaccessible(matchPattern(pattern)),
    ],
    [
      cons(v("name"), v("args")),
      ({ name, args }) =>
        Patterns.Ctor(matchSymbol(name), matchList(args, matchPattern)),
    ],
    [v("name"), ({ name }) => Patterns.Var(matchSymbol(name))],
  ])
}
