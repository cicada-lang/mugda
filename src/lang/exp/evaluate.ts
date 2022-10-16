import * as Actions from "../actions"
import { Closure } from "../closure"
import { evaluateDenotation } from "../denotation"
import { Env, EnvCons, lookupValueInEnv } from "../env"
import * as Errors from "../errors"
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
      const value = lookupValueInEnv(env, exp.name)
      if (value !== undefined) {
        return value
      }

      const denotation = mod.denotations.get(exp.name)
      if (denotation !== undefined) {
        return evaluateDenotation(mod, env, exp.name, denotation)
      }

      throw new Errors.EvaluationError(`Undefined name: ${exp.name}`)
    }

    case "Pi": {
      return Values.Pi(evaluate(mod, env, exp.argType), Closure(mod, env, exp.name, exp.retType))
    }

    case "Fn": {
      return Values.Fn(Closure(mod, env, exp.name, exp.ret))
    }

    case "Ap": {
      return Actions.doAp(evaluate(mod, env, exp.target), evaluate(mod, env, exp.arg))
    }

    case "Let": {
      env = EnvCons(exp.name, evaluate(mod, env, exp.exp), env)
      return evaluate(mod, env, exp.ret)
    }

    case "Type": {
      return Values.Type()
    }
  }
}
