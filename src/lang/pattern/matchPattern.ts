import { Env, EnvCons } from "../env"
import { Pattern } from "../pattern"
import { unfoldAp, Value } from "../value"

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
      const unfolded = unfoldAp(value)
      if (unfolded.target.kind !== "Ctor") return undefined
      if (unfolded.target.kind !== pattern.name) return undefined
      return matchPatterns(env, pattern.args, unfolded.args)
    }

    case "Coctor": {
      const unfolded = unfoldAp(value)
      if (unfolded.target.kind !== "Coctor") return undefined
      if (unfolded.target.kind !== pattern.name) return undefined
      return matchPatterns(env, pattern.args, unfolded.args)
    }

    case "Inaccessible": {
      return env
    }
  }
}

function matchPatterns(
  env: Env,
  patterns: Array<Pattern>,
  values: Array<Value>,
): Env | undefined {
  const [pattern, ...restPatterns] = patterns
  const [value, ...restValues] = values

  if (pattern === undefined && value === undefined) {
    return env
  }

  if (pattern !== undefined && value !== undefined) {
    const nextEnv = matchPattern(env, pattern, value)
    if (nextEnv === undefined) return undefined
    return matchPatterns(nextEnv, restPatterns, restValues)
  }

  return undefined
}
