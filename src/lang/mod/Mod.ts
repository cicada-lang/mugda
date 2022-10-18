import { Loader } from "../../loader"
import { Env, EnvNull } from "../env"
import { Stmt, StmtOutput } from "../stmt"

/**

   NOTE The paper call `Signature`, we call `Mod`.

   NOTE The paper use `denotations` mapping from `name` to different kind of `Denotation`s.
   We view all `Denotation` as `Value`, thus we can simply use `Env` here.
   (The terminology `Denotation` is learned from EOPL.)

**/

export interface ModOptions {
  url: URL
  loader: Loader
}

export class Mod {
  env: Env = EnvNull()
  outputs: Map<number, StmtOutput> = new Map()
  stmts: Array<Stmt> = []

  constructor(public options: ModOptions) {}

  resolve(href: string): URL {
    return new URL(href, this.options.url)
  }

  async executeStmts(stmts: Array<Stmt>): Promise<void> {
    const offset = this.stmts.length
    for (const [index, stmt] of stmts.entries()) {
      const output = await stmt.execute(this)
      this.stmts.push(stmt)
      if (output) {
        this.outputs.set(offset + index, output)
        if (this.options.loader.options.onOutput) {
          this.options.loader.options.onOutput(output)
        }
      }
    }
  }
}
