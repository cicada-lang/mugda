import { lookupValueInEnv } from "../env"
import * as Exps from "../exp"
import { Exp } from "../exp"
import { Mod } from "../mod"
import { Pattern } from "../pattern"
import * as Orders from "./Order"
import { Order } from "./Order"

export function compareExpWithPatten(
  mod: Mod,
  exp: Exp,
  pattern: Pattern,
): Order {
  if (pattern.kind === "Inaccessible") {
    return compareExpWithPatten(mod, exp, pattern.pattern)
  }

  if (exp.kind === "Var" && isCtorName(mod, exp.name)) {
    if (pattern.kind === "Ctor" && pattern.name === exp.name) {
      return Orders.Neutral
    }
  }

  if (exp.kind === "Var") {
    return compareVarWithPatten(mod, exp.name, pattern)
  }

  if (exp.kind === "Ap") {
    const unfolded = Exps.unfoldAp(exp)

    // Exps.ApUnfolded(unfolded.target, unfolded.args)
    // return compareExpWithPatten(mod, exp.name, pattern)
  }

  return Orders.LargerOrNotComparable
}

function isCtorName(mod: Mod, name: string): boolean {
  const value = lookupValueInEnv(mod.env, name)
  if (value === undefined) return false

  return value.kind === "Ctor" || value.kind === "Coctor"
}

function compareVarWithPatten(mod: Mod, name: string, pattern: Pattern): Order {
  switch (pattern.kind) {
    case "Var": {
      throw new Error("TODO")
    }

    case "Ctor": {
      throw new Error("TODO")
    }

    case "Inaccessible": {
      throw new Error("TODO")
    }
  }
}
