import { Span } from "../span"
import { LangError } from "./LangError"

export class ElaborationError extends LangError {
  constructor(public message: string, public options: { span?: Span }) {
    super(message)
  }

  report(options?: { text?: string }): string {
    if (this.options.span && options?.text) {
      return [this.message + "\n", this.options.span.report(options.text)].join(
        "\n",
      )
    }

    return this.message
  }
}
