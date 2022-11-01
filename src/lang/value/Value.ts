import { Closure } from "../closure"
import { Env } from "../env"
import { Exp, Telescope } from "../exp"
import { Mod } from "../mod"
import { Clause } from "../value"

export type Value = Var | Type | Pi | Fn | FnMatch | Ap | Data | Ctor

export type Var = {
  family: "Value"
  kind: "Var"
  name: string
}

export function Var(name: string): Var {
  return {
    family: "Value",
    kind: "Var",
    name,
  }
}

export type Type = {
  family: "Value"
  kind: "Type"
}

export function Type(): Type {
  return {
    family: "Value",
    kind: "Type",
  }
}

export type Pi = {
  family: "Value"
  kind: "Pi"
  argType: Value
  retTypeClosure: Closure
}

export function Pi(argType: Value, retTypeClosure: Closure): Pi {
  return {
    family: "Value",
    kind: "Pi",
    argType,
    retTypeClosure,
  }
}

export type Fn = {
  family: "Value"
  kind: "Fn"
  retClosure: Closure
}

export function Fn(retClosure: Closure): Fn {
  return {
    family: "Value",
    kind: "Fn",
    retClosure,
  }
}

export type FnMatch = {
  family: "Value"
  kind: "FnMatch"
  type: Value
  clauses: Array<Clause>
  arity: number
  isChecked: boolean
}

export function FnMatch(
  type: Value,
  clauses: Array<Clause>,
  arity: number,
  isChecked: boolean,
): FnMatch {
  return {
    family: "Value",
    kind: "FnMatch",
    type,
    clauses,
    arity,
    isChecked,
  }
}

export type Ap = {
  family: "Value"
  kind: "Ap"
  target: Value
  arg: Value
}

export function Ap(target: Value, arg: Value): Ap {
  return {
    family: "Value",
    kind: "Ap",
    target,
    arg,
  }
}

/**
   | parameters | fixed  |
   | indexes    | varied |
**/

export type Data = {
  family: "Value"
  kind: "Data"
  name: string
  mod: Mod
  env: Env
  fixed: Telescope
  varied: Telescope
}

export function Data(
  name: string,
  mod: Mod,
  env: Env,
  fixed: Telescope,
  varied: Telescope,
): Data {
  return {
    family: "Value",
    kind: "Data",
    name,
    mod,
    env,
    fixed,
    varied,
  }
}

export type Ctor = {
  family: "Value"
  kind: "Ctor"
  name: string
  mod: Mod
  env: Env
  fixed: Telescope
  args: Telescope
  retType: Exp
}

export function Ctor(
  name: string,
  mod: Mod,
  env: Env,
  fixed: Telescope,
  args: Telescope,
  retType: Exp,
): Ctor {
  return {
    family: "Value",
    kind: "Ctor",
    name,
    mod,
    env,
    fixed,
    args,
    retType,
  }
}
