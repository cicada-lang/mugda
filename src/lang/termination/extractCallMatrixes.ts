import * as Exps from "../exp"
import { Exp } from "../exp"
import { Mod } from "../mod"
import { Pattern } from "../pattern"
import { CallMatrix, createCallMatrix } from "../termination"

export function extractCallMatrixes(
  mod: Mod,
  names: Map<string, number>,
  left: string,
  patterns: Array<Pattern>,
  exp: Exp,
): Array<CallMatrix> {
  switch (exp.kind) {
    case "Var": {
      const name = exp.name
      const arity = names.get(name)
      if (arity) {
        return [createCallMatrix(mod, left, patterns, name, arity, [])]
      } else {
        return []
      }
    }

    case "Pi": {
      return [
        ...extractCallMatrixes(mod, names, left, patterns, exp.argType),
        ...extractCallMatrixes(mod, names, left, patterns, exp.retType),
      ]
    }

    case "PiUnfolded": {
      return extractCallMatrixes(
        mod,
        names,
        left,
        patterns,
        Exps.foldPi(exp.bindings, exp.retType),
      )
    }

    case "Arrow": {
      return exp.types.flatMap((type) =>
        extractCallMatrixes(mod, names, left, patterns, type),
      )
    }

    case "Fn": {
      /**
         TODO We should try to write test to show this case introduces scope BUG.
      **/
      return extractCallMatrixes(mod, names, left, patterns, exp.ret)
    }

    case "Ap":
    case "ApUnfolded": {
      const unfolded = Exps.unfoldAp(exp)
      return extractCallMatrixesFromApUnfolded(
        mod,
        names,
        left,
        patterns,
        unfolded.target,
        unfolded.args,
      )
    }

    case "Let": {
      /**
         TODO We should try to write test to show this case introduces scope BUG.
      **/

      /**
         NOTE We don't have to extract `CallMatrix` in the type,
         because it is only evaluated during type-checking of the function.
      **/

      return [
        ...extractCallMatrixes(mod, names, left, patterns, exp.exp),
        ...extractCallMatrixes(mod, names, left, patterns, exp.ret),
      ]
    }

    case "LetUnfolded": {
      return extractCallMatrixes(
        mod,
        names,
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

function extractCallMatrixesFromApUnfolded(
  mod: Mod,
  names: Map<string, number>,
  left: string,
  patterns: Array<Pattern>,
  target: Exp,
  args: Array<Exp>,
): Array<CallMatrix> {
  switch (target.kind) {
    case "Var": {
      const name = target.name
      const arity = names.get(name)
      if (arity) {
        return [
          createCallMatrix(mod, left, patterns, name, arity, args),
          ...args.flatMap((arg) =>
            extractCallMatrixes(mod, names, left, patterns, arg),
          ),
        ]
      }
    }

    default: {
      return [
        ...extractCallMatrixes(mod, names, left, patterns, target),
        ...args.flatMap((arg) =>
          extractCallMatrixes(mod, names, left, patterns, arg),
        ),
      ]
    }
  }
}
