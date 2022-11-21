import { evaluate } from "../evaluate"
import type { Exp } from "../exp"
import type { Mod } from "../mod"
import type { Span } from "../span"
import { Stmt } from "../stmt"

export class Define extends Stmt {
  constructor(
    public name: string,
    public type: Exp,
    public exp: Exp,
    public span: Span,
  ) {
    super()
  }

  async execute(mod: Mod): Promise<void> {
    const type = evaluate(mod, mod.env, this.type)
    const value = evaluate(mod, mod.env, this.exp)
    mod.define(this.name, value)
  }
}
