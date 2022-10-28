import { Exp } from "../exp"
import { Pattern } from "../pattern"
import { Span } from "../span"

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
