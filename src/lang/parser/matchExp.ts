import { cons, match, matchList, matchSymbol, Sexp, v } from "@cicada-lang/sexp"
import * as Exps from "../exp"
import { Exp } from "../exp"

export function matchExp(sexp: Sexp): Exp {
  return match<Exp>(sexp, [
    [
      ["lambda", v("names"), v("exp")],
      ({ names, exp }) =>
        matchList(names, matchSymbol).reduceRight(
          (fn, name) => Exps.Fn(name, fn),
          matchExp(exp),
        ),
    ],
    [
      ["Pi", v("bindings"), v("retType")],
      ({ bindings, retType }) =>
        Exps.PiUnfolded(matchList(bindings, matchPiBinding), matchExp(retType)),
    ],
    [
      ["let", v("bindings"), v("ret")],
      ({ bindings, ret }) =>
        Exps.LetUnfolded(matchList(bindings, matchLetBinding), matchExp(ret)),
    ],
    [
      cons(v("target"), v("args")),
      ({ target, args }) =>
        matchList(args, matchExp).reduce(
          (result, arg) => Exps.Ap(result, arg),
          matchExp(target),
        ),
    ],
    [v("name"), ({ name }) => Exps.Var(matchSymbol(name))],
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
