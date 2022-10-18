import { Value } from "../value"

export function formatValue(value: Value): string {
  switch (value.kind) {
    case "Var": {
    }

    case "Type": {
    }

    case "Pi": {
    }

    case "Fn": {
    }

    case "FnClauses": {
    }

    case "Ap": {
    }

    case "Data": {
    }

    case "Ctor": {
    }

    case "Codata": {
    }

    case "Coctor": {
    }
  }

  console.log(value)
  return "TODO"
}
