import * as Exps from "../exp"
import { Telescope } from "../exp"
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
    const value = Values.Data(this.name, mod, mod.env, this.fixed, this.varied)
    mod.define(this.name, value)

    for (const ctor of this.ctors) {
      const value = Values.Ctor(
        ctor.name,
        mod,
        mod.env,
        this.fixed,
        ctor.args,
        ctor.retType,
      )
      mod.define(ctor.name, value)
    }
  }
}
