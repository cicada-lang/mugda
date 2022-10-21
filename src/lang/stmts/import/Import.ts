import * as Errors from "../../errors"
import { Mod } from "../../mod"
import { Span } from "../../span"
import { Stmt } from "../../stmt"
import { executeBinding, ImportBinding } from "../import"

export class Import extends Stmt {
  constructor(
    public path: string,
    public bindings: Array<ImportBinding>,
    public span: Span,
  ) {
    super()
  }

  async execute(mod: Mod): Promise<void> {
    const url = mod.resolve(this.path)
    if (url.href === mod.options.url.href) {
      throw new Errors.ElaborationError(
        `I can not circular import: ${this.path}`,
        this.span,
      )
    }

    const importedMod = await mod.options.loader.load(url)
    for (const binding of this.bindings) {
      executeBinding(mod, importedMod, binding)
    }
  }
}
