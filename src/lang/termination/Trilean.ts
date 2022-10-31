export type Trilean = True | Middle | False

/**

   The name `Middle` comes from the **law of excluded middle**,
   when `Middle` is added to the set of values,
   the law not hold anymore.

**/

export type True = 1
export type Middle = 0.5
export type False = 0

export const True = 1
export const Middle = 0.5
export const False = 0

export function equalTrilean(x: Trilean, y: Trilean): boolean {
  return x === y
}

/**

   The connective `mulTwo` can also be viewed as just like `min`,
   but `True` and `Middle` are switched.

**/

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

   The paper is wrong about using `min` instead of `mul` in `decreasingExp`.
   We do not use `min` at all.

**/

function min(...xs: Array<Trilean>): Trilean {
  return Math.min(True, ...xs) as Trilean
}
