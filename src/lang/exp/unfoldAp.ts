import type { Exp } from "../exp"

export function unfoldAp(exp: Exp): {
  target: Exp
  args: Array<Exp>
} {
  switch (exp.kind) {
    case "Ap": {
      const unfolded = unfoldAp(exp.target)
      return { target: unfolded.target, args: [...unfolded.args, exp.arg] }
    }

    case "ApUnfolded": {
      const unfolded = unfoldAp(exp.target)
      return { target: unfolded.target, args: [...unfolded.args, ...exp.args] }
    }

    default: {
      return { target: exp, args: [] }
    }
  }
}
