import { Exp } from "../exp"

export type Ctor = {
  name: string
  type: Exp
}

export function Ctor(name: string, type: Exp): Ctor {
  return {
    name,
    type,
  }
}
