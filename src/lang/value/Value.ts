import { Clause } from "../clause"
import { Closure } from "../closure"

export type Value = Var | Type | Pi | Fn | FnClauses | Ap | Data | Ctor

/**

   NOTE The paper call `Set` we call `Type`.

   NOTE The paper does not use `Neutral`, `Var` and `Ap` are values.

   NOTE The paper uses `ApUnfolded` instead of `Ap`.

   NOTE In the paper, `Neutrals.Var` is called generic value,
   and index is used instead of bound name.

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

export type FnClauses = {
  family: "Value"
  kind: "FnClauses"
  type: Value
  clauses: Array<Clause>
  isChecked: boolean
}

export function FnClauses(type: Value, clauses: Array<Clause>, isChecked: boolean): FnClauses {
  return {
    family: "Value",
    kind: "FnClauses",
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

export type Ctor = {
  family: "Value"
  kind: "Ctor"
  type: Value
}

export function Ctor(type: Value): Ctor {
  return {
    family: "Value",
    kind: "Ctor",
    type,
  }
}

export type Data = {
  family: "Value"
  kind: "Data"
  type: Value
  arity: number
}

export function Data(type: Value, arity: number): Data {
  return {
    family: "Value",
    kind: "Data",
    type,
    arity,
  }
}
