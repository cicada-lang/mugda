import { Exp } from "../exp"
import { Mod } from "../mod"
import { Pattern } from "../pattern"
import { CallMatrix } from "../termination"

export function extractCallMatrixes(
  mod: Mod,
  recursiveNames: Set<string>,
  left: string,
  patterns: Array<Pattern>,
  body: Exp,
): Array<CallMatrix> {
  // TODO
  return []
}
