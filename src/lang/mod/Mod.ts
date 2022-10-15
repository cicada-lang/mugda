import { Denotation } from "../denotation"

/**

   NOTE The paper call `Signature`, we call `Mod`.

   Which has `denotations` mapping from `name` to different kind of `Denotation`s.
   If all `Denotation` can be viewed as `Value`, we can simply use `Env` here.
   (The terminology `Denotation` is learned from EOPL.)

**/

export class Mod {
  denotations: Map<string, Denotation> = new Map()
}
