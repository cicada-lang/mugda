import { Closure } from "../closure"
import { Env } from "../env"
import { Telescope } from "../exp"
import { Clause } from "../value"

export type Value =
  | Var
  | Type
  | Pi
  | Fn
  | FnMatch
  | Ap
  | Data
  | Ctor
  | Codata
  | Coctor

/**

   NOTE The paper call `Set` we call `Type`.

   NOTE The paper uses `ApUnfolded` instead of `Ap`.

   NOTE The paper does not use `Neutral`, `Var` and `Ap` are values.
   `Neutrals.Var` is called generic value, and index is used instead of bound name.

   "A generic value k ∈ N represents the computed value of a variable during type-checking."

**/

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
  isChecked: boolean
}

export function FnMatch(
  type: Value,
  clauses: Array<Clause>,
  isChecked: boolean,
): FnMatch {
  return {
    family: "Value",
    kind: "FnMatch",
    type,
    clauses,
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
   | parameters | varied |
   | indexes    | fixed  |
**/

export type Data = {
  family: "Value"
  kind: "Data"
  name: string
  env: Env
  varied: Telescope
  fixed: Telescope
}

export function Data(
  name: string,
  env: Env,
  varied: Telescope,
  fixed: Telescope,
): Data {
  return {
    family: "Value",
    kind: "Data",
    name,
    env,
    varied,
    fixed,
  }
}

export type Ctor = {
  family: "Value"
  kind: "Ctor"
  name: string
  type: Value
}

export function Ctor(name: string, type: Value): Ctor {
  return {
    family: "Value",
    kind: "Ctor",
    name,
    type,
  }
}

export type Codata = {
  family: "Value"
  kind: "Codata"
  name: string
  env: Env
  varied: Telescope
  fixed: Telescope
}

export function Codata(
  name: string,
  env: Env,
  varied: Telescope,
  fixed: Telescope,
): Codata {
  return {
    family: "Value",
    kind: "Codata",
    name,
    env,
    varied,
    fixed,
  }
}

export type Coctor = {
  family: "Value"
  kind: "Coctor"
  name: string
  type: Value
}

export function Coctor(name: string, type: Value): Coctor {
  return {
    family: "Value",
    kind: "Coctor",
    name,
    type,
  }
}
