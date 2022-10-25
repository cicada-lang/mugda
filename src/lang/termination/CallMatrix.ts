import { OrderMatrix, OrderMatrixTheory } from "./OrderMatrixTheory"

const theory = new OrderMatrixTheory()

export class CallMatrix {
  constructor(
    public left: string,
    public matrix: OrderMatrix,
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
}
