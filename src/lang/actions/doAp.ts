import { applyClosure } from "../closure"
import * as Values from "../value"
import { matchClause, Value } from "../value"

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

  if (target.kind === "FnMatch" && target.isChecked) {
    for (const clause of target.clauses) {
      const value = matchClause(clause.env, clause.patterns, clause.body, args)
      if (value !== undefined) return value
    }
  }

  return args.reduce((value, arg) => Values.Ap(value, arg), target)
}
