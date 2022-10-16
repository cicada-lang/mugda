import { Denotation } from "../denotation"
import { Env } from "../env"
import { evaluate } from "../exp"
import { Mod } from "../mod"
import * as Values from "../value"
import { Value } from "../value"

export function evaluateDenotation(
  mod: Mod,
  env: Env,
  name: string,
  denotation: Denotation,
): Value {
  switch (denotation.kind) {
    case "Fn": {
      return Values.RefFn(name)
    }

    case "LetThe": {
      return evaluate(mod, env, denotation.exp)
    }

    case "Ctor": {
      return Values.RefCtor(name)
    }

    case "Data": {
      return Values.RefData(name)
    }
  }
}
