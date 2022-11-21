import type { CallMatrix } from "."
import { equal } from "../../utils/equal"

export function callMatrixesDedup(
  matrixes: Array<CallMatrix>,
): Array<CallMatrix> {
  const results: Array<CallMatrix> = []
  for (const matrix of matrixes) {
    if (!results.find((result) => equalCallMatrix(matrix, result))) {
      results.push(matrix)
    }
  }

  return results
}

function equalCallMatrix(x: CallMatrix, y: CallMatrix): boolean {
  return equal(x, y)
}
