import { Exp } from "../exp"
import { Pattern } from "../pattern"

export type Clause = {
  patterns: Array<Pattern>
  ret: Exp
}
