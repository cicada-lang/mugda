import { Closure } from "../closure"
import type { Env } from "../env"
import { Exp, Telescope } from "../exp"
import { Mod } from "../mod"
import type { Neutral } from "../neutral"
import { Clause } from "../value"

export type Value = UntypedNeutral | Type | Pi | Fn | FnMatch | Data | Ctor

export type UntypedNeutral = {
  "@type": "Value"
  "@kind": "UntypedNeutral"
  neutral: Neutral
}

export function UntypedNeutral(neutral: Neutral): UntypedNeutral {
  return {
    "@type": "Value",
    "@kind": "UntypedNeutral",
    neutral,
  }
}

export type Type = {
  "@type": "Value"
  "@kind": "Type"
}

export function Type(): Type {
  return {
    "@type": "Value",
    "@kind": "Type",
  }
}

export type Pi = {
  "@type": "Value"
  "@kind": "Pi"
  argType: Value
  retTypeClosure: Closure
}

export function Pi(argType: Value, retTypeClosure: Closure): Pi {
  return {
    "@type": "Value",
    "@kind": "Pi",
    argType,
    retTypeClosure,
  }
}

export type Fn = {
  "@type": "Value"
  "@kind": "Fn"
  retClosure: Closure
}

export function Fn(retClosure: Closure): Fn {
  return {
    "@type": "Value",
    "@kind": "Fn",
    retClosure,
  }
}

export type FnMatch = {
  "@type": "Value"
  "@kind": "FnMatch"
  type: Value
  clauses: Array<Clause>
  arity: number
  isChecked: boolean
  args: Array<Value>
}

export function FnMatch(
  type: Value,
  clauses: Array<Clause>,
  arity: number,
  isChecked: boolean,
  args: Array<Value>,
): FnMatch {
  return {
    "@type": "Value",
    "@kind": "FnMatch",
    type,
    clauses,
    arity,
    isChecked,
    args,
  }
}

/**
   | parameters | fixed  |
   | indexes    | varied |
**/

export type Data = {
  "@type": "Value"
  "@kind": "Data"
  name: string
  mod: Mod
  env: Env
  fixed: Telescope
  varied: Telescope
  args: Array<Value>
  arity: number
}

export function Data(
  name: string,
  mod: Mod,
  env: Env,
  fixed: Telescope,
  varied: Telescope,
  args: Array<Value>,
): Data {
  return {
    "@type": "Value",
    "@kind": "Data",
    name,
    mod,
    env,
    fixed,
    varied,
    args,
    arity: fixed.bindings.length + varied.bindings.length,
  }
}

export type Ctor = {
  "@type": "Value"
  "@kind": "Ctor"
  name: string
  mod: Mod
  env: Env
  fixed: Telescope
  slots: Telescope
  retType: Exp
  args: Array<Value>
  arity: number
}

export function Ctor(
  name: string,
  mod: Mod,
  env: Env,
  fixed: Telescope,
  slots: Telescope,
  retType: Exp,
  args: Array<Value>,
): Ctor {
  return {
    "@type": "Value",
    "@kind": "Ctor",
    name,
    mod,
    env,
    fixed,
    slots,
    retType,
    args,
    arity: fixed.bindings.length + slots.bindings.length,
  }
}
