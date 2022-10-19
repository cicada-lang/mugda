import { Clause } from "../clause"
import { evaluate } from "../exp"
import { formatPattern } from "../pattern"
import { formatValue } from "../value"

export function formatClause(clause: Clause): string {
  const patterns = clause.patterns.map(formatPattern)
  const body = formatValue(evaluate(clause.env, clause.body))
  return `[(${patterns.join(" ")}) ${body}]`
}
