export type Exp = Var | Pi | PiUnfolded | Fn | Ap | Let | LetUnfolded | Type

/**

   NOTE The paper uses `ApUnfolded` instead of `Ap`.

**/

export type Var = {
  family: "Exp"
  kind: "Var"
  name: string
}

export function Var(name: string): Var {
  return {
    family: "Exp",
    kind: "Var",
    name,
  }
}

export type Pi = {
  family: "Exp"
  kind: "Pi"
  name: string
  argType: Exp
  retType: Exp
}

export function Pi(name: string, argType: Exp, retType: Exp): Pi {
  return {
    family: "Exp",
    kind: "Pi",
    name,
    argType,
    retType,
  }
}

export type PiUnfolded = {
  family: "Exp"
  kind: "PiUnfolded"
  bindings: Array<PiBinding>
  retType: Exp
}

export function PiUnfolded(
  bindings: Array<PiBinding>,
  retType: Exp,
): PiUnfolded {
  return {
    family: "Exp",
    kind: "PiUnfolded",
    bindings,
    retType,
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

export type Fn = {
  family: "Exp"
  kind: "Fn"
  name: string
  ret: Exp
}

export function Fn(name: string, ret: Exp): Fn {
  return {
    family: "Exp",
    kind: "Fn",
    name,
    ret,
  }
}

export type Ap = {
  family: "Exp"
  kind: "Ap"
  target: Exp
  arg: Exp
}

export function Ap(target: Exp, arg: Exp): Ap {
  return {
    family: "Exp",
    kind: "Ap",
    target,
    arg,
  }
}

export type Let = {
  family: "Exp"
  kind: "Let"
  name: string
  type: Exp
  exp: Exp
  ret: Exp
}

export function Let(name: string, type: Exp, exp: Exp, ret: Exp): Let {
  return {
    family: "Exp",
    kind: "Let",
    name,
    type,
    exp,
    ret,
  }
}

export type LetUnfolded = {
  family: "Exp"
  kind: "LetUnfolded"
  bindings: Array<LetBinding>
  ret: Exp
}

export function LetUnfolded(
  bindings: Array<LetBinding>,
  ret: Exp,
): LetUnfolded {
  return {
    family: "Exp",
    kind: "LetUnfolded",
    bindings,
    ret,
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

export type Type = {
  family: "Exp"
  kind: "Type"
}

export function Type(): Type {
  return {
    family: "Exp",
    kind: "Type",
  }
}
