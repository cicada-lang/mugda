export type Exp = Var // | Pi | Fn | Ap | Let | Type

export type Var = {
  family: "Exp"
  kind: "Var"
  name: string
}

// x -- variable
// c -- constructor name
// D -- data type name
// f -- function name
// l -- let name

// export type Pattern = Var | Data | Inaccessible
