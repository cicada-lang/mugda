import { lookupValueInEnv } from "../env"
import * as Errors from "../errors"
import { Mod } from "../mod"
import { Span } from "../span"
import { Stmt } from "../stmt"

export type ImportBinding = ImportBindingName | ImportBindingRename

export type ImportBindingName = {
  kind: "ImportBindingName"
  name: string
}

export function ImportBindingName(name: string): ImportBindingName {
  return {
    kind: "ImportBindingName",
    name,
  }
}

export type ImportBindingRename = {
  kind: "ImportBindingRename"
  name: string
  rename: string
}

export function ImportBindingRename(
  name: string,
  rename: string,
): ImportBindingRename {
  return {
    kind: "ImportBindingRename",
    name,
    rename,
  }
}

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
      this.executeBinding(mod, importedMod, binding)
    }
  }

  executeBinding(mod: Mod, importedMod: Mod, binding: ImportBinding): void {
    switch (binding.kind) {
      case "ImportBindingName": {
        const value = lookupValueInEnv(importedMod.env, binding.name)
        if (value === undefined) {
          throw new Error(
            `I can not import undefined name: ${name}, from path: ${this.path}`,
          )
        }
        mod.define(binding.name, value)
        return
      }

      case "ImportBindingRename": {
        const value = lookupValueInEnv(importedMod.env, binding.name)
        if (value === undefined) {
          throw new Error(
            `I can not import undefined name: ${name}, from path: ${this.path}`,
          )
        }
        mod.define(binding.rename, value)
        return
      }
    }
  }
}
