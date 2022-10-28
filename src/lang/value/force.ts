import * as Actions from "../actions"
import { evaluate } from "../exp"
import { Value } from "../value"

export function force(value: Value): Value {
  switch (value.kind) {
    case "Lazy": {
      return force(evaluate(value.mod, value.env, value.exp))
    }

    case "FnMatch": {
      const result = Actions.doApUnfolded(value, [])
      return result.kind === "FnMatch" ? result : force(result)
    }

    case "Ap": {
      const result = Actions.doAp(force(value.target), value.arg)
      return result.kind === "Ap" ? result : force(result)
    }

    default: {
      return value
    }
  }
}
