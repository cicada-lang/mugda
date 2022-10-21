import * as Exps from "../exp"
import { Exp } from "../exp"

export function unfoldPi(exp: Exp): {
  bindings: Array<Exps.PiBinding>
  retType: Exp
} {
  if (exp.kind === "Pi") {
    const unfolded = unfoldPi(exp.retType)
    const binding = Exps.PiBindingParameter(exp.name, exp.argType)
    return {
      bindings: [binding, ...unfolded.bindings],
      retType: unfolded.retType,
    }
  } else {
    return { bindings: [], retType: exp }
  }
}
