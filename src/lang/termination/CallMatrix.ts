import { TrileanMatrix, TrileanMatrixTheory } from "./TrileanMatrixTheory"

const theory = new TrileanMatrixTheory()

export class CallMatrix {
  constructor(
    public left: string,
    public matrix: TrileanMatrix,
    public right: string,
  ) {}

  isComposableWith(that: CallMatrix): boolean {
    return this.right === that.left
  }

  compose(that: CallMatrix): CallMatrix {
    if (!this.isComposableWith(that)) {
      throw new Error(
        [
          `CallMatrix not isComposableWith`,
          `  this.left: ${this.left}`,
          `  this.right: ${this.right}`,
          `  that.left: ${that.left}`,
          `  that.right: ${that.right}`,
        ].join("\n"),
      )
    }

    return new CallMatrix(
      this.left,
      theory.mul(this.matrix, that.matrix),
      that.right,
    )
  }

  isNotTerminating(): boolean {
    return theory.isIdempotent(this.matrix) && !theory.isDecreasing(this.matrix)
  }
}
