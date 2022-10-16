import { Env } from "../env"
import { Exp } from "../exp"
import { Mod } from "../mod"
import * as Values from "../value"
import { Value } from "../value"

/**

   NOTE The paper do not use `Core`, we `evaluate` `Exp` directly.

**/

export function evaluate(mod: Mod, env: Env, exp: Exp): Value {
  switch (exp.kind) {
    case "Var": {
      throw new Error("TODO")
    }

    case "Pi": {
      throw new Error("TODO")
    }

    case "Fn": {
      throw new Error("TODO")
    }

    case "Ap": {
      throw new Error("TODO")
    }

    case "Let": {
      throw new Error("TODO")
    }

    case "Type": {
      return Values.Type()
    }
  }
}
