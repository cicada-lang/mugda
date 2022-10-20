import * as Exps from "../exp"
import { Exp } from "../exp"

export function formatExp(exp: Exp): string {
  switch (exp.kind) {
    case "Var": {
      return exp.name
    }

    case "Pi": {
      const argType = formatExp(exp.argType)
      const retType = formatExp(exp.retType)
      return `(Pi ([${name} ${argType}]) ${retType})`
    }

    case "PiUnfolded": {
      const bindings = exp.bindings.map(formatPiBinding)
      const retType = formatExp(exp.retType)
      return `(Pi (${bindings.join(" ")}) ${retType})`
    }

    case "Arrow": {
      const types = exp.types.map(formatExp)
      return `(-> ${types.join(" ")})`
    }

    case "Fn": {
      const ret = formatExp(exp.ret)
      return `(lambda (${name}) ${ret})`
    }

    case "Ap": {
      const target = formatExp(exp.target)
      const arg = formatExp(exp.arg)
      return `(${target} ${arg})`
    }

    case "Let": {
      const type = formatExp(exp.type)
      const ret = formatExp(exp.ret)
      return `(let ([${exp.name} ${type} ${formatExp(exp.exp)}]) ${ret})`
    }

    case "LetUnfolded": {
      const bindings = exp.bindings.map(formatLetBinding)
      const ret = formatExp(exp.ret)
      return `(let (${bindings.join(" ")}) ${ret})`
    }
  }
}

function formatPiBinding(binding: Exps.PiBinding): string {
  switch (binding.kind) {
    case "PiBindingParameter": {
      const type = formatExp(binding.type)
      return `[${binding.name} ${type}]`
    }

    case "PiBindingParameterPositive": {
      const type = formatExp(binding.type)
      return `[+ ${binding.name} ${type}]`
    }
  }
}

function formatLetBinding(binding: Exps.LetBinding): string {
  switch (binding.kind) {
    case "LetBindingTyped": {
      const type = formatExp(binding.type)
      return `[${binding.name} ${type}]`
    }
  }
}
