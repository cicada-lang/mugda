import { Env, EnvCons } from "../env"
import { Pattern } from "../pattern"
import * as Values from "../value"
import { Value } from "../value"

export function matchPattern(
  env: Env,
  pattern: Pattern,
  value: Value,
): Env | undefined {
  switch (pattern.kind) {
    case "Var": {
      return EnvCons(pattern.name, value, env)
    }

    case "Ctor": {
      const unfolded = Values.unfoldAp(value)

      if (unfolded.target.kind !== "Ctor") {
        return undefined
      }

      if (unfolded.target.name !== pattern.name) {
        return undefined
      }

      return matchPatterns(env, pattern.args, unfolded.args)
    }

    case "Inaccessible": {
      return env
    }
  }
}

export function matchPatterns(
  env: Env,
  patterns: Array<Pattern>,
  values: Array<Value>,
): Env | undefined {
  const [pattern, ...restPatterns] = patterns
  const [value, ...restValues] = values

  if (pattern !== undefined && value !== undefined) {
    const nextEnv = matchPattern(env, pattern, value)
    if (nextEnv === undefined) return undefined
    return matchPatterns(nextEnv, restPatterns, restValues)
  }

  return env
}
