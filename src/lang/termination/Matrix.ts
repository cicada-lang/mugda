/**

   A generic row-based `Matrix`  over semiring.

   - Semiring: https://en.wikipedia.org/wiki/Semiring

**/

export interface Semiring<A> {
  equal: (x: A, y: A) => boolean
  add: (x: A, y: A) => A
  mul: (x: A, y: A) => A
  zero: A
  one: A
}

export class Matrix<A> {
  constructor(public ring: Semiring<A>, public rows: Array<Vector<A>>) {}

  equal(that: Matrix<A>): boolean {
    return (
      this.rows.length === that.rows.length &&
      this.rows.every((row, i) => row.equal(that.rows[i]))
    )
  }

  get rowCount(): number {
    return this.rows.length
  }

  get columnCount(): number {
    const [row] = this.rows
    if (row === undefined) {
      throw new Error(`columnCount can not handle empty Matrix`)
    }

    return row.elements.length
  }

  isSquare(): boolean {
    return this.rowCount === this.columnCount
  }

  isIdempotent(): boolean {
    return this.isSquare() && this.mul(this).equal(this)
  }

  get columns(): Array<Vector<A>> {
    const columns: Array<Vector<A>> = []
    let i = 0
    while (i < this.columnCount) {
      columns.push(
        new Vector(
          this.ring,
          this.rows.map((row) => row.elements[i]),
        ),
      )
      i++
    }

    return columns
  }

  get diagonal(): Vector<A> {
    if (!this.isSquare()) {
      throw new Error("Expected Matrix to be square.")
    }

    return new Vector(
      this.ring,
      this.rows.map((row, i) => row.elements[i]),
    )
  }

  mul(that: Matrix<A>): Matrix<A> {
    return new Matrix(
      this.ring,
      this.rows.map(
        (row) =>
          new Vector(
            this.ring,
            that.columns.map((column) => row.dot(column)),
          ),
      ),
    )
  }
}

export class Vector<A> {
  constructor(public ring: Semiring<A>, public elements: Array<A>) {}

  equal(that: Vector<A>): boolean {
    return (
      this.elements.length === that.elements.length &&
      this.elements.every((element, i) =>
        this.ring.equal(element, that.elements[i]),
      )
    )
  }

  dot(that: Vector<A>): A {
    return this.elements
      .map((x, i) => this.ring.mul(x, that.elements[i]))
      .reduce((sum, x) => this.ring.add(x, sum), this.ring.zero)
  }
}
