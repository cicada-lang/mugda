import { Env } from "../env"
import { Exp } from "../exp"
import { Value } from "../value"

/**

   NOTE The paper do not use `Core`, we `evaluate` `Exp` directly.

**/

export function evaluate(env: Env, core: Exp): Value {
  throw new Error("TODO")
}
