import { Clause } from "../clause"
import * as Exps from "../exp"
import { evaluate, Exp } from "../exp"
import { Mod } from "../mod"
import { Span } from "../span"
import { Stmt } from "../stmt"
import * as Values from "../value"

export class Fn extends Stmt {
  constructor(
    public name: string,
    public type: Exp,
    public clauses: Array<Exps.Clause>,
    public span?: Span,
  ) {
    super()
  }

  async execute(mod: Mod): Promise<void> {
    const type = evaluate(mod.env, this.type)
    const clauses = this.clauses.map((clause) =>
      Clause(mod.env, clause.patterns, clause.body),
    )
    mod.define(this.name, Values.FnClauses(type, clauses, true))
  }
}
