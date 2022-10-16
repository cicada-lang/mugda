import { Env } from "../env"
import { Exp } from "../exp"
import { Mod } from "../mod"

export type Closure = {
  kind: "Closure"
  mod: Mod
  env: Env
  name: string
  body: Exp
}

export function Closure(mod: Mod, env: Env, name: string, body: Exp): Closure {
  return {
    kind: "Closure",
    mod,
    env,
    name,
    body,
  }
}
