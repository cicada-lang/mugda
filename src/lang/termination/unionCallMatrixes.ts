import { equal } from "../../utils/equal"
import { CallMatrix } from "../termination"

export function unionCallMatrixes(
  xs: Array<CallMatrix>,
  ys: Array<CallMatrix>,
): Array<CallMatrix> {
  return dedupCallMatrixes([...xs, ...ys])
}

function dedupCallMatrixes(matrixes: Array<CallMatrix>): Array<CallMatrix> {
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
