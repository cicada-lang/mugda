import { Env } from "../env"
import { Exp } from "../exp"
import { Pattern } from "../pattern"

export type Clause = {
  env: Env
  patterns: Array<Pattern>
  ret: Exp
}

export function Clause(env: Env, patterns: Array<Pattern>, ret: Exp): Clause {
  return {
    env,
    patterns,
    ret,
  }
}
