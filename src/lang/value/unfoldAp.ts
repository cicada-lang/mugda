import { Value } from "../value"

export function unfoldAp(target: Value, arg: Value): { target: Value; args: Array<Value> } {
  if (target.kind === "Ap") {
    const unfolded = unfoldAp(target.target, target.arg)
    return {
      target: unfolded.target,
      args: [...unfolded.args, arg],
    }
  }

  return { target, args: [arg] }
}
