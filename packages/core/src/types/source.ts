export interface SourceOptions {
  [key: string]: any
}

export interface Source {
  // Source id
  id: string
  // Source value
  value: string
  // Source type
  type: string
  // Source options
  options?: SourceOptions

  [key: string]: any
}

export type SourceValue = string | Pick<Source, 'value' | 'options'>
