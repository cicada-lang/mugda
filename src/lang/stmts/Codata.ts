import * as Exps from "../exp"
import { Telescope } from "../exp"
import { Mod } from "../mod"
import { Span } from "../span"
import { Stmt } from "../stmt"
import * as Values from "../value"

export class Codata extends Stmt {
  constructor(
    public name: string,
    public varied: Telescope,
    public fixed: Telescope,
    public coctors: Array<Exps.Ctor>,
    public span: Span,
  ) {
    super()
  }

  async execute(mod: Mod): Promise<void> {
    const value = Values.Codata(this.name, mod.env, this.varied, this.fixed)
    mod.define(this.name, value)

    for (const coctor of this.coctors) {
      const value = Values.Coctor(
        coctor.name,
        mod.env,
        coctor.args,
        coctor.retType,
      )
      mod.define(coctor.name, value)
    }
  }
}
