import { Closure } from "../closure"
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
      return Values.Pi(evaluate(mod, env, exp.argType), Closure(mod, env, exp.name, exp.retType))
    }

    case "Fn": {
      return Values.Fn(Closure(mod, env, exp.name, exp.ret))
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
