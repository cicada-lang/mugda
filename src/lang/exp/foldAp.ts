import * as Exps from "../exp"
import { Exp } from "../exp"

export function foldAp(target: Exp, args: Array<Exp>): Exp {
  if (args.length === 0) return target

  const [arg, ...restArgs] = args

  return foldAp(Exps.Ap(target, arg), restArgs)
}
