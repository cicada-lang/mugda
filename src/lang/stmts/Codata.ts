import { Ctor } from "../ctor"
import { Exp } from "../exp"
import { Mod } from "../mod"
import { Span } from "../span"
import { Stmt } from "../stmt"

export class Codata extends Stmt {
  constructor(
    public name: string,
    public type: Exp,
    public ctors: Array<Ctor>,
    public span?: Span,
  ) {
    super()
  }

  async execute(mod: Mod): Promise<void> {
    // TODO
  }
}
