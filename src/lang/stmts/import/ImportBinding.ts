export type ImportBinding = ImportBindingName | ImportBindingRename

export type ImportBindingName = {
  kind: "ImportBindingName"
  name: string
}

export function ImportBindingName(name: string): ImportBindingName {
  return {
    kind: "ImportBindingName",
    name,
  }
}

export type ImportBindingRename = {
  kind: "ImportBindingRename"
  name: string
  rename: string
}

export function ImportBindingRename(
  name: string,
  rename: string,
): ImportBindingRename {
  return {
    kind: "ImportBindingRename",
    name,
    rename,
  }
}
