import { Exp } from "../exp"
import { Mod } from "../mod"
import { Pattern } from "../pattern"
import { compareExpWithPatten } from "./compareExpWithPatten"
import * as Orders from "./Order"
import { OrderMatrix } from "./OrderMatrix"

export class CallMatrix {
  constructor(
    public left: string,
    public matrix: OrderMatrix,
    public right: string,
  ) {}

  static create(
    mod: Mod,
    left: string,
    patterns: Array<Pattern>,
    right: string,
    arity: number,
    exps: Array<Exp>,
  ): CallMatrix {
    const rows = patterns.map((pattern) => {
      const row = exps.map((exp) => compareExpWithPatten(mod, exp, pattern))
      let length = row.length
      while (length < arity) {
        row.push(Orders.LargerOrNotComparable)
        length++
      }

      return row
    })

    return new CallMatrix(left, OrderMatrix.fromRows(rows), right)
  }
}
