import { Exp } from "../exp"
import { Mod } from "../mod"
import { Pattern } from "../pattern"
import { CallMatrix } from "../termination"
import { decreasingExp } from "./decreasingExp"
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
    const row = exps.map((exp) => decreasingExp(mod, exp, pattern))
    let length = row.length
    while (length < arity) {
      row.push(Trileans.False)
      length++
    }

    return row
  })

  return new CallMatrix(left, matrix, right)
}
