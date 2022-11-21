import type { Env } from "../env"
import type { Value } from "../value"

export function envLookupValue(env: Env, name: string): Value | undefined {
  switch (env["@kind"]) {
    case "EnvNull": {
      return undefined
    }

    case "EnvCons": {
      if (env.name === name) {
        return env.value
      } else {
        return envLookupValue(env.rest, name)
      }
    }
  }
}
