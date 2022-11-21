import { Pattern } from "../pattern"

export function patternBoundNames(pattern: Pattern): Set<string> {
  switch (pattern["@kind"]) {
    case "Var": {
      return new Set([pattern.name])
    }

    case "Ctor": {
      return new Set(
        pattern.args.flatMap((arg) => Array.from(patternBoundNames(arg))),
      )
    }

    case "Compute": {
      return new Set()
    }
  }
}
