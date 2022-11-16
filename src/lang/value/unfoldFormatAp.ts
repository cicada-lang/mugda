import type { Neutral } from "../neutral"
import * as Values from "../value"
import { formatValue } from "../value"

export function unfoldFormatAp(neutral: Neutral): {
  target: string
  args: Array<string>
} {
  if (neutral.kind === "Ap") {
    const unfolded = unfoldFormatAp(neutral.target)
    return {
      target: unfolded.target,
      args: [...unfolded.args, formatValue(neutral.arg)],
    }
  }

  return { target: formatValue(Values.UntypedNeutral(neutral)), args: [] }
}
