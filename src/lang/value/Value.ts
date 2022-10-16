import { Closure } from "../closure"

export type Value = Var | Type | Pi | Fn | Ap | Ref

/**

   NOTE The paper call `Set` we call `Type`.

   NOTE The paper does not use `Neutral`, `Var` and `Ap` are values.

   NOTE The paper uses `ApUnfolded` instead of `Ap`, I am not sure it is necessary.

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

export type Ref = RefFn | RefData | RefCtor

export type RefFn = {
  family: "Value"
  kind: "RefFn"
  name: string
}

export function RefFn(name: string): RefFn {
  return {
    family: "Value",
    kind: "RefFn",
    name,
  }
}

export type RefData = {
  family: "Value"
  kind: "RefData"
  name: string
}

export function RefData(name: string): RefData {
  return {
    family: "Value",
    kind: "RefData",
    name,
  }
}

export type RefCtor = {
  family: "Value"
  kind: "RefCtor"
  name: string
}

export function RefCtor(name: string): RefCtor {
  return {
    family: "Value",
    kind: "RefCtor",
    name,
  }
}
