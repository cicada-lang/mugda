import { formatValue, Value } from "../value"

export function unfoldFormatAp(target: Value): {
  target: string
  args: Array<string>
} {
  if (target.kind === "Ap") {
    const unfolded = unfoldFormatAp(target.target)
    return {
      target: unfolded.target,
      args: [...unfolded.args, formatValue(target.arg)],
    }
  }

  return { target: formatValue(target), args: [] }
}
