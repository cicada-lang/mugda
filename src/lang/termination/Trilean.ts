export type Trilean = True | Middle | False

export type True = 1
export type Middle = 0.5
export type False = 0

export const True = 1
export const Middle = 0.5
export const False = 0

export function equalTrilean(x: Trilean, y: Trilean): boolean {
  return x === y
}

export function mulTrilean(x: Trilean, y: Trilean): Trilean {
  if (x === True && y === True) return True
  if (x === True && y === Middle) return True
  if (x === Middle && y === True) return True
  if (x === Middle && y === Middle) return Middle
  return False
}

export function mulTrileans(xs: Array<Trilean>): Trilean {
  return xs.reduce((result, x) => mulTrilean(result, x), Middle)
}

export function maxTrilean(x: Trilean, y: Trilean): Trilean {
  return Math.max(x, y) as Trilean
}

export function maxTrileans(xs: Array<Trilean>): Trilean {
  return xs.reduce((result, x) => maxTrilean(result, x), False)
}

// TODO Why the paper uses minTrilean the following definition?

export function minTrilean(x: Trilean, y: Trilean): Trilean {
  return Math.min(x, y) as Trilean
}

export function minTrileans(xs: Array<Trilean>): Trilean {
  return xs.reduce((result, x) => minTrilean(result, x), True)
}
