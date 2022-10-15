import { Ctor } from "../ctor"
import { Exp } from "../exp"
import { Mod } from "../mod"
import { Span } from "../span"
import { Stmt } from "../stmt"
import { Telescope } from "../telescope"

export class Data extends Stmt {
  constructor(
    public name: string,
    public telescope: Telescope,
    public retType: Exp,
    public ctors: Array<Ctor>,
    public span?: Span,
  ) {
    super()
  }

  async execute(mod: Mod): Promise<void> {
    // TODO
  }
}
