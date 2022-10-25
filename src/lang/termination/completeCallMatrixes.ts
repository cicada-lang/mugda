import { CallMatrix, dedupCallMatrixes } from "../termination"

export function completeCallMatrixes(
  matrixes: Array<CallMatrix>,
): Array<CallMatrix> {
  matrixes = dedupCallMatrixes(matrixes)
  return matrixes
}
