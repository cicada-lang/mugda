import { applyClosure } from "../closure"
import * as Values from "../value"
import { formatValue, Value } from "../value"

export function unfoldFormatFn(value: Value): {
  bindings: Array<string>
  ret: string
} {
  if (value.kind === "Fn") {
    const name = value.retClosure.name
    const binding = name
    const ret = applyClosure(value.retClosure, Values.Var(name))
    const unfolded = unfoldFormatFn(ret)
    return {
      bindings: [binding, ...unfolded.bindings],
      ret: unfolded.ret,
    }
  }

  return { bindings: [], ret: formatValue(value) }
}
