import { Pattern } from "../pattern"

export function formatPattern(pattern: Pattern): string {
  switch (pattern["@kind"]) {
    case "Var": {
      return pattern.name
    }

    case "Ctor": {
      const args = pattern.args.map(formatPattern)
      return args.length === 0
        ? `(${pattern.name})`
        : `(${pattern.name} ${args.join(" ")})`
    }

    case "Compute": {
      return `(# ${formatPattern(pattern.pattern)})`
    }
  }
}
