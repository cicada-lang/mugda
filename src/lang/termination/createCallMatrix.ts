import { Exp } from "../exp"
import { Mod } from "../mod"
import { Pattern } from "../pattern"
import { CallMatrix } from "../termination"
import { compareExpWithPatten } from "./compareExpWithPatten"
import * as Orders from "./Order"

export function createCallMatrix(
  mod: Mod,
  left: string,
  patterns: Array<Pattern>,
  right: string,
  arity: number,
  exps: Array<Exp>,
): CallMatrix {
  const matrix = patterns.map((pattern) => {
    const row = exps.map((exp) => compareExpWithPatten(mod, exp, pattern))
    let length = row.length
    while (length < arity) {
      row.push(Orders.LargerOrNotComparable)
      length++
    }

    return row
  })

  return CallMatrix(left, matrix, right)
}
