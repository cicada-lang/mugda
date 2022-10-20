import { lookupValueInEnv } from "../env"
import * as Errors from "../errors"
import { Mod } from "../mod"
import { Span } from "../span"
import { Stmt } from "../stmt"

export type ImportEntry = {
  name: string
  rename?: string
}

export class Import extends Stmt {
  constructor(
    public path: string,
    public entries: Array<ImportEntry>,
    public span?: Span,
  ) {
    super()
  }

  async execute(mod: Mod): Promise<void> {
    const url = mod.resolve(this.path)
    if (url.href === mod.options.url.href) {
      throw new Errors.ElaborationError(
        `I can not circular import: ${this.path}`,
        { span: this.span },
      )
    }

    const importedMod = await mod.options.loader.load(url)
    for (const { name, rename } of this.entries) {
      const value = lookupValueInEnv(importedMod.env, name)
      if (value === undefined) {
        throw new Error(
          `I can not import undefined name: ${name}, from path: ${this.path}`,
        )
      }

      mod.define(rename || name, value)
    }
  }
}
