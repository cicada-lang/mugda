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

export type Let = {
  family: "Denotation"
  kind: "Let"
  exp: Exp
  type: Value
}

export type Ctor = {
  family: "Denotation"
  kind: "Ctor"
  type: Value
}

export type Data = {
  family: "Denotation"
  kind: "Data"
  type: Value
  arity: number
}
