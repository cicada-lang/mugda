import { Mod } from "../mod"
import type { Span } from "../span"

/**

   NOTE The paper call `Decl` (declaration),
   we call `Stmt` (statement).

**/

export abstract class Stmt {
  abstract span?: Span
  abstract execute(mod: Mod): Promise<string | void>
  prepare(mod: Mod): void {}
}
