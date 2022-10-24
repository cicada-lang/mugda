import { OrderMatrix } from "./OrderMatrix"

export type CallMatrix = {
  left: string
  matrix: OrderMatrix
  right: string
}

export function CallMatrix(
  left: string,
  matrix: OrderMatrix,
  right: string,
): CallMatrix {
  return {
    left,
    matrix,
    right,
  }
}
