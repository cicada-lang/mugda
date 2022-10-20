import { Value } from "../value"

export function unfoldAp(value: Value): {
  target: Value
  args: Array<Value>
} {
  if (value.kind === "Ap") {
    const unfolded = unfoldAp(value.target)
    return {
      target: unfolded.target,
      args: [...unfolded.args, value.arg],
    }
  }

  return { target: value, args: [] }
}
