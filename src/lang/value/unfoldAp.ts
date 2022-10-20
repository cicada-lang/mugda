import { Value } from "../value"

export function unfoldAp(target: Value): {
  target: Value
  args: Array<Value>
} {
  if (target.kind === "Ap") {
    const unfolded = unfoldAp(target.target)
    return {
      target: unfolded.target,
      args: [...unfolded.args, target.arg],
    }
  }

  return { target, args: [] }
}
