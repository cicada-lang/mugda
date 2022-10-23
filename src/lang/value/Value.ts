import { Closure } from "../closure"
import { Env } from "../env"
import { Exp, Telescope } from "../exp"
import { Clause } from "../value"

export type Value =
  | Var
  | Type
  | Lazy
  | Pi
  | Fn
  | FnMatch
  | Ap
  | Data
  | Ctor
  | Codata
  | Coctor

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

export type Lazy = {
  family: "Value"
  kind: "Lazy"
  env: Env
  exp: Exp
}

export function Lazy(env: Env, exp: Exp): Lazy {
  return {
    family: "Value",
    kind: "Lazy",
    env,
    exp,
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
  env: Env
  fixed: Telescope
  varied: Telescope
}

export function Data(
  name: string,
  env: Env,
  fixed: Telescope,
  varied: Telescope,
): Data {
  return {
    family: "Value",
    kind: "Data",
    name,
    env,
    fixed,
    varied,
  }
}

export type Ctor = {
  family: "Value"
  kind: "Ctor"
  name: string
  env: Env
  fixed: Telescope
  args: Telescope
  retType: Exp
}

export function Ctor(
  name: string,
  env: Env,
  fixed: Telescope,
  args: Telescope,
  retType: Exp,
): Ctor {
  return {
    family: "Value",
    kind: "Ctor",
    name,
    env,
    fixed,
    args,
    retType,
  }
}

export type Codata = {
  family: "Value"
  kind: "Codata"
  name: string
  env: Env
  fixed: Telescope
  varied: Telescope
}

export function Codata(
  name: string,
  env: Env,
  fixed: Telescope,
  varied: Telescope,
): Codata {
  return {
    family: "Value",
    kind: "Codata",
    name,
    env,
    fixed,
    varied,
  }
}

export type Coctor = {
  family: "Value"
  kind: "Coctor"
  name: string
  env: Env
  fixed: Telescope
  args: Telescope
  retType: Exp
}

export function Coctor(
  name: string,
  env: Env,
  fixed: Telescope,
  args: Telescope,
  retType: Exp,
): Coctor {
  return {
    family: "Value",
    kind: "Coctor",
    name,
    env,
    fixed,
    args,
    retType,
  }
}
