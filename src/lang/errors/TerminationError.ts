import { LangError } from "./LangError"

export class TerminationError extends LangError {
  constructor(public message: string) {
    super(message)
  }
}
