import { Loader } from "../../loader"
import { Env, EnvCons, EnvNull } from "../env"
import * as Errors from "../errors"
import { useGlobals } from "../globals"
import { Span } from "../span"
import { Stmt, StmtOutput } from "../stmt"
import { CallMatrix, completeCallMatrixes } from "../termination"
import { Value } from "../value"

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
  arities: Map<string, number> = new Map()
  outputs: Map<number, StmtOutput> = new Map()
  stmts: Array<Stmt> = []
  initialized = false
  callMatrixes: Array<CallMatrix> = []

  constructor(public options: ModOptions) {}

  resolve(href: string): URL {
    return new URL(href, this.options.url)
  }

  async initialize(): Promise<void> {
    if (this.initialized) return
    const globals = useGlobals()
    await globals.mount(this)
  }

  async executeStmts(stmts: Array<Stmt>): Promise<void> {
    await this.initialize()

    for (const stmt of stmts.values()) {
      stmt.prepare(this)
    }

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

  define(name: string, value: Value): void {
    this.env = EnvCons(name, value, this.env)
  }

  checkCallMatrixes(callMatrixes: Array<CallMatrix>, span: Span): void {
    this.callMatrixes = completeCallMatrixes([
      ...this.callMatrixes,
      ...callMatrixes,
    ])

    for (const callMatrix of this.callMatrixes) {
      if (callMatrix.isNotTerminating()) {
        throw new Errors.TerminationError(
          "Size-decreasing principle fail",
          span,
        )
      }
    }
  }
}
