import { Clause } from "../clause"
import * as Errors from "../errors"
import { Value } from "../value"

export function matchClauses(clauses: Array<Clause>, args: Array<Value>): Value {
  for (const clause of clauses) {
    const value = matchClause(clause, args)
    if (value !== undefined) {
      return value
    }
  }

  throw new Errors.EvaluationError("clauses missmatch.")
}

function matchClause(clause: Clause, args: Array<Value>): Value | undefined {
  throw new Error()
}
