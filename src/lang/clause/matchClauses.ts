import * as Actions from "../actions"
import { Clause } from "../clause"
import { Env, EnvNull } from "../env"
import { evaluate, Exp } from "../exp"
import { matchPattern, Pattern } from "../pattern"
import { Value } from "../value"

export function matchClauses(clauses: Array<Clause>, args: Array<Value>): Value | undefined {
  for (const clause of clauses) {
    const value = matchClause(EnvNull(), clause.patterns, clause.ret, args)
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
  if (pattern === undefined) {
    return Actions.doApUnfolded(evaluate(env, ret), args)
  }

  const [arg, ...restArgs] = args
  if (arg !== undefined) {
    const nextEnv = matchPattern(env, pattern, arg)
    if (nextEnv === undefined) return undefined
    return matchClause(nextEnv, restPatterns, ret, restArgs)
  }

  // NOTE Not enough arguments.
  return undefined
}
