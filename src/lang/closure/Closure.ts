import { Env } from "../env"
import { Exp } from "../exp"

export type Closure = {
  kind: "Closure"
  env: Env
  name: string
  body: Exp
}

export function Closure(env: Env, name: string, body: Exp): Closure {
  return {
    kind: "Closure",
    env,
    name,
    body,
  }
}
