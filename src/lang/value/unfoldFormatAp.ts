import { formatValue, Value } from "../value"

export function unfoldFormatAp(value: Value): {
  target: string
  args: Array<string>
} {
  if (value.kind === "Ap") {
    const unfolded = unfoldFormatAp(value.target)
    return {
      target: unfolded.target,
      args: [...unfolded.args, formatValue(value.arg)],
    }
  }

  return { target: formatValue(value), args: [] }
}
