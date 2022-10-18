import {
  cons,
  match,
  matchList,
  matchString,
  matchSymbol,
  Sexp,
  v,
} from "@cicada-lang/sexp"
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
