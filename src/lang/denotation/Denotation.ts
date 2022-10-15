import { Clause } from "../clause"
import { Exp } from "../exp"
import { Value } from "../value"

export type Denotation = Fn | Let | Ctor | Data

export type Fn = {
  family: "Denotation"
  kind: "Fn"
  type: Value
  clauses: Array<Clause>
  isTypeChecked: boolean
}

export function Fn(type: Value, clauses: Array<Clause>, isTypeChecked: boolean): Fn {
  return {
    family: "Denotation",
    kind: "Fn",
    type,
    clauses,
    isTypeChecked,
  }
}

export type Let = {
  family: "Denotation"
  kind: "Let"
  exp: Exp
  type: Value
}

export function Let(exp: Exp, type: Value): Let {
  return {
    family: "Denotation",
    kind: "Let",
    exp,
    type,
  }
}

export type Ctor = {
  family: "Denotation"
  kind: "Ctor"
  type: Value
}

export function Ctor(type: Value): Ctor {
  return {
    family: "Denotation",
    kind: "Ctor",
    type,
  }
}

export type Data = {
  family: "Denotation"
  kind: "Data"
  type: Value
  arity: number
}

export function Data(type: Value, arity: number): Data {
  return {
    family: "Denotation",
    kind: "Data",
    type,
    arity,
  }
}
