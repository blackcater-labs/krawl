export type WSPayload = CustomPayload | ErrorPayload

export interface CustomPayload {
  type: 'custom'
  event: string
  data?: any
}

export interface ErrorPayload {
  type: 'error'
  err: {
    message: string
    stack: string
  }
}

export interface Server {}
