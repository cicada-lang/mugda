import { Ctor } from "../ctor"
import { evaluate, Exp } from "../exp"
import { Mod } from "../mod"
import { Span } from "../span"
import { Stmt } from "../stmt"
import * as Values from "../value"

export class Data extends Stmt {
  constructor(
    public name: string,
    public type: Exp,
    public ctors: Array<Ctor>,
    public span?: Span,
  ) {
    super()
  }

  async execute(mod: Mod): Promise<void> {
    const type = evaluate(mod.env, this.type)
    const value = Values.Data(this.name, type, Values.arity(type))
    mod.define(this.name, value)
    // TODO
  }
}
