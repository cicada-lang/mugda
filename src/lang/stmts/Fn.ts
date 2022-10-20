import * as Exps from "../exp"
import { Exp } from "../exp"
import { Mod } from "../mod"
import { Span } from "../span"
import { Stmt } from "../stmt"

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
    // TODO
  }
}
