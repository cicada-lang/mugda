import { lookupValueInEnv } from "../../env"
import * as Errors from "../../errors"
import { Mod } from "../../mod"
import { Span } from "../../span"
import { ImportBinding } from "../import"

export function executeBinding(
  mod: Mod,
  importedMod: Mod,
  binding: ImportBinding,
  span: Span,
): void {
  switch (binding.kind) {
    case "ImportBindingName": {
      const { name } = binding
      const value = lookupValueInEnv(importedMod.env, name)
      if (value === undefined) {
        throw new Errors.ElaborationError(
          `I can not import undefined name: ${name}, from: ${importedMod.options.url}`,
          span,
        )
      }
      mod.define(name, value)
      return
    }

    case "ImportBindingRename": {
      for (const { name, alias } of binding.aliases) {
        const value = lookupValueInEnv(importedMod.env, name)
        if (value === undefined) {
          throw new Errors.ElaborationError(
            `I can not import undefined name: ${name}, from: ${importedMod.options.url}`,
            span,
          )
        }
        mod.define(alias, value)
      }
      return
    }
  }
}
