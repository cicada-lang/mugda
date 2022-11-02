import * as Neutrals from "../neutral"
import * as Values from "../value"
import { formatClause, Value } from "../value"

export function formatValue(value: Value): string {
  switch (value.kind) {
    case "UntypedNeutral": {
      return Neutrals.formatNeutral(value.neutral)
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

    case "FnMatch": {
      const clauses = value.clauses.map(formatClause)
      const fn = `(fn ${clauses.join(" ")})`
      if (value.args.length === 0) return fn
      const args = value.args.map(formatValue)
      return `(${fn} ${args.join(" ")})`
    }

    case "Data": {
      if (value.args.length === 0) return value.name
      const args = value.args.map(formatValue)
      return `(${value.name} ${args.join(" ")})`
    }

    case "Ctor": {
      if (value.args.length === 0) return value.name
      const args = value.args.map(formatValue)
      return `(${value.name} ${args.join(" ")})`
    }
  }
}
