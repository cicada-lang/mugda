import { Env } from "../env"
import { Exp } from "../exp"

export type Telescope = {
  env: Env
  bindings: Array<TelescopeBinding>
}

export type TelescopeBinding =
  | TelescopeBindingParameter
  | TelescopeBindingParameterPositive

export type TelescopeBindingParameter = {
  kind: "TelescopeBindingParameter"
  name: string
  type: Exp
}

export function TelescopeBindingParameter(
  name: string,
  type: Exp,
): TelescopeBindingParameter {
  return {
    kind: "TelescopeBindingParameter",
    name,
    type,
  }
}

export type TelescopeBindingParameterPositive = {
  kind: "TelescopeBindingParameterPositive"
  name: string
  type: Exp
}

export function TelescopeBindingParameterPositive(
  name: string,
  type: Exp,
): TelescopeBindingParameterPositive {
  return {
    kind: "TelescopeBindingParameterPositive",
    name,
    type,
  }
}
