import { Clause } from "../clause"
import { formatPattern } from "../pattern"

export function formatClause(clause: Clause): string {
  const patterns = clause.patterns.map(formatPattern)
  // const body = formatValue(evaluate(clause.env, clause.body))
  // return `[(${patterns.join(" ")}) ${body}]`
  return `[(${patterns.join(" ")}) ...]`
}
