export type Order = "Smaller" | "NotSmaller" | "Unknown"

export function mulOrder(x: Order, y: Order): Order {
  if (x === "Smaller" && y === "Smaller") return "Smaller"
  if (x === "Smaller" && y === "NotSmaller") return "Smaller"
  if (x === "NotSmaller" && y === "Smaller") return "Smaller"
  if (x === "NotSmaller" && y === "NotSmaller") return "NotSmaller"
  return "Unknown"
}

export function addOrder(x: Order, y: Order): Order {
  if (x === "Smaller" && y === "Smaller") return "Smaller"
  if (x === "Smaller" && y === "NotSmaller") return "Smaller"
  if (x === "NotSmaller" && y === "Smaller") return "Smaller"
  if (x === "NotSmaller" && y === "NotSmaller") return "NotSmaller"
  if (x === "Unknown") return y
  if (y === "Unknown") return x
  return "Unknown"
}

export function minOrder(x: Order, y: Order): Order {
  if (x === "Smaller" && y === "Smaller") return "Smaller"
  if (y === "NotSmaller") return "NotSmaller"
  if (x === "NotSmaller") return "NotSmaller"
  return "Unknown"
}
