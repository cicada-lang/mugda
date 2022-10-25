import { CallMatrix, dedupCallMatrixes } from "../termination"

export function completeCallMatrixes(
  matrixes: Array<CallMatrix>,
): Array<CallMatrix> {
  matrixes = dedupCallMatrixes(matrixes)

  while (true) {
    const next = step(matrixes)
    if (next.length === matrixes.length) return matrixes
    matrixes = next
  }
}

function step(matrixes: Array<CallMatrix>): Array<CallMatrix> {
  const composed: Array<CallMatrix> = []
  for (const x of matrixes) {
    for (const y of matrixes) {
      if (x.isComposableWith(y)) {
        composed.push(x.compose(y))
      }
    }
  }

  return dedupCallMatrixes([...matrixes, ...composed])
}
