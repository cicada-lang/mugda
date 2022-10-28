import { Loader } from "../../loader"
import { EnvCons } from "../env"
import { evaluate } from "../exp"
import { Mod } from "../mod"
import { Parser } from "../parser"
import { Value } from "../value"

export class GlobalStore {
  parser = new Parser()
  values: Map<string, Value> = new Map()
  mod = new Mod({ loader: new Loader({}), url: new URL("globals://") })

  async mount(mod: Mod): Promise<void> {
    for (const [name, value] of this.values.entries()) {
      mod.env = EnvCons(name, value, mod.env)
    }
  }

  define(name: string, value: Value | string): void {
    if (typeof value === "string") {
      const exp = this.parser.parseExp(value)
      value = evaluate(this.mod, this.mod.env, exp)
      this.mod.define(name, value)
      this.values.set(name, value)
    } else {
      this.mod.define(name, value)
      this.values.set(name, value)
    }
  }
}
