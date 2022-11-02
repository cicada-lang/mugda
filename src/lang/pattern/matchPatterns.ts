import { Env, EnvCons } from "../env"
import * as Errors from "../errors"
import { Pattern } from "../pattern"
import { Value } from "../value"

function matchPattern(
  env: Env,
  pattern: Pattern,
  value: Value,
): Env | undefined {
  switch (pattern.kind) {
    case "Var": {
      return EnvCons(pattern.name, value, env)
    }

    case "Ctor": {
      if (value.kind !== "Ctor" && value.kind !== "Data") return undefined
      if (value.name !== pattern.name) return undefined
      return matchPatterns(env, pattern.args, value.args)
    }

    case "Compute": {
      return env
    }
  }
}

export function matchPatterns(
  env: Env,
  patterns: Array<Pattern>,
  values: Array<Value>,
): Env | undefined {
  if (patterns.length !== values.length) {
    throw new Errors.EvaluationError("Pattern arity mismatch")
  }

  const [pattern, ...restPatterns] = patterns
  const [value, ...restValues] = values

  if (pattern !== undefined && value !== undefined) {
    const nextEnv = matchPattern(env, pattern, value)
    if (nextEnv === undefined) return undefined
    return matchPatterns(nextEnv, restPatterns, restValues)
  }

  return env
}
