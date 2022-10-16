import { applyClosure } from "../closure"
import * as Values from "../value"
import { Value } from "../value"

export function doAp(target: Value, arg: Value): Value {
  if (target.kind === "Fn") {
    return applyClosure(target.retClosure, arg)
  }

  // case "Fn": {
  //   throw new Error("TODO")
  // }

  // case "RefFn": {
  //   throw new Error("TODO")
  // }

  // case "RefCtor": {
  //   return target.throw new Error("TODO")
  // }

  return Values.Ap(target, arg)
}

export function doApUnfolded(target: Value, args: Array<Value>): Value {
  throw new Error()
}
