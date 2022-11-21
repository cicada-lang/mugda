import type { Exp } from "../exp"
import type { Mod } from "../mod"
import type { Pattern } from "../pattern"
import { CallMatrix } from "../termination"
import { decreasing } from "./decreasing"
import * as Trileans from "./Trilean"

export function createCallMatrix(
  mod: Mod,
  left: string,
  patterns: Array<Pattern>,
  right: string,
  arity: number,
  exps: Array<Exp>,
): CallMatrix {
  const matrix = patterns.map((pattern) => {
    const row = exps.map((exp) => decreasing(mod, exp, pattern))
    while (row.length < arity) row.push(Trileans.False)
    return row
  })

  return new CallMatrix(left, matrix, right)
}
