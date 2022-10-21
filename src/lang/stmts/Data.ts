import * as Exps from "../exp"
import { evaluate, Telescope } from "../exp"
import { Mod } from "../mod"
import { Span } from "../span"
import { Stmt } from "../stmt"
import * as Values from "../value"

export class Data extends Stmt {
  constructor(
    public name: string,
    public varied: Telescope,
    public fixed: Telescope,
    public ctors: Array<Exps.Ctor>,
    public span: Span,
  ) {
    super()
  }

  async execute(mod: Mod): Promise<void> {
    const value = Values.Data(this.name, mod.env, this.varied, this.fixed)
    mod.define(this.name, value)

    for (const ctor of this.ctors) {
      const type = evaluate(mod.env, ctor.type)
      const value = Values.Ctor(ctor.name, type)
      mod.define(ctor.name, value)
    }
  }
}
