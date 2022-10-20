import { Exp } from "../exp"

export function unfoldAp(exp: Exp): { target: Exp; args: Array<Exp> } {
  if (exp.kind === "Ap") {
    const unfolded = unfoldAp(exp.target)
    return { target: unfolded.target, args: [...unfolded.args, exp.arg] }
  } else {
    return { target: exp, args: [] }
  }
}
