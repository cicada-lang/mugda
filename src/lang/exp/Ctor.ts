import { Exp, Telescope } from "../exp"

export type Ctor = {
  name: string
  slots: Telescope
  retType: Exp
}

export function Ctor(name: string, slots: Telescope, retType: Exp): Ctor {
  return {
    name,
    slots,
    retType,
  }
}
