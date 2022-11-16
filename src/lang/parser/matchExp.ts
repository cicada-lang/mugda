import {
  cons,
  list,
  match,
  matchList,
  matchSymbol,
  Sexp,
  v,
} from "@cicada-lang/sexp"
import type { Exp } from "../exp"
import * as Exps from "../exp"

export function matchExp(sexp: Sexp): Exp {
  return match<Exp>(sexp, [
    [
      ["lambda", v("names"), v("exp")],
      ({ names, exp }, { span }) =>
        matchList(names, matchSymbol).reduceRight(
          (fn, name) => Exps.Fn(name, fn, span),
          matchExp(exp),
        ),
    ],
    [
      ["Pi", v("bindings"), v("retType")],
      ({ bindings, retType }, { span }) =>
        Exps.PiUnfolded(
          matchList(bindings, matchPiBinding),
          matchExp(retType),
          span,
        ),
    ],
    [
      list(["->", v("type")], v("types")),
      ({ type, types }, { span }) =>
        Exps.Arrow([matchExp(type), ...matchList(types, matchExp)], span),
    ],
    [
      ["let", v("bindings"), v("ret")],
      ({ bindings, ret }, { span }) =>
        Exps.LetUnfolded(
          matchList(bindings, matchLetBinding),
          matchExp(ret),
          span,
        ),
    ],
    [
      cons(v("target"), v("args")),
      ({ target, args }, { span }) =>
        Exps.ApUnfolded(matchExp(target), matchList(args, matchExp), span),
    ],
    [v("name"), ({ name }, { span }) => Exps.Var(matchSymbol(name), span)],
  ])
}

function matchPiBinding(sexp: Sexp): Exps.PiBinding {
  return match<Exps.PiBinding>(sexp, [
    [
      [v("name"), v("type")],
      ({ name, type }) =>
        Exps.PiBindingParameter(matchSymbol(name), matchExp(type)),
    ],
    [
      ["+", v("name"), v("type")],
      ({ name, type }) =>
        Exps.PiBindingParameterPositive(matchSymbol(name), matchExp(type)),
    ],
  ])
}

function matchLetBinding(sexp: Sexp): Exps.LetBinding {
  return match<Exps.LetBinding>(sexp, [
    [
      [v("name"), v("exp"), v("type")],
      ({ name, type, exp }) =>
        Exps.LetBindingTyped(matchSymbol(name), matchExp(type), matchExp(exp)),
    ],
  ])
}
