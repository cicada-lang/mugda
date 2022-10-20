import { applyClosure } from "../closure"
import * as Values from "../value"
import { formatValue, Value } from "../value"

export function unfoldFormatPi(value: Value): {
  bindings: Array<string>
  retType: string
} {
  if (value.kind === "Pi") {
    const name = value.retTypeClosure.name
    const binding = `(${name} ${formatValue(value.argType)})`
    const retType = applyClosure(value.retTypeClosure, Values.Var(name))
    const unfolded = unfoldFormatPi(retType)
    return {
      bindings: [binding, ...unfolded.bindings],
      retType: unfolded.retType,
    }
  }

  return { bindings: [], retType: formatValue(value) }
}
