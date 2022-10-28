import { Env } from "../env"
import { Exp } from "../exp"
import { Mod } from "../mod"
import { Pattern } from "../pattern"

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
