import { Exp } from "../exp"

export type Telescope =
  | TelescopeNull
  | TelescopeParameter
  | TelescopeParameterPositive

export type TelescopeNull = {
  kind: "TelescopeNull"
}

export function TelescopeNull(): TelescopeNull {
  return {
    kind: "TelescopeNull",
  }
}

export type TelescopeParameter = {
  kind: "TelescopeParameter"
  name: string
  type: Exp
  rest: Telescope
}

export function TelescopeParameter(
  name: string,
  type: Exp,
  rest: Telescope,
): TelescopeParameter {
  return {
    kind: "TelescopeParameter",
    name,
    type,
    rest,
  }
}

export type TelescopeParameterPositive = {
  kind: "TelescopeParameterPositive"
  name: string
  type: Exp
  rest: Telescope
}

export function TelescopeParameterPositive(
  name: string,
  type: Exp,
  rest: Telescope,
): TelescopeParameterPositive {
  return {
    kind: "TelescopeParameterPositive",
    name,
    type,
    rest,
  }
}
