import { applyClosure } from "../closure"
import * as Values from "../value"
import { Value } from "../value"

export function arity(value: Value): number {
  if (value.kind === "Pi") {
    const retType = applyClosure(
      value.retTypeClosure,
      Values.Var(value.retTypeClosure.name),
    )
    return arity(retType) + 1
  } else {
    return 0
  }
}
