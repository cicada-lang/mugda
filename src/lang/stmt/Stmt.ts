import { Mod } from "../mod"
import { Span } from "../span"

/**

   NOTE The paper call `Decl` (declaration),
   we call `Stmt` (statement).

**/

export type StmtOutput = string

export abstract class Stmt {
  abstract span?: Span
  abstract execute(mod: Mod): Promise<StmtOutput | void>
  prepare(mod: Mod): void {}
}
