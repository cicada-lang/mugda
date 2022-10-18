import { Mod } from "../mod"
import { Span } from "../span"
import { Stmt } from "../stmt"

export type ImportEntry = {
  name: string
  rename?: string
}

export class Import extends Stmt {
  constructor(
    public path: string,
    public entries: Array<ImportEntry>,
    public span?: Span,
  ) {
    super()
  }

  async execute(mod: Mod): Promise<void> {
    // TODO
  }
}
