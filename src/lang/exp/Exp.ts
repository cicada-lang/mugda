export type Exp = Var | Pi | Fn | Ap | Let | Type

/**

   TODO The paper uses `ApUnfolded` instead of `Ap`,
   I am not sure this is necessary.

   TODO The paper distinguishes different identifiers,
   I am not sure how to implement this yet.

   | x | variable         |
   | c | constructor name |
   | D | data type name   |
   | f | function name    |
   | l | let name         |

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
