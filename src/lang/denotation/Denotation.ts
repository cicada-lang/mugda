export type Denotation = Fn | Let | Ctor | Data

export type Fn = {
  family: "Denotation"
  kind: "Fn"
}

export type Let = {
  family: "Denotation"
  kind: "Let"
}

export type Ctor = {
  family: "Denotation"
  kind: "Ctor"
}

export type Data = {
  family: "Denotation"
  kind: "Data"
}
