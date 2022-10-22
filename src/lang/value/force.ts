import * as Actions from "../actions"
import { evaluate } from "../exp"
import { Value } from "../value"

export function force(value: Value): Value {
  switch (value.kind) {
    case "Lazy": {
      return force(evaluate(value.env, value.exp))
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

export function deepForce(value: Value): Value {
  value = force(value)

  switch (value.kind) {
    case "Ap": {
      const result = Actions.doAp(deepForce(value.target), deepForce(value.arg))
      return result.kind === "Ap" ? result : deepForce(result)
    }

    default: {
      return value
    }
  }
}
