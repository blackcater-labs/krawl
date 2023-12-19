export interface GlobalCLIOptions {
  '--'?: string[]
}

export interface StartCLIOnlyOptions {}
export interface StartCLIOptions extends GlobalCLIOptions, StartCLIOnlyOptions {}

export interface CreateCLIOnlyOptions {}
export interface CreateCLIOptions extends GlobalCLIOptions, CreateCLIOnlyOptions {}
