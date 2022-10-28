import { applyClosure } from "../closure"
import { evaluate } from "../exp"
import { matchPatterns } from "../pattern"
import * as Values from "../value"
import { Value } from "../value"

export function doAp(target: Value, arg: Value): Value {
  const unfolded = Values.unfoldAp(target)
  return doApUnfolded(unfolded.target, [...unfolded.args, arg])
}

export function doApUnfolded(target: Value, args: Array<Value>): Value {
  if (target.kind === "Fn") {
    if (args.length === 0) return target
    const [arg, ...restArgs] = args
    return doApUnfolded(applyClosure(target.retClosure, arg), restArgs)
  }

  if (
    target.kind === "FnMatch" &&
    target.arity <= args.length &&
    target.isChecked
  ) {
    for (const clause of target.clauses) {
      const env = matchPatterns(clause.env, clause.patterns, args)
      if (env !== undefined) {
        const restArgs = args.slice(clause.patterns.length)
        return doApUnfolded(evaluate(clause.mod, env, clause.body), restArgs)
      }
    }
  }

  return args.reduce((value, arg) => Values.Ap(value, arg), target)
}
