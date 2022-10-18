import { Span } from "../span"

type ExpMeta = { span?: Span }

export type Exp = Var | Pi | PiUnfolded | Arrow | Fn | Ap | Let | LetUnfolded

export type Var = {
  family: "Exp"
  kind: "Var"
  name: string
} & ExpMeta

export function Var(name: string, span?: Span): Var {
  return {
    family: "Exp",
    kind: "Var",
    name,
    span,
  }
}

export type Pi = {
  family: "Exp"
  kind: "Pi"
  name: string
  argType: Exp
  retType: Exp
} & ExpMeta

export function Pi(name: string, argType: Exp, retType: Exp, span?: Span): Pi {
  return {
    family: "Exp",
    kind: "Pi",
    name,
    argType,
    retType,
    span,
  }
}

export type PiUnfolded = {
  family: "Exp"
  kind: "PiUnfolded"
  bindings: Array<PiBinding>
  retType: Exp
} & ExpMeta

export function PiUnfolded(
  bindings: Array<PiBinding>,
  retType: Exp,
  span?: Span,
): PiUnfolded {
  return {
    family: "Exp",
    kind: "PiUnfolded",
    bindings,
    retType,
    span,
  }
}

export type PiBinding = PiBindingParameter | PiBindingParameterPositive

export type PiBindingParameter = {
  kind: "PiBindingParameter"
  name: string
  type: Exp
}

export function PiBindingParameter(
  name: string,
  type: Exp,
): PiBindingParameter {
  return {
    kind: "PiBindingParameter",
    name,
    type,
  }
}

export type PiBindingParameterPositive = {
  kind: "PiBindingParameterPositive"
  name: string
  type: Exp
}

export function PiBindingParameterPositive(
  name: string,
  type: Exp,
): PiBindingParameterPositive {
  return {
    kind: "PiBindingParameterPositive",
    name,
    type,
  }
}

export type Arrow = {
  family: "Exp"
  kind: "Arrow"
  types: Array<Exp>
} & ExpMeta

export function Arrow(types: Array<Exp>, span?: Span): Arrow {
  return {
    family: "Exp",
    kind: "Arrow",
    types,
    span,
  }
}

export type Fn = {
  family: "Exp"
  kind: "Fn"
  name: string
  ret: Exp
} & ExpMeta

export function Fn(name: string, ret: Exp, span?: Span): Fn {
  return {
    family: "Exp",
    kind: "Fn",
    name,
    ret,
    span,
  }
}

export type Ap = {
  family: "Exp"
  kind: "Ap"
  target: Exp
  arg: Exp
} & ExpMeta

export function Ap(target: Exp, arg: Exp, span?: Span): Ap {
  return {
    family: "Exp",
    kind: "Ap",
    target,
    arg,
    span,
  }
}

export type Let = {
  family: "Exp"
  kind: "Let"
  name: string
  type: Exp
  exp: Exp
  ret: Exp
} & ExpMeta

export function Let(
  name: string,
  type: Exp,
  exp: Exp,
  ret: Exp,
  span?: Span,
): Let {
  return {
    family: "Exp",
    kind: "Let",
    name,
    type,
    exp,
    ret,
    span,
  }
}

export type LetUnfolded = {
  family: "Exp"
  kind: "LetUnfolded"
  bindings: Array<LetBinding>
  ret: Exp
} & ExpMeta

export function LetUnfolded(
  bindings: Array<LetBinding>,
  ret: Exp,
  span?: Span,
): LetUnfolded {
  return {
    family: "Exp",
    kind: "LetUnfolded",
    bindings,
    ret,
    span,
  }
}

export type LetBinding = LetBindingTyped

export type LetBindingTyped = {
  kind: "LetBindingTyped"
  name: string
  exp: Exp
  type: Exp
}

export function LetBindingTyped(
  name: string,
  exp: Exp,
  type: Exp,
): LetBindingTyped {
  return {
    kind: "LetBindingTyped",
    name,
    exp,
    type,
  }
}
