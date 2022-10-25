import * as Errors from "../errors"
import * as Exps from "../exp"
import { evaluate, Exp } from "../exp"
import { Mod } from "../mod"
import { Span } from "../span"
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

  async execute(mod: Mod): Promise<void> {
    const type = evaluate(mod.env, this.type)
    const clauses: Array<Clause> = []
    const arity = checkArity(this.clauses, this.span)
    const value = Values.FnMatch(type, clauses, arity, true)
    mod.define(this.name, value)
    /**
      TODO Maybe this is a wrong way to handle recursive definitions,
      maybe we should add a new sum type to `Env`.
     **/
    for (const clause of this.clauses) {
      const names = new Map([[this.name, arity]])
      mod.checkCallMatrixes(
        extractCallMatrixes(
          mod,
          names,
          this.name,
          clause.patterns,
          clause.body,
        ),
        this.span,
      )

      clauses.push(Clause(mod.env, clause.patterns, clause.body))
    }
  }
}

function checkArity(clauses: Array<Exps.Clause>, span: Span): number {
  let arity = undefined
  for (const clause of clauses) {
    if (arity === undefined) {
      arity = clause.patterns.length
    } else if (arity !== clause.patterns.length) {
      throw new Errors.ElaborationError(
        `Clauses arity mismatch, found ${arity} and ${clause.patterns.length}`,
        span,
      )
    }
  }

  if (arity === undefined) {
    throw new Errors.ElaborationError("Empty clauses", span)
  }

  return arity
}
