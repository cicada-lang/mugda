import { Order } from "../termination"

export type Matrix<T> = Array<Array<T>>

export type CallMatrix = {
  left: string
  matrix: Matrix<Order>
  right: string
}
