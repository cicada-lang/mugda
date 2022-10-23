import * as Actions from "../actions"
import { Env } from "../env"
import { evaluate, Exp } from "../exp"
import { matchPattern, Pattern } from "../pattern"
import { Value } from "../value"

export function matchClause(
  env: Env,
  patterns: Array<Pattern>,
  ret: Exp,
  args: Array<Value>,
): Value | undefined {
  const [pattern, ...restPatterns] = patterns
  const [arg, ...restArgs] = args

  if (pattern === undefined) {
    // NOTE Currying when there are not enough arguments.
    return Actions.doApUnfolded(evaluate(env, ret), args)
  }

  if (arg !== undefined) {
    const nextEnv = matchPattern(env, pattern, arg)
    if (nextEnv === undefined) return undefined
    return matchClause(nextEnv, restPatterns, ret, restArgs)
  }

  if (pattern !== undefined && arg === undefined) {
    // NOTE Mismatching when there are extra arguments.
    return undefined
  }
}
