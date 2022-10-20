import { Exp } from "../exp"
import { Pattern } from "../pattern"

export type Clause = {
  patterns: Array<Pattern>
  body: Exp
}

export function Clause(patterns: Array<Pattern>, body: Exp): Clause {
  return {
    patterns,
    body,
  }
}
