import * as Exps from "../exp"
import { Exp } from "../exp"

export function unfoldLet(exp: Exp): {
  bindings: Array<Exps.LetBinding>
  ret: Exp
} {
  switch (exp.kind) {
    case "Let": {
      const unfolded = unfoldLet(exp.ret)
      const binding = Exps.LetBindingTyped(exp.name, exp.exp, exp.type)
      return { bindings: [binding, ...unfolded.bindings], ret: unfolded.ret }
    }

    case "LetUnfolded": {
      const unfolded = unfoldLet(exp.ret)
      return {
        bindings: [...exp.bindings, ...unfolded.bindings],
        ret: unfolded.ret,
      }
    }

    default: {
      return { bindings: [], ret: exp }
    }
  }
}
