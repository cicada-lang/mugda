import * as Errors from "../errors"
import { evaluate } from "../evaluate"
import type * as Exps from "../exp"
import type { Exp } from "../exp"
import type { Mod } from "../mod"
import type { Span } from "../span"
import { Stmt } from "../stmt"
import { extractCallMatrixes } from "../termination"
import * as Values from "../value"
import { Clause } from "../value"

export class Fn extends Stmt {
  constructor(
    public name: string,
    public type: Exp,
    public clauses: Array<Exps.Clause>,
    public span: Span,
  ) {
    super()
  }

  get arity(): number {
    let arity = undefined
    for (const clause of this.clauses) {
      if (arity === undefined) {
        arity = clause.patterns.length
      } else if (arity !== clause.patterns.length) {
        throw new Errors.ElaborationError(
          `Clauses arity mismatch, found ${arity} and ${clause.patterns.length}`,
          clause.span,
        )
      }
    }

    if (arity === undefined) {
      throw new Errors.ElaborationError("Empty clauses", this.span)
    }

    return arity
  }

  prepare(mod: Mod): void {
    mod.arities.set(this.name, this.arity)
  }

  async execute(mod: Mod): Promise<void> {
    const type = evaluate(mod, mod.env, this.type)
    const clauses: Array<Clause> = []
    const value = Values.FnMatch(type, clauses, this.arity, true, [])
    mod.define(this.name, value)
    for (const clause of this.clauses) {
      const matrixes = extractCallMatrixes(mod, this.name, clause)
      mod.checkCallMatrixes(matrixes, clause.span)
      clauses.push(Clause(mod, mod.env, clause.patterns, clause.body))
    }
  }
}
