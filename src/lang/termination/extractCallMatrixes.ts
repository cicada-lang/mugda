import * as Exps from "../exp"
import { Exp } from "../exp"
import { Mod } from "../mod"
import { Pattern } from "../pattern"
import { CallMatrix, unionCallMatrixes } from "../termination"

export function extractCallMatrixes(
  mod: Mod,
  recursiveNames: Set<string>,
  left: string,
  patterns: Array<Pattern>,
  exp: Exp,
): Array<CallMatrix> {
  switch (exp.kind) {
    case "Var": {
      throw new Error("TODO")
    }

    case "Pi": {
      return unionCallMatrixes(
        extractCallMatrixes(mod, recursiveNames, left, patterns, exp.argType),
        extractCallMatrixes(mod, recursiveNames, left, patterns, exp.retType),
      )
    }

    case "PiUnfolded": {
      return extractCallMatrixes(
        mod,
        recursiveNames,
        left,
        patterns,
        Exps.foldPi(exp.bindings, exp.retType),
      )
    }

    case "Arrow": {
      return exp.types.flatMap((type) =>
        extractCallMatrixes(mod, recursiveNames, left, patterns, type),
      )
    }

    case "Fn": {
      /**
         TODO We should try to write test to show this case introduces scope BUG.
      **/
      return extractCallMatrixes(mod, recursiveNames, left, patterns, exp.ret)
    }

    case "Ap": {
      throw new Error("TODO")
    }

    case "ApUnfolded": {
      throw new Error("TODO")
    }

    case "Let": {
      /**
         TODO We should try to write test to show this case introduces scope BUG.
      **/

      /**
         NOTE We don't have to extract `CallMatrix` in the type,
         because it is only evaluated during type-checking of the function.
      **/

      return unionCallMatrixes(
        extractCallMatrixes(mod, recursiveNames, left, patterns, exp.exp),
        extractCallMatrixes(mod, recursiveNames, left, patterns, exp.ret),
      )
    }

    case "LetUnfolded": {
      return extractCallMatrixes(
        mod,
        recursiveNames,
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
