export type Pattern = Var | Data | Inaccessible

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

export type Data = {
  family: "Pattern"
  kind: "Data"
  name: string
  args: Array<Pattern>
}

export function Data(name: string, args: Array<Pattern>): Data {
  return {
    family: "Pattern",
    kind: "Data",
    name,
    args,
  }
}

export type Inaccessible = {
  family: "Pattern"
  kind: "Inaccessible"
}
