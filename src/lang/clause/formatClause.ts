import { Clause } from "../clause"
import { formatExp } from "../exp"
import { formatPattern } from "../pattern"

export function formatClause(clause: Clause): string {
  const patterns = clause.patterns.map(formatPattern)
  const body = formatExp(clause.body)
  // NOTE `clause.env` is not used.
  return `[(${patterns.join(" ")}) ${body}]`
}
