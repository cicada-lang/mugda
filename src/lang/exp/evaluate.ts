import * as Actions from "../actions"
import { Closure } from "../closure"
import { Env, EnvCons, lookupValueInEnv } from "../env"
import * as Errors from "../errors"
import * as Exps from "../exp"
import { Exp } from "../exp"
import * as Values from "../value"
import { Value } from "../value"

/**

   NOTE The paper do not use `Core`, we `evaluate` `Exp` directly.

**/

export function evaluate(env: Env, exp: Exp): Value {
  switch (exp.kind) {
    case "Var": {
      const value = lookupValueInEnv(env, exp.name)
      if (value !== undefined) {
        return value
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
        evaluate(env, exp.argType),
        Closure(env, exp.name, exp.retType),
      )
    }

    case "PiUnfolded": {
      return evaluate(env, Exps.foldPi(exp.bindings, exp.retType))
    }

    case "Arrow": {
      const [headType, ...restTypes] = exp.types
      return evaluate(env, Exps.foldArrow(headType, restTypes))
    }

    case "Fn": {
      return Values.Fn(Closure(env, exp.name, exp.ret))
    }

    case "Ap": {
      return Actions.doAp(evaluate(env, exp.target), Values.Lazy(env, exp.arg))
    }

    case "ApUnfolded": {
      return evaluate(env, Exps.foldAp(exp.target, exp.args))
    }

    case "Let": {
      env = EnvCons(exp.name, evaluate(env, exp.exp), env)
      return evaluate(env, exp.ret)
    }

    case "LetUnfolded": {
      return evaluate(env, Exps.foldLet(exp.bindings, exp.ret))
    }
  }
}
