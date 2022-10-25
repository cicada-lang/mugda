import { Matrix, Ring, Vector } from "./Matrix"
import * as Orders from "./Order"
import { Order } from "./Order"

const orderRing: Ring<Order> = {
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
}
