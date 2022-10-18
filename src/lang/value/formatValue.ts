import { applyClosure } from "../closure"
import * as Values from "../value"
import { Value } from "../value"

export function formatValue(value: Value): string {
  switch (value.kind) {
    case "Var": {
      return value.name
    }

    case "Type": {
      return "Type"
    }

    case "Pi": {
      const argType = formatValue(value.argType)
      const name = value.retTypeClosure.name
      const retType = formatValue(
        applyClosure(value.retTypeClosure, Values.Var(name)),
      )
      return `(Pi ${argType} (Closure ${name} ${retType}))`
    }

    case "Fn": {
      const name = value.retClosure.name
      const ret = formatValue(applyClosure(value.retClosure, Values.Var(name)))
      return `(lambda (Closure ${name} ${ret}))`
    }

    case "FnClauses": {
      throw new Error("TODO")
    }

    case "Ap": {
      const target = formatValue(value.target)
      const arg = formatValue(value.arg)
      return `(${target} ${arg})`
    }

    case "Data": {
      throw new Error("TODO")
    }

    case "Ctor": {
      throw new Error("TODO")
    }

    case "Codata": {
      throw new Error("TODO")
    }

    case "Coctor": {
      throw new Error("TODO")
    }
  }
}
