import { Exp } from "../exp"
import { Pattern } from "../pattern"

export type Clause = {
  name: string
  args: Array<Pattern>
  ret: Exp
}
