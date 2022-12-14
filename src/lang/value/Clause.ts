import type { Env } from "../env"
import type { Exp } from "../exp"
import type { Mod } from "../mod"
import type { Pattern } from "../pattern"

export type Clause = {
  mod: Mod
  env: Env
  patterns: Array<Pattern>
  body: Exp
}

export function Clause(
  mod: Mod,
  env: Env,
  patterns: Array<Pattern>,
  body: Exp,
): Clause {
  return {
    mod,
    env,
    patterns,
    body,
  }
}
