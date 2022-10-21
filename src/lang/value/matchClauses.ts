import * as Actions from "../actions"
import { Env } from "../env"
import { evaluate, Exp } from "../exp"
import { matchPattern, Pattern } from "../pattern"
import { Clause, Value } from "../value"

export function matchClauses(
  clauses: Array<Clause>,
  args: Array<Value>,
): Value | undefined {
  for (const clause of clauses) {
    const value = matchClause(clause.env, clause.patterns, clause.body, args)
    if (value !== undefined) return value
  }

  return undefined
}

function matchClause(
  env: Env,
  patterns: Array<Pattern>,
  ret: Exp,
  args: Array<Value>,
): Value | undefined {
  const [pattern, ...restPatterns] = patterns
  const [arg, ...restArgs] = args

  if (pattern === undefined) {
    // NOTE Clause supports currying.
    return Actions.doApUnfolded(evaluate(env, ret), args)
  }

  if (arg !== undefined) {
    const nextEnv = matchPattern(env, pattern, arg)
    if (nextEnv === undefined) return undefined
    return matchClause(nextEnv, restPatterns, ret, restArgs)
  }

  if (pattern !== undefined && arg === undefined) {
    // NOTE Not enough arguments.
    return undefined
  }
}
