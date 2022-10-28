import * as Actions from "../actions"
import { Closure } from "../closure"
import { Env, EnvCons, lookupValueInEnv } from "../env"
import * as Errors from "../errors"
import * as Exps from "../exp"
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

      const modValue = lookupValueInEnv(mod.env, exp.name)
      if (modValue !== undefined) {
        return modValue
      }

      if (exp.span) {
        throw new Errors.ElaborationError(
          `Undefined name: ${exp.name}`,
          exp.span,
        )
      } else {
        throw new Errors.EvaluationError(`Undefined name: ${exp.name}`)
      }
    }

    case "Pi": {
      return Values.Pi(
        evaluate(mod, env, exp.argType),
        Closure(mod, env, exp.name, exp.retType),
      )
    }

    case "PiUnfolded": {
      return evaluate(mod, env, Exps.foldPi(exp.bindings, exp.retType))
    }

    case "Arrow": {
      const [headType, ...restTypes] = exp.types
      return evaluate(mod, env, Exps.foldArrow(headType, restTypes))
    }

    case "Fn": {
      return Values.Fn(Closure(mod, env, exp.name, exp.ret))
    }

    case "Ap": {
      return Actions.doAp(
        evaluate(mod, env, exp.target),
        Values.Lazy(mod, env, exp.arg),
      )
    }

    case "ApUnfolded": {
      return evaluate(mod, env, Exps.foldAp(exp.target, exp.args))
    }

    case "Let": {
      env = EnvCons(exp.name, evaluate(mod, env, exp.exp), env)
      return evaluate(mod, env, exp.ret)
    }

    case "LetUnfolded": {
      return evaluate(mod, env, Exps.foldLet(exp.bindings, exp.ret))
    }
  }
}
