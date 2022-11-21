import { closureApply } from "../closure"
import * as Errors from "../errors"
import { evaluate } from "../evaluate"
import * as Neutrals from "../neutral"
import { matchPatterns } from "../pattern"
import type { Value } from "../value"
import * as Values from "../value"

export function doAp(target: Value, arg: Value): Value {
  switch (target["@kind"]) {
    case "UntypedNeutral": {
      return Values.UntypedNeutral(Neutrals.Ap(target.neutral, arg))
    }

    case "Fn": {
      return closureApply(target.retClosure, arg)
    }

    case "FnMatch": {
      const args = [...target.args, arg]
      if (target.arity === args.length) {
        for (const clause of target.clauses) {
          const env = matchPatterns(clause.env, clause.patterns, args)
          if (env !== undefined) {
            return evaluate(clause.mod, env, clause.body)
          }
        }

        throw new Errors.EvaluationError(`Mattern mismatch`)
      }

      return { ...target, args: [...target.args, arg] }
    }

    case "Data": {
      return { ...target, args: [...target.args, arg] }
    }

    case "Ctor": {
      return { ...target, args: [...target.args, arg] }
    }

    default: {
      throw new Errors.EvaluationError(`Can not apply ${target["@kind"]}`)
    }
  }
}
