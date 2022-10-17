import { applyClosure } from "../closure"
import * as Values from "../value"
import { Value } from "../value"

export function doAp(target: Value, arg: Value): Value {
  if (target.kind === "Fn") {
    return applyClosure(target.retClosure, arg)
  }

  const unfolded = Values.unfoldAp(target, arg)
  return doApUnfolded(unfolded.target, unfolded.args)
}

export function doApUnfolded(target: Value, args: Array<Value>): Value {
  // TODO
  return args.reduce((value, arg) => Values.Ap(value, arg), target)
}
