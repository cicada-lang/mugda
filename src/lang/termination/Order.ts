export type Order = Smaller | NotSmaller | NotComparable

export type Smaller = "Smaller"
export type NotSmaller = "NotSmaller"
export type NotComparable = "NotComparable"

export const Smaller = "Smaller"
export const NotSmaller = "NotSmaller"
export const NotComparable = "NotComparable"

export function mulOrder(x: Order, y: Order): Order {
  if (x === Smaller && y === Smaller) return Smaller
  if (x === Smaller && y === NotSmaller) return Smaller
  if (x === NotSmaller && y === Smaller) return Smaller
  if (x === NotSmaller && y === NotSmaller) return NotSmaller
  return NotComparable
}

export function addOrder(x: Order, y: Order): Order {
  if (x === Smaller && y === Smaller) return Smaller
  if (x === Smaller && y === NotSmaller) return Smaller
  if (x === NotSmaller && y === Smaller) return Smaller
  if (x === NotSmaller && y === NotSmaller) return NotSmaller
  if (x === NotComparable) return y
  if (y === NotComparable) return x
  return NotComparable
}

export function minOrder(x: Order, y: Order): Order {
  if (x === Smaller && y === Smaller) return Smaller
  if (y === NotSmaller) return NotSmaller
  if (x === NotSmaller) return NotSmaller
  return NotComparable
}

export function maxOrders(xs: Array<Order>): Order {
  return xs.reduce((result, x) => addOrder(result, x), NotComparable)
}

export function minOrders(xs: Array<Order>): Order {
  return xs.reduce((result, x) => minOrder(result, x), Smaller)
}
