import { evaluate, Exp } from "../exp"
import { Mod } from "../mod"
import type { Span } from "../span"
import { Stmt } from "../stmt"
import { formatValue } from "../value"

export class Compute extends Stmt {
  constructor(public exp: Exp, public span: Span) {
    super()
  }

  async execute(mod: Mod): Promise<string> {
    const value = evaluate(mod, mod.env, this.exp)
    return formatValue(value)
  }
}
