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
      return `(Pi ([${name} ${argType}]) ${retType})`
    }

    case "Fn": {
      const name = value.retClosure.name
      const ret = formatValue(applyClosure(value.retClosure, Values.Var(name)))
      return `(lambda (${name}) ${ret})`
    }

    case "FnClauses": {
      const type = formatValue(value.type)
      const clauses = value.clauses.map(formatClause)
      return `(lambda-clauses ${type} ${clauses.join(" ")})`
    }

    case "Ap": {
      const target = formatValue(value.target)
      const arg = formatValue(value.arg)
      return `(${target} ${arg})`
    }

    case "Data": {
      const type = formatValue(value.type)
      return `(data ${value.name} ${type})`
    }

    case "Ctor": {
      const type = formatValue(value.type)
      return `(ctor ${value.name} ${type})`
    }

    case "Codata": {
      const type = formatValue(value.type)
      return `(codata ${value.name} ${type})`
    }

    case "Coctor": {
      const type = formatValue(value.type)
      return `(coctor ${value.name} ${type})`
    }
  }
}
