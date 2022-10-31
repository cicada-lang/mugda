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

function mulTwo(x: Trilean, y: Trilean): Trilean {
  if (x === False || y === False) return False
  return Math.max(x, y) as Trilean
}

export function mul(...xs: Array<Trilean>): Trilean {
  return xs.reduce((result, x) => mulTwo(result, x), Middle)
}

export function max(...xs: Array<Trilean>): Trilean {
  return Math.max(False, ...xs) as Trilean
}

/**
   NOTE The paper is wrong about using `minTrileans`
   instead of `mulTrileans` in `decreasingExp`.
**/

function min(...xs: Array<Trilean>): Trilean {
  return Math.min(True, ...xs) as Trilean
}
