import type { Exp } from "../exp"
import * as Exps from "../exp"

export function foldPi(bindings: Array<Exps.PiBinding>, retType: Exp): Exp {
  if (bindings.length === 0) return retType

  const [binding, ...restBindings] = bindings

  switch (binding["@kind"]) {
    case "PiBindingParameter": {
      return Exps.Pi(binding.name, binding.type, foldPi(restBindings, retType))
    }

    case "PiBindingParameterPositive": {
      return Exps.Pi(binding.name, binding.type, foldPi(restBindings, retType))
    }
  }
}
