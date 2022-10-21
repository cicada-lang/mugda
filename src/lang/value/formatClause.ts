import { formatExp } from "../exp"
import { formatPattern } from "../pattern"
import { Clause } from "../value"

export function formatClause(clause: Clause): string {
  const patterns = clause.patterns.map(formatPattern)
  const body = formatExp(clause.body)
  return `[(${patterns.join(" ")}) ${body}]`
}
