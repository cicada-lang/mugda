import { Matrix, MatrixTheory } from "./MatrixTheory"
import type { Trilean } from "./Trilean"
import * as Trileans from "./Trilean"

export type TrileanMatrix = Matrix<Trilean>

export class TrileanMatrixTheory extends MatrixTheory<Trilean> {
  constructor() {
    super({
      equal: Trileans.equalTrilean,
      add: Trileans.max,
      mul: Trileans.mul,
      zero: Trileans.False,
      one: Trileans.Middle,
    })
  }

  isDecreasing(matrix: TrileanMatrix): boolean {
    return this.diagonal(matrix).some((element) => element === Trileans.True)
  }
}
