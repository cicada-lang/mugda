import { Matrix, Ring, Vector } from "./Matrix"
import * as Orders from "./Order"
import { Order } from "./Order"

export class OrderMatrix extends Matrix<Order> {
  static ring: Ring<Order> = {
    add: Orders.addOrder,
    mul: Orders.mulOrder,
    zero: Orders.LargerOrNotComparable,
    one: Orders.Neutral,
  }

  static fromRows(rows: Array<Array<Order>>): OrderMatrix {
    return new Matrix(
      this.ring,
      rows.map((row) => new Vector(this.ring, row)),
    )
  }
}
