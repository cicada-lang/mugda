/**

   A generic row-based `Matrix`  over semiring.

   - Semiring: https://en.wikipedia.org/wiki/Semiring

**/

export type Matrix<A> = Array<Array<A>>

export interface Semiring<A> {
  equal: (x: A, y: A) => boolean
  add: (x: A, y: A) => A
  mul: (x: A, y: A) => A
  zero: A
  one: A
}

export class MatrixTheory<A> {
  constructor(public ring: Semiring<A>) {}

  rowCount(matrix: Matrix<A>): number {
    return matrix.length
  }

  columnCount(matrix: Matrix<A>): number {
    const [row] = matrix
    if (row === undefined) {
      throw new Error(`columnCount can not handle empty Matrix`)
    }

    return row.length
  }

  isSquare(matrix: Matrix<A>): boolean {
    return this.rowCount(matrix) === this.columnCount(matrix)
  }

  transpose(matrix: Matrix<A>): Matrix<A> {
    const columns: Matrix<A> = []
    let i = 0
    while (i < this.columnCount(matrix)) {
      columns.push(matrix.map((row) => row[i]))
      i++
    }

    return columns
  }

  diagonal(matrix: Matrix<A>): Array<A> {
    if (!this.isSquare(matrix)) {
      throw new Error("Expected Matrix to be square.")
    }

    return matrix.map((row, i) => row[i])
  }

  mul(x: Matrix<A>, y: Matrix<A>): Matrix<A> {
    return x.map((row) => y.map((column) => this.dot(row, column)))
  }

  dot(xs: Array<A>, ys: Array<A>): A {
    return xs
      .map((x, i) => this.ring.mul(x, ys[i]))
      .reduce((sum, z) => this.ring.add(z, sum), this.ring.zero)
  }

  equalVector(xs: Array<A>, ys: Array<A>): boolean {
    return (
      xs.length === ys.length && xs.every((x, i) => this.ring.equal(x, ys[i]))
    )
  }

  equalMatrix(x: Matrix<A>, y: Matrix<A>): boolean {
    return (
      x.length === y.length && x.every((row, i) => this.equalVector(row, y[i]))
    )
  }
}
