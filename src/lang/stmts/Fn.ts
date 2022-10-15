import { Clause } from "../clause"
import { Exp } from "../exp"
import { Mod } from "../mod"
import { Span } from "../span"
import { Stmt } from "../stmt"

export class Fn extends Stmt {
  constructor(
    public name: string,
    public retType: Exp,
    public clauses: Array<Clause>,
    public span?: Span,
  ) {
    super()
  }

  async execute(mod: Mod): Promise<void> {
    // TODO
  }
}
