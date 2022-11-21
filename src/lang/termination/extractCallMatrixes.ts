import type { Exp } from "../exp"
import * as Exps from "../exp"
import type { Mod } from "../mod"
import type { Pattern } from "../pattern"
import { CallMatrix, createCallMatrix } from "../termination"

export function extractCallMatrixes(
  mod: Mod,
  left: string,
  clause: Exps.Clause,
): Array<CallMatrix> {
  return extractCallMatrixesAux(mod, left, clause.patterns, clause.body)
}

function extractCallMatrixesAux(
  mod: Mod,
  left: string,
  patterns: Array<Pattern>,
  exp: Exp,
): Array<CallMatrix> {
  switch (exp["@kind"]) {
    case "Var": {
      const name = exp.name
      const arity = mod.arities.get(name)
      if (arity) {
        return [createCallMatrix(mod, left, patterns, name, arity, [])]
      } else {
        return []
      }
    }

    case "Pi": {
      /**
         TODO Scope BUG.
      **/

      return [
        ...extractCallMatrixesAux(mod, left, patterns, exp.argType),
        ...extractCallMatrixesAux(mod, left, patterns, exp.retType),
      ]
    }

    case "PiUnfolded": {
      return extractCallMatrixesAux(
        mod,
        left,
        patterns,
        Exps.foldPi(exp.bindings, exp.retType),
      )
    }

    case "Arrow": {
      return exp.types.flatMap((type) =>
        extractCallMatrixesAux(mod, left, patterns, type),
      )
    }

    case "Fn": {
      /**
         TODO Scope BUG.
      **/

      return extractCallMatrixesAux(mod, left, patterns, exp.ret)
    }

    case "Ap":
    case "ApUnfolded": {
      const unfolded = Exps.unfoldAp(exp)
      return extractCallMatrixesAuxFromApUnfolded(
        mod,
        left,
        patterns,
        unfolded.target,
        unfolded.args,
      )
    }

    case "Let": {
      /**
         TODO Scope BUG.
      **/

      /**
         NOTE We don't have to extract `CallMatrix` in the type,
         because it is only evaluated during type-checking of the function.
      **/

      return [
        ...extractCallMatrixesAux(mod, left, patterns, exp.exp),
        ...extractCallMatrixesAux(mod, left, patterns, exp.ret),
      ]
    }

    case "LetUnfolded": {
      return extractCallMatrixesAux(
        mod,
        left,
        patterns,
        Exps.foldLet(exp.bindings, exp.ret),
      )
    }

    default: {
      return []
    }
  }
}

function extractCallMatrixesAuxFromApUnfolded(
  mod: Mod,
  left: string,
  patterns: Array<Pattern>,
  target: Exp,
  args: Array<Exp>,
): Array<CallMatrix> {
  switch (target["@kind"]) {
    case "Var": {
      const name = target.name
      const arity = mod.arities.get(name)
      if (arity) {
        return [
          createCallMatrix(mod, left, patterns, name, arity, args),
          ...args.flatMap((arg) =>
            extractCallMatrixesAux(mod, left, patterns, arg),
          ),
        ]
      }
    }

    default: {
      return [
        ...extractCallMatrixesAux(mod, left, patterns, target),
        ...args.flatMap((arg) =>
          extractCallMatrixesAux(mod, left, patterns, arg),
        ),
      ]
    }
  }
}
