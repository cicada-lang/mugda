import * as Exps from "../exp"
import { Exp } from "../exp"

export function formatExp(exp: Exp): string {
  switch (exp.kind) {
    case "Var": {
      return exp.name
    }

    case "Pi": {
      const unfolded = Exps.unfoldPi(exp)
      const bindings = unfolded.bindings.map(formatPiBinding)
      const retType = formatExp(unfolded.retType)
      return `(Pi (${bindings.join(" ")}) ${retType})`
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
      return `(lambda (${exp.name}) ${ret})`
    }

    case "Ap":
    case "ApUnfolded": {
      const unfolded = Exps.unfoldAp(exp)
      const target = formatExp(unfolded.target)
      const args = unfolded.args.map(formatExp)
      return args.length === 0 ? `(${target})` : `(${target} ${args.join(" ")})`
    }

    case "Let": {
      const unfolded = Exps.unfoldLet(exp)
      const bindings = unfolded.bindings.map(formatLetBinding)
      const ret = formatExp(unfolded.ret)
      return `(let (${bindings.join(" ")}) ${ret})`
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
