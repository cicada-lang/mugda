import { Closure } from "../closure"

export type Value = Pi | Fn | Ap

/**

   NOTE The paper does not use `Neutral`, `Var` and `Ap` are values.

   NOTE The paper uses `ApUnfolded` instead of `Ap`, I am not sure it is necessary.

**/

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
