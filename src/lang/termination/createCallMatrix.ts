import { Exp } from "../exp"
import { Pattern } from "../pattern"
import { CallMatrix } from "../termination"

export function createCallMatrix(
  left: string,
  patterns: Array<Pattern>,
  right: string,
  exps: Array<Exp>,
): CallMatrix {
  const matrix = [[]]
  return CallMatrix(left, matrix, right)
}
