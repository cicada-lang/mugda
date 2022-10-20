import { formatClause } from "../clause"
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
      const { bindings, retType } = Values.unfoldFormatPi(value)
      return `(Pi (${bindings.join(" ")}) ${retType})`
    }

    case "Fn": {
      const { bindings, ret } = Values.unfoldFormatFn(value)
      return `(lambda (${bindings.join(" ")}) ${ret})`
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
