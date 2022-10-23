import { Exp } from "../exp"
import { Pattern } from "../pattern"
import * as Orders from "./Order"
import { Order } from "./Order"

export function compareExpWithPatten(exp: Exp, pattern: Pattern): Order {
  if (pattern.kind === "Inaccessible") {
    throw new Error("TODO")
  }

  if (exp.kind === "Var") {
    throw new Error("TODO")
  }

  if (exp.kind === "Ap") {
    throw new Error("TODO")
  }

  return Orders.NotComparable
}

export function compareVarWithPatten(name: string, pattern: Pattern): Order {
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
