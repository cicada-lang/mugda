import { Pattern } from "../pattern"

export function formatPattern(pattern: Pattern): string {
  switch (pattern.kind) {
    case "Var": {
      return pattern.name
    }

    case "Ctor": {
      throw new Error()
    }

    case "Inaccessible": {
      return `(# ${formatPattern(pattern.pattern)})`
    }
  }
}
