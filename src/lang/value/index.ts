import { Closure } from "../closure"

export type Value = Var | Type | Pi | Fn | Ap

/**

   NOTE The paper call `Set` we call `Type`.

   NOTE The paper does not use `Neutral`, `Var` and `Ap` are values.

   NOTE The paper uses `ApUnfolded` instead of `Ap`, I am not sure it is necessary.

   NOTE In the paper, `Neutrals.Var` is called generic value,
   and index is used instead of bound name.

   "A generic value k ∈ N represents the computed value of a variable during type-checking."

   `Var` of different kind of identifiers are distinguished in `Exp`,
   I am not sure it is necessary.

   | c | constructor name |
   | f | function name    |
   | D | data name        |

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
  name: string
  argType: Value
  retTypeClosure: Closure
}

export function Pi(name: string, argType: Value, retTypeClosure: Closure): Pi {
  return {
    family: "Value",
    kind: "Pi",
    name,
    argType,
    retTypeClosure,
  }
}

export type Fn = {
  family: "Value"
  kind: "Fn"
  name: string
  retClosure: Closure
}

export function Fn(name: string, retClosure: Closure): Fn {
  return {
    family: "Value",
    kind: "Fn",
    name,
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
