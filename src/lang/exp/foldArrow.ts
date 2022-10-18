import * as Exps from "../exp"
import { Exp } from "../exp"

export function foldArrow(type: Exp, types: Array<Exp>): Exp {
  if (types.length === 0) return type

  const [nextType, ...restTypes] = types

  return Exps.Pi("_", type, foldArrow(nextType, restTypes))
}
