import { lookupValueInEnv } from "../../env"
import { Mod } from "../../mod"
import { ImportBinding } from "../import"

export function executeBinding(
  mod: Mod,
  importedMod: Mod,
  binding: ImportBinding,
): void {
  switch (binding.kind) {
    case "ImportBindingName": {
      const value = lookupValueInEnv(importedMod.env, binding.name)
      if (value === undefined) {
        throw new Error(
          `I can not import undefined name: ${name}, from: ${importedMod.options.url}`,
        )
      }
      mod.define(binding.name, value)
      return
    }

    case "ImportBindingRename": {
      const value = lookupValueInEnv(importedMod.env, binding.name)
      if (value === undefined) {
        throw new Error(
          `I can not import undefined name: ${name}, from: ${importedMod.options.url}`,
        )
      }
      mod.define(binding.rename, value)
      return
    }
  }
}
