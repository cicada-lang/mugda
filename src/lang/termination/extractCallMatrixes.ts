import { Exp } from "../exp"
import { Mod } from "../mod"
import { Pattern } from "../pattern"
import { CallMatrix } from "../termination"

export function extractCallMatrixes(
  mod: Mod,
  recursiveNames: Set<string>,
  left: string,
  patterns: Array<Pattern>,
  exp: Exp,
): Array<CallMatrix> {
  switch (exp.kind) {
    case "Var": {
    }

    case "Pi": {
    }

    case "PiUnfolded": {
    }

    case "Arrow": {
    }

    case "Fn": {
    }

    case "Ap": {
    }

    case "ApUnfolded": {
    }

    case "Let": {
    }

    case "LetUnfolded": {
    }

    default: {
      return []
    }
  }
}
