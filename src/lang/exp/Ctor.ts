import { Exp, Telescope } from "../exp"

export type Ctor = {
  name: string
  args: Telescope
  retType: Exp
}

export function Ctor(name: string, args: Telescope, retType: Exp): Ctor {
  return {
    name,
    args,
    retType,
  }
}
