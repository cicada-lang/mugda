import { formatClause } from "../clause"
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
      return `(Pi ((${name} ${argType})) ${retType})`
    }

    case "Fn": {
      const name = value.retClosure.name
      const ret = formatValue(applyClosure(value.retClosure, Values.Var(name)))
      return `(lambda (${name}) ${ret})`
    }

    case "FnClauses": {
      const clauses = value.clauses.map(formatClause)
      return `(fn ${clauses.join(" ")})`
    }

    case "Ap": {
      const { target, args } = Values.unfoldFormatAp(value)
      return args.length === 0 ? `(${target})` : `(${target} ${args.join(" ")})`
    }

    case "Data": {
      return value.name
    }

    case "Ctor": {
      return value.name
    }

    case "Codata": {
      return value.name
    }

    case "Coctor": {
      return value.name
    }
  }
}
