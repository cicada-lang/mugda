import { Matrix, Semiring, Vector } from "./Matrix"
import * as Orders from "./Order"
import { Order } from "./Order"

const orderRing: Semiring<Order> = {
  equal: Orders.equalOrder,
  add: Orders.addOrder,
  mul: Orders.mulOrder,
  zero: Orders.LargerOrNotComparable,
  one: Orders.Neutral,
}

export class OrderMatrix extends Matrix<Order> {
  static fromRows(rows: Array<Array<Order>>): OrderMatrix {
    return new Matrix(
      orderRing,
      rows.map((row) => new Vector(orderRing, row)),
    )
  }

  // isDecreasing(): boolean {
  //   return this.diagonal.elements.some((element) => element === Orders.Smaller)
  // }
}
