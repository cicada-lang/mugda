import type { Closure } from "../closure"
import { EnvCons } from "../env"
import { evaluate } from "../exp"
import type { Value } from "../value"

export function applyClosure(closure: Closure, arg: Value): Value {
  return evaluate(
    closure.mod,
    EnvCons(closure.name, arg, closure.env),
    closure.body,
  )
}
