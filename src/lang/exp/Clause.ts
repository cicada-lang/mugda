import type { Exp } from "../exp"
import type { Pattern } from "../pattern"
import type { Span } from "../span"

export type Clause = {
  patterns: Array<Pattern>
  body: Exp
  span: Span
}

export function Clause(
  patterns: Array<Pattern>,
  body: Exp,
  span: Span,
): Clause {
  return {
    patterns,
    body,
    span,
  }
}
