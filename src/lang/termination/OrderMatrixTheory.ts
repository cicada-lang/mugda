import { Matrix, MatrixTheory } from "./MatrixTheory"
import * as Orders from "./Order"
import { Order } from "./Order"

export type OrderMatrix = Matrix<Order>

export class OrderMatrixTheory extends MatrixTheory<Order> {
  constructor() {
    super({
      equal: Orders.equalOrder,
      add: Orders.addOrder,
      mul: Orders.mulOrder,
      zero: Orders.LargerOrNotComparable,
      one: Orders.Neutral,
    })
  }

  isDecreasing(matrix: OrderMatrix): boolean {
    return this.diagonal(matrix).some((element) => element === Orders.Smaller)
  }
}
