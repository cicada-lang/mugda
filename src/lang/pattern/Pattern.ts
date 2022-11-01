export type Pattern = Var | Ctor | Compute

export type Var = {
  family: "Pattern"
  kind: "Var"
  name: string
}

export function Var(name: string): Var {
  return {
    family: "Pattern",
    kind: "Var",
    name,
  }
}

export type Ctor = {
  family: "Pattern"
  kind: "Ctor"
  name: string
  args: Array<Pattern>
}

export function Ctor(name: string, args: Array<Pattern>): Ctor {
  return {
    family: "Pattern",
    kind: "Ctor",
    name,
    args,
  }
}

export type Compute = {
  family: "Pattern"
  kind: "Compute"
  pattern: Pattern
}

export function Compute(pattern: Pattern): Compute {
  return {
    family: "Pattern",
    kind: "Compute",
    pattern,
  }
}
