import { Env, EnvNull } from "../env"

/**

   NOTE The paper call `Signature`, we call `Mod`.

   NOTE The paper use `denotations` mapping from `name` to different kind of `Denotation`s.
   We view all `Denotation` as `Value`, thus we can simply use `Env` here.
   (The terminology `Denotation` is learned from EOPL.)

**/

export class Mod {
  env: Env = EnvNull()
}
