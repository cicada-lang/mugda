export type Order = Smaller | Neutral | LargerOrNotComparable

export type Smaller = "Smaller"
export type Neutral = "Neutral"
export type LargerOrNotComparable = "LargerOrNotComparable"

export const Smaller = "Smaller"
export const Neutral = "Neutral"
export const LargerOrNotComparable = "LargerOrNotComparable"

export function mulOrder(x: Order, y: Order): Order {
  if (x === Smaller && y === Smaller) return Smaller
  if (x === Smaller && y === Neutral) return Smaller
  if (x === Neutral && y === Smaller) return Smaller
  if (x === Neutral && y === Neutral) return Neutral
  return LargerOrNotComparable
}

export function addOrder(x: Order, y: Order): Order {
  if (x === Smaller && y === Smaller) return Smaller
  if (x === Smaller && y === Neutral) return Smaller
  if (x === Neutral && y === Smaller) return Smaller
  if (x === Neutral && y === Neutral) return Neutral
  if (x === LargerOrNotComparable) return y
  if (y === LargerOrNotComparable) return x
  return LargerOrNotComparable
}

export function minOrder(x: Order, y: Order): Order {
  if (x === Smaller && y === Smaller) return Smaller
  if (y === Neutral) return Neutral
  if (x === Neutral) return Neutral
  return LargerOrNotComparable
}

export function maxOrders(xs: Array<Order>): Order {
  return xs.reduce((result, x) => addOrder(result, x), LargerOrNotComparable)
}

export function minOrders(xs: Array<Order>): Order {
  return xs.reduce((result, x) => minOrder(result, x), Smaller)
}
