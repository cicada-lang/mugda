export type ImportBinding = ImportBindingName | ImportBindingRename

export type ImportBindingName = {
  "@kind": "ImportBindingName"
  name: string
}

export function ImportBindingName(name: string): ImportBindingName {
  return {
    "@kind": "ImportBindingName",
    name,
  }
}

export type ImportAlias = {
  name: string
  alias: string
}

export function ImportAlias(name: string, alias: string): ImportAlias {
  return {
    name,
    alias,
  }
}

export type ImportBindingRename = {
  "@kind": "ImportBindingRename"
  aliases: Array<ImportAlias>
}

export function ImportBindingRename(
  aliases: Array<ImportAlias>,
): ImportBindingRename {
  return {
    "@kind": "ImportBindingRename",
    aliases,
  }
}
