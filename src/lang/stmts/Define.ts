import { evaluate, Exp } from "../exp"
import { Mod } from "../mod"
import { Span } from "../span"
import { Stmt } from "../stmt"

export class Define extends Stmt {
  constructor(
    public name: string,
    public type: Exp,
    public exp: Exp,
    public span?: Span,
  ) {
    super()
  }

  async execute(mod: Mod): Promise<void> {
    const type = evaluate(mod.env, this.type)
    // TODO check type
    mod.define(this.name, evaluate(mod.env, this.exp))
  }
}
