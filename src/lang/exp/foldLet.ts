import type { Exp } from "../exp"
import * as Exps from "../exp"

export function foldLet(bindings: Array<Exps.LetBinding>, ret: Exp): Exp {
  if (bindings.length === 0) return ret

  const [binding, ...restBindings] = bindings

  switch (binding.kind) {
    case "LetBindingTyped": {
      return Exps.Let(
        binding.name,
        binding.type,
        binding.exp,
        foldLet(restBindings, ret),
      )
    }
  }
}
