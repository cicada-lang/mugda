import { OrderMatrix } from "./OrderMatrix"

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

    return new CallMatrix(this.left, this.matrix.mul(that.matrix), that.right)
  }
}
