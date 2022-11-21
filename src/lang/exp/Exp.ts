import type { Span } from "../span"

type ExpMeta = { span?: Span }

export type Exp =
  | Var
  | Pi
  | PiUnfolded
  | Arrow
  | Fn
  | Ap
  | ApUnfolded
  | Let
  | LetUnfolded

export type Var = {
  "@type": "Exp"
  "@kind": "Var"
  name: string
} & ExpMeta

export function Var(name: string, span?: Span): Var {
  return {
    "@type": "Exp",
    "@kind": "Var",
    name,
    span,
  }
}

export type Pi = {
  "@type": "Exp"
  "@kind": "Pi"
  name: string
  argType: Exp
  retType: Exp
} & ExpMeta

export function Pi(name: string, argType: Exp, retType: Exp, span?: Span): Pi {
  return {
    "@type": "Exp",
    "@kind": "Pi",
    name,
    argType,
    retType,
    span,
  }
}

export type PiUnfolded = {
  "@type": "Exp"
  "@kind": "PiUnfolded"
  bindings: Array<PiBinding>
  retType: Exp
} & ExpMeta

export function PiUnfolded(
  bindings: Array<PiBinding>,
  retType: Exp,
  span?: Span,
): PiUnfolded {
  return {
    "@type": "Exp",
    "@kind": "PiUnfolded",
    bindings,
    retType,
    span,
  }
}

export type PiBinding = PiBindingParameter | PiBindingParameterPositive

export type PiBindingParameter = {
  "@kind": "PiBindingParameter"
  name: string
  type: Exp
}

export function PiBindingParameter(
  name: string,
  type: Exp,
): PiBindingParameter {
  return {
    "@kind": "PiBindingParameter",
    name,
    type,
  }
}

export type PiBindingParameterPositive = {
  "@kind": "PiBindingParameterPositive"
  name: string
  type: Exp
}

export function PiBindingParameterPositive(
  name: string,
  type: Exp,
): PiBindingParameterPositive {
  return {
    "@kind": "PiBindingParameterPositive",
    name,
    type,
  }
}

export type Arrow = {
  "@type": "Exp"
  "@kind": "Arrow"
  types: Array<Exp>
} & ExpMeta

export function Arrow(types: Array<Exp>, span?: Span): Arrow {
  return {
    "@type": "Exp",
    "@kind": "Arrow",
    types,
    span,
  }
}

export type Fn = {
  "@type": "Exp"
  "@kind": "Fn"
  name: string
  ret: Exp
} & ExpMeta

export function Fn(name: string, ret: Exp, span?: Span): Fn {
  return {
    "@type": "Exp",
    "@kind": "Fn",
    name,
    ret,
    span,
  }
}

export type Ap = {
  "@type": "Exp"
  "@kind": "Ap"
  target: Exp
  arg: Exp
} & ExpMeta

export function Ap(target: Exp, arg: Exp, span?: Span): Ap {
  return {
    "@type": "Exp",
    "@kind": "Ap",
    target,
    arg,
    span,
  }
}

export type ApUnfolded = {
  "@type": "Exp"
  "@kind": "ApUnfolded"
  target: Exp
  args: Array<Exp>
} & ExpMeta

export function ApUnfolded(
  target: Exp,
  args: Array<Exp>,
  span?: Span,
): ApUnfolded {
  return {
    "@type": "Exp",
    "@kind": "ApUnfolded",
    target,
    args,
    span,
  }
}

export type Let = {
  "@type": "Exp"
  "@kind": "Let"
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
    "@type": "Exp",
    "@kind": "Let",
    name,
    type,
    exp,
    ret,
    span,
  }
}

export type LetUnfolded = {
  "@type": "Exp"
  "@kind": "LetUnfolded"
  bindings: Array<LetBinding>
  ret: Exp
} & ExpMeta

export function LetUnfolded(
  bindings: Array<LetBinding>,
  ret: Exp,
  span?: Span,
): LetUnfolded {
  return {
    "@type": "Exp",
    "@kind": "LetUnfolded",
    bindings,
    ret,
    span,
  }
}

export type LetBinding = LetBindingTyped

export type LetBindingTyped = {
  "@kind": "LetBindingTyped"
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
    "@kind": "LetBindingTyped",
    name,
    exp,
    type,
  }
}
