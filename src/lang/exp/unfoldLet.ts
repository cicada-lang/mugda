import * as Exps from "../exp"
import { Exp } from "../exp"

export function unfoldLet(exp: Exp): {
  bindings: Array<Exps.LetBinding>
  ret: Exp
} {
  if (exp.kind === "Let") {
    const unfolded = unfoldLet(exp.ret)
    const binding = Exps.LetBindingTyped(exp.name, exp.exp, exp.type)
    return { bindings: [binding, ...unfolded.bindings], ret: unfolded.ret }
  } else {
    return { bindings: [], ret: exp }
  }
}
