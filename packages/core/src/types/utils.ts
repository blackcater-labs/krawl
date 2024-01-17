export type Awaitable<T> = T | PromiseLike<T>
export type Promisable<T> = T | PromiseLike<T>

export type Optional<T> = T | undefined

export type NoOptional<T> = T extends undefined ? never : T

export type Nullable<T> = T | null | undefined

// export type NoNullable<T> = T extends null | undefined ? never : T // typescript supported

export type Arrayable<T> = T | T[]

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}

export type DeepRequired<T> = {
  [P in keyof T]-?: DeepRequired<T[P]>
}

export type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>
}

export type Writable<T> = {
  -readonly [P in keyof T]: T[P]
}

export type DeepWritable<T> = {
  -readonly [P in keyof T]: DeepWritable<T[P]>
}

export type FlatObject<T> = {
  [P in keyof T]: T[P]
}

export type PartialByKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type RequiredByKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

export type ReadonlyByKeys<T, K extends keyof T> = Omit<T, K> & Readonly<Pick<T, K>>

export type WritableByKeys<T, K extends keyof T> = Omit<T, K> & Writable<Pick<T, K>>
