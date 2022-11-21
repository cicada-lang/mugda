import zip from "lodash/zip"
import { Env, EnvCons } from "../env"
import * as Errors from "../errors"
import { Pattern } from "../pattern"
import type { Value } from "../value"

function matchPattern(
  env: Env,
  pattern: Pattern,
  value: Value,
): Env | undefined {
  switch (pattern["@kind"]) {
    case "Var": {
      return EnvCons(pattern.name, value, env)
    }

    case "Ctor": {
      if (value["@kind"] !== "Ctor" && value["@kind"] !== "Data")
        return undefined
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

  for (const [pattern, value] of zip(patterns, values)) {
    const nextEnv = matchPattern(env, pattern as Pattern, value as Value)
    if (nextEnv === undefined) return undefined
    env = nextEnv
  }

  return env
}
