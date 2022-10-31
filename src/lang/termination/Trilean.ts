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
  if (x === False || y === False) return False
  return Math.max(x, y) as Trilean
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

/**
   NOTE The paper is wrong about using `minTrileans`
   instead of `mulTrileans` in `decreasingExp`.
**/

function minTrilean(x: Trilean, y: Trilean): Trilean {
  return Math.min(x, y) as Trilean
}

function minTrileans(xs: Array<Trilean>): Trilean {
  return xs.reduce((result, x) => minTrilean(result, x), True)
}
