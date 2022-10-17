import { Env, EnvCons } from "../env"
import { Pattern } from "../pattern"
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
      if (value.kind !== "Ctor") return undefined
      if (value.name !== pattern.name) return undefined
      // TODO
    }

    case "Coctor": {
      if (value.kind !== "Coctor") return undefined
      if (value.name !== pattern.name) return undefined
      // TODO
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
  return undefined
}
