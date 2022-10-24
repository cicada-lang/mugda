import { equal } from "../../utils/equal"
import { Exp } from "../exp"

export function equalExp(x: Exp, y: Exp): boolean {
  return equal(unfoldExp(x), unfoldExp(y))
}

export function unfoldExp(x: Exp): Exp {
  return x
}
