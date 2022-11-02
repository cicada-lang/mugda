import { Neutral } from "../neutral"
import * as Values from "../value"

export function formatNeutral(neutral: Neutral): string {
  switch (neutral.kind) {
    case "Var": {
      return neutral.name
    }

    case "Ap": {
      const { target, args } = Values.unfoldFormatAp(neutral)
      return args.length === 0 ? `(${target})` : `(${target} ${args.join(" ")})`
    }
  }
}
