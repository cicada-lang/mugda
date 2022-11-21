export type Pattern = Var | Ctor | Compute

export type Var = {
  "@type": "Pattern"
  "@kind": "Var"
  name: string
}

export function Var(name: string): Var {
  return {
    "@type": "Pattern",
    "@kind": "Var",
    name,
  }
}

export type Ctor = {
  "@type": "Pattern"
  "@kind": "Ctor"
  name: string
  args: Array<Pattern>
}

export function Ctor(name: string, args: Array<Pattern>): Ctor {
  return {
    "@type": "Pattern",
    "@kind": "Ctor",
    name,
    args,
  }
}

export type Compute = {
  "@type": "Pattern"
  "@kind": "Compute"
  pattern: Pattern
}

export function Compute(pattern: Pattern): Compute {
  return {
    "@type": "Pattern",
    "@kind": "Compute",
    pattern,
  }
}
