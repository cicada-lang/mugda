import { matchClauses } from "../clause"
import { applyClosure } from "../closure"
import * as Values from "../value"
import { Value } from "../value"

export function doAp(target: Value, arg: Value): Value {
  if (target.kind === "Fn") {
    return applyClosure(target.retClosure, arg)
  }

  const unfolded = Values.unfoldAp(target)
  return doApUnfolded(unfolded.target, [...unfolded.args, arg])
}

export function doApUnfolded(target: Value, args: Array<Value>): Value {
  if (target.kind === "FnClauses" && target.isChecked) {
    const value = matchClauses(target.clauses, args)
    if (value !== undefined) return value
  }

  return args.reduce((value, arg) => Values.Ap(value, arg), target)
}
