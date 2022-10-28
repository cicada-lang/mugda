import * as Actions from "../actions"
import { evaluate } from "../exp"
import * as Values from "../value"
import { Value } from "../value"

export function deepForce(value: Value): Value {
  value = Values.force(value)

  switch (value.kind) {
    case "Lazy": {
      return deepForce(evaluate(value.mod, value.env, value.exp))
    }

    case "FnMatch": {
      const result = Actions.doApUnfolded(value, [])
      return result.kind === "FnMatch" ? result : deepForce(result)
    }

    case "Ap": {
      const unfolded = Values.unfoldAp(value)
      const target = deepForce(unfolded.target)
      if (target.kind === "Coctor") return value
      const result = Actions.doAp(deepForce(value.target), deepForce(value.arg))
      return result.kind === "Ap" ? result : deepForce(result)
    }

    default: {
      return value
    }
  }
}
