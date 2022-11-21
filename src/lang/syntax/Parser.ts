import { Parser as SexpParser } from "@cicada-lang/sexp"
import type { Exp } from "../exp"
import { Stmt } from "../stmt"
import { matchExp } from "./matchExp"
import { matchStmt } from "./matchStmt"

export class Parser extends SexpParser {
  constructor() {
    super({
      quotes: [
        { mark: "'", symbol: "quote" },
        { mark: ",", symbol: "unquote" },
        { mark: "`", symbol: "quasiquote" },
      ],
      parentheses: [
        { start: "(", end: ")" },
        { start: "[", end: "]" },
      ],
      comments: [";"],
    })
  }

  parseExp(text: string): Exp {
    return matchExp(this.parseSexp(text))
  }

  parseStmts(text: string): Array<Stmt> {
    return this.parseSexps(text).map(matchStmt)
  }
}
